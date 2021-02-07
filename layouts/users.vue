<template>
  <div>
    <Header />
    <header>USERS SECTION</header>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  components: {
    Header,
  },
});
</script>

<style>
</style>
