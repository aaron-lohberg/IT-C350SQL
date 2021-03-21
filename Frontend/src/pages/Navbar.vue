<!-- https://stackoverflow.com/a/47434176 -->

<template>
  <div>
    <b-navbar type="dark" variant="info" style="background-color: #104E8B !important;">
      <b-navbar-nav v-if="isLoggedIn">
        <b-nav-item href="#/">All Things DnD</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Parties">
          <b-dropdown-item href="#/MyParties">My Parties</b-dropdown-item>
          <b-dropdown-item href="#/CreateParty">Create a New Party</b-dropdown-item>
          <b-dropdown-item href="#/PartySearch">Find a Party</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Characters">
          <b-dropdown-item href="#/">View Existing</b-dropdown-item>
          <b-dropdown-item href="#/CreateCharacter">Create New</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#/createticket" v-if="isLoggedIn" right>Create a Service Ticket</b-nav-item>
        <b-nav-item href="#/admin" v-if="isAdmin" right>Admin</b-nav-item>
        <b-nav-item href="#/register" v-if="!isLoggedIn" right>Register</b-nav-item>
        <b-nav-item href="#/login" v-if="!isLoggedIn" right>Login</b-nav-item>
        <b-nav-item href="#/logout" v-if="isLoggedIn" right>Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import Api from "../api";
import { getJwtToken } from '../auth';

export default {
  name: "Navbar",
  data: function () {
    return {
      isAdmin: false,
      loading: false,
      isLoggedIn: false,
    };
  },
  created: function () {
    this.loading = true;
    if (getJwtToken() != null)
    {
        this.isLoggedIn = true;
        Api.getPatron().then((res) => {
            //console.log(res);
            this.isAdmin = (res.data[0].isadmin == 1);
        });
    }
    
    
  },
};
</script>