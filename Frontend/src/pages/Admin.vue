<template>
    <div>
    <b-jumbotron>
      <p>Welcome <i>{{ uname }}</i> to the Administrative Portal!</p>
    </b-jumbotron>
    <hr />
    <div class="grid-container">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item">
        <router-link :to="`/adminpatrons`">
          View Patrons
        </router-link></div>
      <div class="grid-item"></div>
      <div class="grid-item">
        <router-link :to="`/admincharacters`">
          View Characters
        </router-link></div>
      <div class="grid-item">
        <router-link :to="`/adminparties`">
          View Parties
        </router-link></div>
      <div class="grid-item"></div>
      <div class="grid-item">
        <router-link :to="`/admintickets`">
          View Tickets
        </router-link></div>
    </div>

  </div>
</template>

<script>
import Api from "../api";
import {  } from '../auth';
export default {
  name: "Admin",
  data: function () {
    return {
      isAdmin: true,
      loading: false,
      uname: Api.getUserName(),
    };
  },
  created: function () {
    Api.getPatron().then((res) => {
      //console.log(res);
      this.isAdmin = (res.data[0].isadmin == 1);
    if (this.isAdmin == false) {
      this.$router.push("/");
    }
      //console.log("Is Admin: " + this.isAdmin);
    });
  },
};
</script>