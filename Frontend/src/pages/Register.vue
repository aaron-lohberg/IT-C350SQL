<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div>
          <div class="form-group">
            <label for="patronname">Username</label>
            <input
              v-model="patronname"
              type="text"
              class="form-control"
              name="patronname"
            />
          </div>
          <div class="form-group">
            <label for="patronpassword">Password</label>
            <input
              v-model="patronpassword"
              type="password"
              class="form-control"
              name="patronpassword"
            />
            <span v-if="msg.password">{{msg.password}}</span>
          </div>
          <div class="form-group">
            <label for="patronemail">Email</label>
            <input
              v-model="patronemail"
              type="email"
              class="form-control"
              name="patronemail"
            />
          </div>
          <div class="form-group">
            <button v-if="patronpassword.length > 15" class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Sign Up</span>
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
        document.title = "Register";
  },
  data() {
    return {
      patronname: "",
      patronpassword: "",
      patronemail: "",
      loading: false,
      message: "",
      msg:[],
    };
  },
  watch:{
    patronpassword(value){
      this.patronpassword = value;
      this.validatePassword(value);
    }
  },
  methods: {
    validatePassword(pwd){
      if(pwd.length < 16){
        this.msg['password'] = "Password must be at least 16 characters";
      }
      else{
        this.msg['password'] = "";
      }
    },
    handleRegister() {
      this.message = "";
      this.loading = true;

      Api.signup(this.patronname, this.patronpassword, this.patronemail)
        .then(() => {
            this.$router.push("/login");
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