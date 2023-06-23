<template>
  <label
    class="radio ingredients__input">
    <input type="radio"
           name="sauce"
           :value="value"
           :checked="checked"
    />
    <span>{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: "BuilderIngredientsSelector",
  props: {
    value: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
};
</script>
