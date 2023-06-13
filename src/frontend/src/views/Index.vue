<template>
  <main class="content">
    <form action="#" method="post">

      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">

          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="({ id, classValue, name, description }) in dough"
                :key="id"
                class="dough__input"
                :class="`dough__input--${classValue}`">
                <input type="radio" name="dough" :value="classValue" class="visually-hidden" checked>
                <b>{{ name }}</b>
                <span>{{ description }}</span>
              </label>
            </div>

          </div>

        </div>

        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="({id, pizzaSize, name }) in sizes"
                :key="id"
                class="diameter__input"
                :class="`diameter__input--${pizzaSize}`">
                <!-- checked second element by default-->
                <input type="radio" name="diameter" :value="pizzaSize" checked
                       class="visually-hidden">
                <span>{{name}}</span>
              </label>

            </div>
          </div>
        </div>

        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

            <div class="sheet__content ingredients">

              <div class="ingredients__sauce">
                <p>Основной соус:</p>

                <label
                  class="radio ingredients__input"
                  v-for="({id, name, saucesName }) in sauces"
                  :key="id"
                >
                  <input type="radio" name="sauce" :value="saucesName" checked />
                  <span>{{ name }}</span>
                </label>
              </div>

              <div class="ingredients__filling">
                <p>Начинка:</p>

                <ul class="ingredients__list">
                  <li
                    class="ingredients__item"
                    v-for="{ id, name, ingredientName } in ingredients"
                    :key="id"
                  >
                      <span
                        class="filling"
                        :class="`filling--${ingredientName}`">
                        {{name }}
                      </span>

                    <div class="counter counter--orange ingredients__counter">
                      <button type="button"
                        class="counter__button counter__button--minus"
                        disabled
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input type="text" name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input type="text" name="pizza_name" placeholder="Введите название пиццы">
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>

      </div>
    </form>
  </main>
</template>

<script>
import misc from "@/static/misc.json";
import user from "@/static/user.json";
import pizza from "@/static/pizza.json";
import { PIZZA_PARAMETERS } from "@/common/constants.js"

export default {
  name: "Index",
  data() {
    return {
      misc,
      user,
      pizza
    };
  },
  computed: {
    dough() {
      return this.pizza.dough.map((dough) => ({
        ...dough,
        classValue: PIZZA_PARAMETERS.dough[dough.name]
      }));
    },
    sizes() {
      return this.pizza.sizes.map((size) => ({
        ...size,
        pizzaSize: PIZZA_PARAMETERS.sizes[size.name]
      }))
    },
    sauces() {
      return this.pizza.sauces.map((sauce) => ({
        ...sauce,
        saucesName: PIZZA_PARAMETERS.sauces[sauce.name]
      }))
    },
    ingredients() {
      return this.pizza.ingredients.map((ingredient) => ({
        ...ingredient,
        ingredientName: PIZZA_PARAMETERS.ingredients[ingredient.name]
      }))
    },
  },
  mounted() {
    console.log('ingredients', this.ingredients)
  }
};


</script>

<style scoped>
@import "~@/assets/scss/mixins/mixins.scss";
@import "~@/assets/scss/layout/content.scss";
@import "~@/assets/scss/layout/sheet.scss";
@import "~@/assets/scss/blocks/dough.scss";
@import "~@/assets/scss/blocks/diameter.scss";
@import "~@/assets/scss/blocks/ingredients.scss";
@import "~@/assets/scss/blocks/filling.scss";
@import "~@/assets/scss/blocks/pizza.scss";
@import "~@/assets/scss/blocks/title.scss";
@import "~@/assets/scss/blocks/button.scss";
@import "~@/assets/scss/blocks/input.scss";
@import "~@/assets/scss/blocks/radio.scss";
@import "~@/assets/scss/blocks/counter.scss";
</style>
