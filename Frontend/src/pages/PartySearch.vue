<template>
  <div class="col-md-12">
    <div class="card card-container">
      <h3>Search for a Party Opening</h3>
      <form name="form" @submit.prevent="handleSearch">
        <div>
          <div class="form-group">
            <label for="partyname">Party Name</label>
            <input
              v-model="partyname"
              type="text"
              class="form-control"
              name="partyname"
            />
          </div>
          <div class="form-group">
            <label for="campaignname">Campaign Name</label>
            <input
              v-model="campaignname"
              type="text"
              class="form-control"
              name="campaignname"
            />
          </div>
          <div class="form-group">
            <label for="startinglevel">Starting Level</label>
            <input
              v-model="startinglevel"
              type="number"
              class="form-control"
              name="startinglevel"
            />
          </div>
          <div class="form-group">
            <label for="maxsize">Group Size</label>
            <input
              v-model="maxsize"
              type="number"
              class="form-control"
              name="maxsize"
            />
          </div>
          <div class="form-group">
            <label for="skilllevel">Skill Level</label>
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
              <span>Find Parties</span>
            </button>
          </div>
        </div>
      </form>

      <div v-if="message" class="alert alert-danger">
        {{ message }}
      </div>
    </div>
    <div class="card party-container">
      <h3>Parties: </h3>
      <div v-if="loading">Loading parties....</div>
      <ul v-else>
        <li v-for="party in parties" :key="party.partyid">
            <router-link :to="`party/${party.partyid}`">
            {{party.partyname}}
            </router-link> 

            <ul>
                <li>Campaign: {{party.campaignname}}</li>
                <li>Description: {{party.description}}</li>
                <li>DM: {{party.dungeonmaster}}</li>
                <li>Location: {{party.location}}</li>
                <li>Time: {{party.timeandday}}</li>
                <li>Max Size: {{party.maxsize}}</li>
                <li>Skill Level: {{party.skilllevel}}</li>
                <li>Starting Level: {{party.startinglevel}}</li>
                <li>Notes: {{party.notes}}</li>
            </ul>
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "PartySearch",
  data() {
    return {
      partyname: "",
      campaignname: "",
      startinglevel: "",
      maxsize: "",
      skilllevel: "",
      loading: false,
      message: "",
      msg:[],
      parties: [],
    };
  },
  watch:{
    partyname(value){
      this.partyname = value;
    },
    campaignname(value){
      this.campaignname = value;
    },
    startinglevel(value){
      this.startinglevel = value;
    },
    maxsize(value){
      this.maxsize = value;
    },
    skilllevel(value){
      this.skilllevel = value;
    }
  },
  methods: {
    handleSearch() {
      this.message = "";
      this.loading = true;

      Api.getFilteredParties(this.partyname, this.campaignname, this.startinglevel, this.maxsize, this.skilllevel)
        .then((res) => {
            console.log(res);
            this.parties = res.data;
            this.loading = false;
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

.party-container.card {
  max-width: 700px !important;
  padding: 40px 40px;
}

.card {
  display: inline-flex!important;
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