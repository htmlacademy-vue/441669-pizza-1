<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          class="dough__input"
          :class="`dough__input--${dough.class}`"
          v-for="(dough, index) in dough"
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
</template>

<script>
export default {
  name: "BuilderDoughSelector",
  props: {
    dough: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
