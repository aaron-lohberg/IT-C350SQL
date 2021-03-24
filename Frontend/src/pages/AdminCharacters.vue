<template>
  <div>
    <b-jumbotron>
      <p>Welcome <i>{{ uname }}</i>!</p>
      <p>All Characters</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading characters....</div>
    <ul v-else>
      <h3>Characters: </h3><br>
      <div class="grid-container2">
          <div class="grid-item3">
            <p>Character Name:</p>
          </div>
          <div class="grid-item3">
            <p>Race:</p>
          </div>
          <div class="grid-item3">
            <p>Class:</p>
          </div>
          <div class="grid-item3">
            <p>Character Level:</p>
          </div>
        </div>
      <li v-for="character in characters" :key="character.charid">
        <router-link :to="`character/${character.charid}`">
        <div class="grid-container2">
          <div class="grid-item2">
            {{character.charname}}
          </div>
          <div class="grid-item2">
            {{character.racename}}
          </div>
          <div class="grid-item2">
            {{character.subclass}}
          </div>
          <div class="grid-item2">
            {{character.charlevel}}
          </div>
          </div>
        </router-link> 
      </li> 
    </ul>
  </div>
</template>

<script>
import Api from "../api";
import {  } from '../auth';

export default {
  name: "AdminCharacters",
  data: function () {
    return {
      isAdmin: Api.getPatron(),
      loading: false,
      characters: [],
      uname: Api.getUserName(),
    };
  },
  created: function () {
    document.title = "Admin - Characters";
    Api.getPatron().then((res) => {
      //console.log(res);
      this.isAdmin = (res.data[0].isadmin == 1);
    if (this.isAdmin == false) {
      this.$router.push("/");
    }
    });
    this.loading = true;
    Api.getAllCharacters().then((res) => {
      //console.log(res);
      this.characters = res.data;
      this.loading = false;
    });
  },
};
  </script>