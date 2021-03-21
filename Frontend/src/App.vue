<template>
  <div id="app">
    <b-container>
      <Navbar></Navbar>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./pages/Navbar";
export default {
  name: "App",
  components: {Navbar},
};
</script>

<style>
  @import './assets/style.css';
  template{background-color:black};
</style>
