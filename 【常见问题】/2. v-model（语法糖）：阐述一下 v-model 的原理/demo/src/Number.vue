<template>
  <!--  <div class="number-container">
      <button type="button" @click="handleClick(value - 1)">-</button>
      {{ value }}
      <button type="button" @click="handleClick(value + 1)">+</button>
    </div>-->
  <div class="number-container">
    <button type="button" @click="handleClick(number - 1)">-</button>
    <span>{{ number }}</span>
    <button type="button" @click="handleClick(number + 1)">+</button>
  </div>
</template>

<script>
export default {
  // props: ["value"],
  props: ["number"],
  model: {
    prop: "number",
    event: "update:number",
  },
  methods: {
    /*handleClick(newValue) {
      // this.$emit('update:value', newValue)
      this.$emit("input", newValue);
    },*/
    handleClick(newValue) {
      this.$emit("update:number", newValue);
    },
  },
};
</script>

<style>
.number-container {
  display: inline-block;
}
</style>

