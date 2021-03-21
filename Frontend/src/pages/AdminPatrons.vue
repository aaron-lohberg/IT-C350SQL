<template>
  <div>
    <b-jumbotron>
      <p>Welcome <i>{{ uname }}</i>!</p>
      <p>All Patrons</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading patrons....</div>
    <ul v-else>
      <h3>Patrons: </h3><br>
      <li v-for="patron in patrons" :key="patron.patronid">
        <router-link :to="`adminpatron/${patron.patronid}`">
        {{patron.patronname}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api";
import {  } from '../auth';

export default {
  name: "AdminPatrons",
  data: function () {
    return {
      isAdmin: Api.getPatron(),
      loading: false,
      patrons: [],
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
    });
    this.loading = true;
    Api.getAllPatrons().then((res) => {
      //console.log(res);
      this.patrons = res.data;
      this.loading = false;
    });
  },
};
</script>