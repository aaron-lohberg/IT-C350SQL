<template>
  <div>
    <b-jumbotron>
      <p>Welcome to the IT350 blog!</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading characters....</div>
    <ul v-else>
      <li v-for="character in characters" :key="character.charid">
        <router-link :to="`character/${character.charid}`">{{
          character.charname
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "Home",
  data: function () {
    return {
      loading: false,
      characters: []
    };
  },
  created: function () {
    this.loading = true;
    Api.getCharacters().then((res) => {
      this.characters = res.data;
      this.loading = false;
    });
  },
};
</script>