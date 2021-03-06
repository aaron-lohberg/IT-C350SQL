import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://localhost:8000";

class Api {
  getCharacters() {
    var patronid = getUserIdFromToken(getJwtToken());
    return axios.get(API_URL + "/characters?patronid=eq.", patronid);
  }

  getCharacterDetail(id) {
    return axios.get(API_URL + `/characters?charid=eq.${id}`);
  }

  addCharacter(character) {
    return axios.post(
      API_URL + "/characters",
      {
        ...character,
        // add user id from JWT token
        patronid: getUserIdFromToken(getJwtToken()),
      },
      {
        headers: authHeader(),
      }
    );
  }

  updateCharacter(character) {
    return axios.patch(
      API_URL + `/characters?charid=eq.${character.charid}`,
      character,
      {
        headers: authHeader(),
      }
    );
  }

  deleteCharacer(id) {
    return axios.delete(API_URL + `/characters?charid=eq.${id}`, {
      headers: authHeader(),
    });
  }

  publishCharacter(id) {
    return axios.post(
      API_URL + "/rpc/publish",
      { id: id },
      {
        headers: authHeader(),
      }
    );
  }

  login(patronname, password) {
    return axios.post(API_URL + "/rpc/login", { patronname, password });
  }

  signup(patronname, patronpassword, patronemail) {
    return axios.post(API_URL + "/rpc/signup", { patronname, patronpassword, patronemail });
  }
}

export default new Api();
