<template>
  <div>
    <b-jumbotron>
      <div v-if="loading">Loading ticket....</div>
      <div v-else>
      <h3>View your Ticket:</h3>
      </div>
    </b-jumbotron>
    <br>
    <div v-if="loading">Loading ticket....</div>
    <div v-else>
      <p><b>Description:</b> {{ ticket.description }}</p>
      <p><b>Date Created:</b> {{ ticket.datecreated }}</p>
      <p><b>Status:</b> {{ ticket.status }}</p>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "TicketDetail",
  data: function () {
    return {
      isAdmin: true,
      loading: false,
      ticket: null,
    };
  },
  created: function () {
    document.title = "Ticket Status";
    this.loading = true;
    Api.getPatron().then((res) => {
      //console.log(res);
      this.patron = res.data[0];
      this.isAdmin = (res.data[0].isadmin == 1);
      this.loading = false;
    });
    Api.getTicket(this.$route.params.id).then((res) => {
      //console.log(res);
      this.ticket = res.data[0];
      this.loading = false;
    });
  },
};
</script>