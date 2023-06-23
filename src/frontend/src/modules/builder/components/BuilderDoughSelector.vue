<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <RadioButton
          v-for="dough in doughArray"
          :key="dough.id"
          :value="dough.classValue"
          :name="dough.name"
          :description="dough.description"
          class="dough__input"
          :class="`dough__input--${dough.classValue}`"

          :isChecked="value === defaultChecked"
          @change="updateDough(value)"
        >
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }} </span>
        </RadioButton>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/modules/builder/components/RadioButton";

export default {
  name: "BuilderDoughSelector",
  data() {
    return {

    }
  },
  components: {
    RadioButton
  },
  props: {
    doughArray: {
      type: Array,
      required: true,
    },
    defaultChecked: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateDough(value) {
      this.$emit('selectDough', value);
    },
  },
  mounted() {
    console.log()
  }
};
</script>
