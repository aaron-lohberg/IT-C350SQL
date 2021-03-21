<template>
  <div>
    <b-jumbotron>
      <div v-if="loading">Loading character....</div>
      <div v-else>
      <p>{{ uname }}'s Character: {{character.charname}}!</p>
      </div>
    </b-jumbotron>
    <br>
    <div v-if="loading">Loading character....</div>
    <div v-else>
      <h3><b>Name:</b> {{ character.charname }}</h3>
      <p><b>Race:</b> {{ character.racename }}</p>
      <p><b>Class:</b> {{ character.dndclassname }}</p>
      <p><b>Level:</b> {{ character.charlevel }}</p>
      <p><b>Background:</b> {{ character.background }}</p>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "CharacterDetail",
  data: function () {
    return {
      isAdmin: true,
      loading: false,
      character: null,
      uname: Api.getUserName(),
    };
  },
  created: function () {
    this.loading = true;
    Api.getPatron().then((res) => {
      //console.log(res);
      this.isAdmin = (res.data[0].isadmin == 1);
    });
    Api.getCharacterSummary(this.$route.params.id).then((res) => {
      this.character = res.data[0];
      this.loading = false;
    });
  },
};
</script>