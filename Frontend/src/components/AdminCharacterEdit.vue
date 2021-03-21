<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item to="/admin"> Admin </b-breadcrumb-item>
      <b-breadcrumb-item active>Edit Character</b-breadcrumb-item>
    </b-breadcrumb>
    <div v-if="loading">Loading characters...</div>
    <div v-else class="card card-container p-4">
      <form name="form" @submit.prevent="handleSave">
        <div>
          <div class="form-group">
            <label for="characterid">Character Id</label>
            <input
              v-model="character.charid"
              type="text"
              class="form-control"
              name="id"
              readonly
            />
          </div>
          <div class="form-group">
            <label for="characterid">Character Name</label>
            <input
              v-model="character.charname"
              type="text"
              class="form-control"
              name="name"
            />
          </div>
          <div class="form-group">
            <label for="charlevel">Character Level</label>
            <textarea
              v-model="character.charlevel"
              class="form-control"
              name="charlevel"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="saving">
              <span
                v-show="saving"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Save</span>
            </button>
          </div>
        </div>
      </form>

      <div v-if="message" class="alert alert-danger">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "AdminCharacterEdit",
  data: function () {
    return {
      loading: false,
      saving: false,
      character: null,
    };
  },
  methods: {
    loadCharacterDetail() {
      this.loading = true;
      Api.getCharacterDetail(this.$route.params.id).then((res) => {
        this.character = res.data[0];
        this.loading = false;
      });
    },
    handleSave() {
      this.saving = true;
      Api.updateCharacter(this.character)
        .then(() => {
          this.saving = false;
          this.$router.push("/admin");
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            this.message = error.response.data.message;
          }
          this.loading = false;
        });
    },
  },
  created: function () {
    this.loadCharacterDetail();
  },
};
</script>