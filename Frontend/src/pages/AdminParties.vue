<template>
  <div>
    <b-jumbotron>
      <p>Welcome <i>{{ uname }}</i>!</p>
      <p>All Parties</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading parties....</div>
    <ul v-else>
      <h3>Parties: </h3><br>
      <li v-for="party in parties" :key="party.partyid">
        <router-link :to="`party/${party.partyid}`">
        {{party.partyname}}
        </router-link> 
      </li> 
    </ul>
  </div>
</template>

<script>
import Api from "../api";
import {  } from '../auth';

export default {
  name: "AdminParties",
  data: function () {
    return {
      isAdmin: Api.getPatron(),
      loading: false,
      parties: [],
      uname: Api.getUserName(),
    };
  },
  created: function () {
    document.title="Admin - Parties";
    Api.getPatron().then((res) => {
      //console.log(res);
      this.isAdmin = (res.data[0].isadmin == 1);
    if (this.isAdmin == false) {
      this.$router.push("/");
    }
    });
    this.loading = true;
    Api.getAllParties().then((res) => {
      //console.log(res);
      this.parties = res.data;
      this.loading = false;
    });
  },
};
</script>