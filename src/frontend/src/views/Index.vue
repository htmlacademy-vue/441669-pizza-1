<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector :dough="pizza.dough" />
        <BuilderSizeSelector
          :sizes="pizza.sizes"
          @change="sizeValue = $event"
        />
        <BuilderIngredientsSelector
          :sauces="pizza.sauces"
          :ingredients="pizza.ingredients"
        />
        <BuilderPizzaView
          :sizes="pizza.sizes"
          :sauces="pizza.sauces"
          :selected-dough="selectedDough"
          :ingredients="pizza.ingredients"
          :pizza-name="pizzaName"
        />
      </div>
    </form>
  </main>
</template>

<script>
import misc from "@/static/misc.json";
import user from "@/static/user.json";
import pizza from "@/static/pizza.json";
import { getPizzaParametrs } from "../common/helpers";

import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";

export default {
  name: "Index",
  components: {
    BuilderSizeSelector,
    BuilderPizzaView,
    BuilderIngredientsSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      misc,
      user,
      pizza: getPizzaParametrs(pizza),
      pizzaName: "",
      selectedDough: pizza.dough[0],
      selectedSize: pizza.sizes[0],
      selectedSauce: pizza.sauces[0],
    };
  },
};
</script>

<style scoped>
@import "../assets/scss/mixins/mixins.scss";
@import "../assets/scss/layout/content.scss";
@import "../assets/scss/layout/sheet.scss";
@import "../assets/scss/blocks/dough.scss";
@import "../assets/scss/blocks/diameter.scss";
@import "../assets/scss/blocks/ingredients.scss";
@import "../assets/scss/blocks/filling.scss";
@import "../assets/scss/blocks/pizza.scss";
@import "../assets/scss/blocks/title.scss";
@import "../assets/scss/blocks/button.scss";
@import "../assets/scss/blocks/input.scss";
@import "../assets/scss/blocks/radio.scss";
@import "../assets/scss/blocks/counter.scss";
</style>
