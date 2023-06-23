<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="name"
      :checked="isChecked"
      @change="$emit('change', $event.target.value)"
      class="visually-hidden"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
