<template>
  <div id="app">
    <AppLayout/>
    <Index
      :dough="dough"
    />
  </div>
</template>

<script>
import Index from "@/views/Index";
import AppLayout from "@/layouts/AppLayout";
import {normalizePizza} from "@/common/helpers";
import pizza from "@/static/pizza.json";

export default {
  name: "App",
  data() {
    return {
      pizza: normalizePizza(pizza),
      dough: pizza.dough,
    };
  },
  components: {
    AppLayout,
    Index,
  },
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
