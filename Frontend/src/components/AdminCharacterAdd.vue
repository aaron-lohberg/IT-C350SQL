<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item to="/"> Characters </b-breadcrumb-item>
      <b-breadcrumb-item active>Add Character</b-breadcrumb-item>
    </b-breadcrumb>
    <div class="card card-container p-4">
      <form name="form" @submit.prevent="handleAdd">
        <div>
          <div class="form-group">
            <label for="charactername">Character Name</label>
            <input
              v-model="charname"
              type="text"
              class="form-control"
              name="charname"
            />
          </div>
          <div class="form-group">
            <label for="characterlevel">Character Level</label>
            <textarea
              v-model="charlevel"
              class="form-control"
              name="charlevel"
            />
          </div>
          <div class="form-group">
            <label for="characterfeat">Character Feat</label>
            <textarea
              v-model="charfeat"
              class="form-control"
              name="charfeat"
            />
          </div>
          <div class="form-group">
            <label for="characterstrength">Character Strength</label>
            <textarea
              v-model="strength"
              class="form-control"
              name="strength"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Add Character</span>
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
  name: "AdminCharacterAdd",
  data() {
    return {
      title: "",
      content: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    handleAdd() {
      this.loading = true;
      this.message = "";
      Api.addCharacter({ title: this.title, content: this.content })
        .then(() => {
          this.loading = false;
          this.$router.push("/admin/");
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
};
</script>