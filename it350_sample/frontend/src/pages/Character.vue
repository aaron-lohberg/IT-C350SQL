<template>
  <div>
    <div v-if="loading">Loading character....</div>
    <div v-else>
      <h1>{{ character.charname }}</h1>
      <p>{{ character.charlevel }}</p>
    </div>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "CharacterDetail",
  data: function () {
    return {
      loading: false,
      character: null,
    };
  },
  created: function () {
    this.loading = true;
    Api.getCharacterDetail(this.$route.params.id).then((res) => {
      this.character = res.data[0];
      this.loading = false;
    });
  },
};
</script>