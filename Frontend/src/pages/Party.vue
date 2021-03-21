<template>
  <div>
    <b-jumbotron>
      <div v-if="loading">Loading Party....</div>
      <div v-else>
      <h3>View your Party:</h3>
      </div>
    </b-jumbotron>
    <br>
    <div v-if="loading">Loading party....</div>
    <div v-else>
      <p><b>Party Name:</b> {{ party.partyname }}</p>
      <p><b>Dungeon Master:</b> {{ party.dungeonmaster }}</p>
      <p><b>Max Group Size:</b> {{ party.maxsize }}</p>
      <p><b>Time and Day:</b> {{ party.timeandday }}</p>
      <p><b>Campaign Name:</b> {{ party.campaignname }}</p>
      <p><b>Starting Level:</b> {{ party.startinglevel }}</p>
      <p><b>Skill Level:</b> {{ party.skilllevel }}</p>
      <p><b>Location:</b> {{ party.location }}</p>
      <p><b>Description:</b> {{ party.description }}</p>
      <p><b>Active Group? (1 = Yes!):</b> {{ party.isactive }}</p>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "PartyDetail",
  data: function () {
    return {
      isAdmin: true,
      loading: false,
      party: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.getPatron().then((res) => {
      //console.log(res);
      this.patron = res.data[0];
      this.isAdmin = (res.data[0].isadmin == 1);
    });
    Api.getParty(this.$route.params.id).then((res) => {
      //console.log(res);
      this.party = res.data[0];
      this.loading = false;
    });
  },
};
</script>