<template>
  <div>
    <b-jumbotron>
      <p>Welcome <i>{{ uname }}</i>!</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading characters....</div>
    <ul v-else>
      <h3>Your Characters: </h3><br>
      <li v-for="character in characters" :key="character.charid">
        <router-link :to="`character/${character.charid}`">
        {{character.charname}}
        </router-link> 
      </li> 
    </ul>
    <br><br>
    <div v-if="loading2">Loading tickets....</div>
    <ul v-else>
      <h3>Your Tickets: </h3><br>
      <li v-for="ticket in tickets" :key="ticket.ticketid">
        <router-link :to="`ticket/${ticket.ticketid}`">
        {{ticket.description}}
        </router-link> 
      </li>
    </ul> 
  </div>
</template>

<script>
import Api from "../api";
import {  } from '../auth';

export default {
  name: "Home",
  data: function () {
    return {
      isAdmin: false,
      loading: false,
      loading2: false,
      characters: [],
      tickets: [],
      uname: Api.getUserName(),
    };
  },
  created: function () {
    document.title = "Home Page";
    this.loading = true;
    Api.getPatron().then((res) => {
      //console.log(res);
      this.isAdmin = (res.data[0].isadmin == 1);
    });
    Api.getCharacters().then((res) => {
      //console.log(res);
      this.characters = res.data;
      this.loading = false;
    });
    Api.getPatronTicket(Api.getUserID()).then((res)=>{
      this.tickets = res.data;
      this.loading2 = false;
    });
  },
};
</script>