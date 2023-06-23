<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <RadioButton
          v-for="dough in doughArray"
          :key="dough.id"
          :value="dough.classValue"
          name="dough"
          :description="dough.description"
          class="dough__input"
          :class="`dough__input--${dough.classValue}`"

          @change="updateDough($event)"
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
      message: '',
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
  },

  methods: {
    updateDough(event) {
      this.message = event.target.value;
      this.$emit('selectDough', this.message)
    },
  },
  mounted() {
    console.log('  this.message ',  this.message )
  }
};
</script>
