<template>
  <div>
    <b-jumbotron>
      <h3>View your Party(s):</h3>
    </b-jumbotron>
    <br>
    <div v-if="loading">Loading parties....</div>
    <ul v-else>
      <h3>Your parties: </h3><br>
      <div class="grid-container3">
          <div class="grid-item3">
            <p>Party ID:</p>
          </div>
          <div class="grid-item3">
            <p>Party Name:</p>
          </div>
          <div class="grid-item3">
            <p>Campaign Name:</p>
          </div>
          <div class="grid-item3">
            <p>Time and Day + Location:</p>
          </div>
        </div>
      <li v-for="party in partys" :key="party.partyid">
        <router-link :to="`party/${party.partyid}`">
        <div class="grid-container2">
          <div class="grid-item2">
            {{party.partyid}}
          </div>
          <div class="grid-item2">
            {{party.partyname}}
          </div>
          <div class="grid-item2">
            {{party.campaignname}}
          </div>
          <div class="grid-item2">
            {{party.timeandday}} @ {{party.location}}
          </div>
          </div>
        </router-link> 
      </li> 
    </ul>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "MyPartyDetail",
  data: function () {
    return {
      isAdmin: true,
      loading: false,
      partys: [],
    };
  },
  created: function () {
    document.title = "My Parties";
    this.loading = true;
    Api.getPatron().then((res) => {
      //console.log(res);
      this.isAdmin = (res.data[0].isadmin == 1);
    });
    Api.getUserParties().then((res) => {
        console.log(res);
        this.partys = res.data;
        this.loading = false;
    });
  },
};
</script>