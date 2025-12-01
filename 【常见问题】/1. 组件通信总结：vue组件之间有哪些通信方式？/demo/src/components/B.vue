<template>
  <div>
    <h1>B inject: {{ a }}；{{ b }}</h1>
    <h1>B store.number.value: {{ number.value }}</h1>
  </div>
</template>

<script>
import store from "@/store";

export default {
  inject: ['a', 'b'],
  data() {
    return {
      number: store.number
    }
  },
  mounted() {
    console.log(this.a, this.b)
    console.log(this.number.value)
  }
};
</script>

<style></style>

