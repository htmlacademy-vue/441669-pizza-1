<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="pizzaName"
      />
    </label>
    <div class="content__constructor">
      <div class="pizza" :class="pizzaClass">
        <div class="pizza__wrapper">
          <div
            class="pizza__filling"
            v-for="ingredient in ingredients"
            :key="ingredient.id"
            :class="`pizza__filling--${ingredient.class}`"
          ></div>
        </div>
      </div>
    </div>
    <BuilderPriceCounter />
  </div>
</template>

<script>
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
export default {
  name: "BuilderPizzaView",
  components: {
    BuilderPriceCounter,
  },
  props: {
    pizzaName: {
      type: String,
      default: "",
    },
    selectedDough: {
      type: Object,
      default: () => [],
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
    sizes: {
      type: Array,
      default: () => [],
    },
    sauces: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    doughClassName() {
      return this.selectedDough.value === "large" ? "big" : "small";
    },
    pizzaClass() {
      return `pizza-foundation--${this.doughClassName}-${this.sauces}`;
    },
  },
};
</script>
