<template>
  <div id="app">
    <navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    navbar: () => import("./components/navbar")
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
