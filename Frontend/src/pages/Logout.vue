<template>
  <div>Logging you out...</div>
</template>

<script>
import { deleteJwtToken } from "../auth";
export default {
  name: "Logout",
  mounted: function () {
    deleteJwtToken();
    this.$router.push({ path: "/login" });
    this.$router.go(0); // refresh the page - https://stackoverflow.com/a/47005895
  },
};
</script>