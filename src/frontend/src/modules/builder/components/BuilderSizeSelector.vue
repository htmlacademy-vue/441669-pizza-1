<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <label
          class="diameter__input"
          :class="`diameter__input--${size.class}`"
          v-for="(size, index) in sizes"
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
</template>

<script>
export default {
  name: "BuilderSizeSelector",
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
