import doughValues from "@/common/enums/doughValues";
import sizeValues from "@/common/enums/sizeValues";
import saucesValues from "@/common/enums/saucesValues";
import ingredientsValues from "@/common/enums/ingredientsValues";

export function normalizePizza(pizza) {
  return {
    ...pizza,
    dough: pizza.dough.map((item) => ({
      ...item,
      classValue: doughValues[item.name]
    })),
    sizes: pizza.sizes.map((item) => ({
      ...item,
      classValue: sizeValues[item.name]
    })),
    sauces: pizza.sauces.map((item) => ({
      ...item,
      classValue: saucesValues[item.name]
    })),
    ingredients: pizza.ingredients.map((item) => ({
      ...item,
      classValue: ingredientsValues[item.name]
    }))
  };
}


