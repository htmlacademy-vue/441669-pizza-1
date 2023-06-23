<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="name"
      :checked="true"
      @change="change($event)"
      class="visually-hidden"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  data() {
    return {
      value: '',
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
  },
  methods: {
    change(event) {
      this.value = event.target.value
    },
  },
}
</script>

<style scoped>

</style>
