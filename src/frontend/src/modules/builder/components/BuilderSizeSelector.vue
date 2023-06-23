<template>
  <label
    class="diameter__input">
    <input
      type="radio"
      name="diameter"
      :value="value"
      class="visually-hidden"
      :checked="checked"
    />
    <span>{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: "BuilderSizeSelector",
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
