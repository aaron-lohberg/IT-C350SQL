<template>
  <div>
    <b-jumbotron>
      <p>Welcome <i>{{ uname }}</i>!</p>
      <p>All Tickets</p>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading tickets....</div>
    <ul v-else>
      <h3>Tickets: </h3><br>
      <div class="grid-container">
          <div class="grid-item">
            <p>Description:</p>
          </div>
          <div class="grid-item">
            <p>Status:</p>
          </div>
          <div class="grid-item">
            <p>User:</p>
          </div>
        </div>
      <li v-for="ticket in tickets" :key="ticket.ticketid">
        <router-link :to="`ticket/${ticket.ticketid}`">
        <div class="grid-container2">
          <div class="grid-item2">
            {{ticket.description}}
          </div>
          <div class="grid-item2">
            {{ticket.status}}
          </div>
          <div class="grid-item2">
            {{ticket.patronname}}
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
  name: "AdminTickets",
  data: function () {
    return {
      isAdmin: Api.getPatron(),
      loading: false,
      tickets: [],
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
    Api.getAllTickets().then((res) => {
      //console.log(res);
      this.tickets = res.data;
      this.loading = false;
    });
  },
};
</script>