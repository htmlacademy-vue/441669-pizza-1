import { PIZZA_PARAMETRS } from "./constants";

export const getPizzaParametrs = (pizza) => ({
  dough: pizza.dough.map((dough) => ({
    ...dough,
    class: PIZZA_PARAMETRS.dough[dough.name],
    checked: !--dough.id,
    type: "doughs",
  })),
  ingredients: pizza.ingredients.map((ingredients) => ({
    ...ingredients,
    class: PIZZA_PARAMETRS.ingredients[ingredients.name],
    type: "ingredient",
    count: 0,
    permissions: {
      decrease: false,
      increase: true,
    },
  })),
  //томатный и сливочный
  sauces: pizza.sauces.map((sauces) => ({
    ...sauces,
    class: PIZZA_PARAMETRS.sauces[sauces.name],
  })),
  sizes: pizza.sizes.map((sizes) => ({
    ...sizes,
    class: PIZZA_PARAMETRS.sizes[sizes.name],
  })),
});
