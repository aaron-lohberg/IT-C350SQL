<template>
  <div>
    <b-jumbotron>
      <div v-if="loading">Loading account information....</div>
      <div v-else>
      <p>View your Account:</p>
      </div>
    </b-jumbotron>
    <br>
    <div v-if="loading">Loading account information....</div>
    <div v-else>
      <h3><b>Name:</b> {{ patron.patronname }}</h3>
      <p><b>Date Created:</b> {{ patron.patrondatecreated }}</p>
      <p><b>Email:</b> {{ patron.patronemail }}</p>

      <p>View your characters: <router-link :to="`/`">Here</router-link></p>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "PatronDetail",
  data: function () {
    return {
      isAdmin: true,
      loading: false,
      patron: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.getPatron().then((res) => {
      //console.log(res);
      this.patron = res.data[0];
      this.isAdmin = (res.data[0].isadmin == 1);
      this.loading = false;
    });
  },
};
</script>