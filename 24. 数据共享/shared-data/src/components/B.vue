<template>
  <div class="block">
    <p>the number is</p>
    <h1>{{ $store.state.count }}</h1>
    <p>
      <button @click="handleAsyncDecrease">异步减少</button>
      <!-- 不推荐 -->
      <!-- <button @click="$store.state.count++">增加</button> -->

      <button @click="handleIncrease">增加</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleIncrease() {
      this.$store.commit("increase");
    },
    handleAsyncDecrease() {
      this.$store.dispatch("asyncDecrease");
    },
  },
};
</script>
