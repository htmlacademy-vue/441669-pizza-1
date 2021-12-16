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
                class="dough__input"
                :class="`dough__input--${dough.class}`"
                v-for="(dough, index) in pizza.dough"
                :key="dough.id"
              >
                <input
                  type="radio"
                  name="dough"
                  :value="dough.class"
                  class="visually-hidden"
                  :checked="index === 1"
                />
                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>
            <div class="sheet__content diameter">
              <label
                class="diameter__input"
                :class="`diameter__input--${size.class}`"
                v-for="(size, index) in pizza.sizes"
                :key="size.id"
              >
                <input
                  type="radio"
                  name="diameter"
                  value="size.class"
                  class="visually-hidden"
                  :checked="index === 1"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>
            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>
                <label
                  class="radio ingredients__input"
                  v-for="(sauce, index) in pizza.sauces"
                  :key="sauce.id"
                >
                  <input
                    type="radio"
                    name="sauce"
                    value="sauce.class"
                    :checked="index === 0"
                  />
                  <span>{{ sauce.name }}</span>
                </label>
              </div>
              <div class="ingredients__filling">
                <p>Начинка:</p>
                <ul class="ingredients__list">
                  <li
                    class="ingredients__item"
                    v-for="ingredient in pizza.ingredients"
                    :key="ingredient.id"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.class}`"
                    >
                      {{ ingredient.name }}
                    </span>
                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="counter__button counter__button--minus"
                        disabled
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
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
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
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
import { getPizzaParametrs } from "../common/helpers";

export default {
  name: "Index",
  data() {
    return {
      misc,
      user,
      pizza: getPizzaParametrs(pizza),
    };
  },
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
