<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="data:image/png;base64,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"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div>
          <div class="form-group">
            <label for="campaing">Campaign:</label>
            <input
              v-model="campaignname"
              type="text"
              class="form-control"
              name="campaignname"
            />
          </div>
          <div class="form-group">
            <label for="partyname">Party Name:</label>
            <input
              v-model="partyname"
              type="text"
              class="form-control"
              name="partyname"
            />
          </div>
          <div class="form-group">
            <label for="startinglevel">Starting Level:</label>
            <input
              v-model="startinglevel"
              type="text"
              class="form-control"
              name="startinglevel"
            />
          </div>
          <div class="form-group">
            <label for="groupsize">Maximum Group Size:</label>
            <input
              v-model="groupsize"
              type="text"
              class="form-control"
              name="groupsize"
            />
          </div>
          <div class="form-group">
            <label for="location">Location:</label>
            <input
              v-model="location"
              type="text"
              class="form-control"
              name="location"
            />
          </div>
          <div class="form-group">
            <label for="playtime">Weekly Meetup Time:</label>
            <input
              v-model="playtime"
              type="text"
              class="form-control"
              name="playtime"
            />
          </div>
          <h4>(Optional)</h4>
          <div class="form-group">
            <label for="partydescription">Description:</label>
            <input
              v-model="partydescription"
              type="text"
              class="form-control"
              name="partydescription"
            />
          </div>
          <div class="form-group">
            <label for="skilllevel">Skill Level:</label>
            <input
              v-model="skilllevel"
              type="text"
              class="form-control"
              name="skilllevel"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Create Party</span>
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
  name: "Register",
  created(){
        document.title = "Create a New Party";
  },
  data() {
    return {
      campaignname: "",
      partyname: "",
      startinglevel: "",
      groupsize: "",
      location: "",
      playtime: "",
      partydescription: "",
      skilllevel: "",
      loading: false,
      message: "",
      msg:[],
    };
  },
  methods: {
    handleRegister() {
      this.message = "";
      this.loading = true;

      Api.createParty(this.campaignname, this.partyname, this.startinglevel,this.groupsize, this.location, this.playtime,this.partydescription, this.skilllevel)
        .then(() => {
            this.$router.push("/");
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

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>