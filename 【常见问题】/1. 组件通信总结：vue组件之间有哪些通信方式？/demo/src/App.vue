<template>
  <div id="app">
    <numbers
      ref="num1"
      :n1="n1"
      :n2="n2"
      @update:n1="n1 = $event"
      @update:n2="n2 = $event"
    />
    <!-- 等价于 -->
     <numbers ref="num2" :n1.sync="n1" :n2.sync="n2" />
  </div>
</template>

<script>
import Numbers from "./components/Numbers.vue";

export default {
  components: {
    Numbers,
  },
  data() {
    return {
      n1: 0,
      n2: 0,
    };
  },
  mounted() {
    // console.log('this.$children', this.$children);
    console.log(this.$refs) // {num1: VueComponent, num2: VueComponent}
  }
};
</script>
