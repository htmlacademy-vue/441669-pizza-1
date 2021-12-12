<template>
  <div id="app">
    <Header />
    <Index />
  </div>
</template>

<script>
import Index from "@/views/Index";
import Header from "@/layouts/Header";

export default {
  name: "App",
  components: {
    Header,
    Index,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
