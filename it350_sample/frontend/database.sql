CREATE OR REPLACE FUNCTION trigger_set_insert_timestamp_ticket()
RETURNS TRIGGER AS $$
BEGIN
  NEW.dateCreated = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION trigger_set_insert_timestamp_patron()
RETURNS TRIGGER AS $$ 
BEGIN 
  NEW.patronDateCreated = NOW(); 
  RETURN NEW; 
END; 
$$ LANGUAGE plpgsql;


CREATE TRIGGER set_insert_timestamp_ticket
BEFORE INSERT ON "TICKETS"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_insert_timestamp_ticket();

CREATE TRIGGER set_insert_timestamp_patron
BEFORE INSERT ON "PATRON"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_insert_timestamp_patron()


-- Setup JWT generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TYPE IF EXISTS jwt_token CASCADE;
CREATE TYPE jwt_token AS (
  token text
);

CREATE OR REPLACE FUNCTION url_encode(data bytea) RETURNS text LANGUAGE sql AS $$
    SELECT translate(encode(data, 'base64'), E'+/=\n', '-_');
$$;

CREATE OR REPLACE FUNCTION algorithm_sign(signables text, secret text, algorithm text)
RETURNS text LANGUAGE sql AS $$
WITH
  alg AS (
    SELECT CASE
      WHEN algorithm = 'HS256' THEN 'sha256'
      WHEN algorithm = 'HS384' THEN 'sha384'
      WHEN algorithm = 'HS512' THEN 'sha512'
      ELSE '' END AS id)
SELECT url_encode(hmac(signables, secret, alg.id)) FROM alg;
$$;


CREATE OR REPLACE FUNCTION sign(payload json, secret text, algorithm text DEFAULT 'HS256')
RETURNS text LANGUAGE sql AS $$
WITH
  header AS (
    SELECT url_encode(convert_to('{"alg":"' || algorithm || '","typ":"JWT"}', 'utf8')) AS data
    ),
  payload AS (
    SELECT url_encode(convert_to(payload::text, 'utf8')) AS data
    ),
  signables AS (
    SELECT header.data || '.' || payload.data AS data FROM header, payload
    )
SELECT
    signables.data || '.' ||
    algorithm_sign(signables.data, secret, algorithm) FROM signables;
$$;

