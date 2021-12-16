import { PIZZA_PARAMETRS } from "./constants";

export const getPizzaParametrs = (pizza) => ({
  dough: pizza.dough.map((dough) => ({
    ...dough,
    class: PIZZA_PARAMETRS.dough[dough.name],
  })),
  ingredients: pizza.ingredients.map((ingredients) => ({
    ...ingredients,
    class: PIZZA_PARAMETRS.ingredients[ingredients.name],
  })),
  sauces: pizza.sauces.map((sauces) => ({
    ...sauces,
    class: PIZZA_PARAMETRS.sauces[sauces.name],
  })),
  sizes: pizza.sizes.map((sizes) => ({
    ...sizes,
    class: PIZZA_PARAMETRS.sizes[sizes.name],
  })),
});
