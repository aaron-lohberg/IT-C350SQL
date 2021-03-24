<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleTicket">
        <div>
          <div class="form-group">
            <label for="description">Ticket Description</label>
            <input
              v-model="description"
              placeholder="Enter your problem here"
              type="text"
              class="form-control"
              name="description"
            />
            <span v-if="msg.text">{{msg.text}}</span>
          </div>
          <div class="form-group">
            <button v-if="description.length > 49" class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Submit Ticket</span>
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
  name: "CreateTicket",
  created(){
        document.title = "Create a Service Ticket";
  },
  data() {
    return {
      patronid: Api.getUserID(),
      description: "",
      loading: false,
      message: "",
      msg:[],
    };
  },
  watch:{
    description(value){
      this.description = value;
      this.validateTicket(value);
    }
  },
  methods: {
    validateTicket(ticketDescription){
      if(ticketDescription.length < 50){
        this.msg['text'] = "Ticket Description must be at least 50 characters";
      }
      else{
        this.msg['text'] = "";
      }
    },
    handleTicket() {
      this.message = "";
      this.loading = true;
      Api.createTicket(this.patronid, this.description)
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