<template>
  <div class="test-container">
    <div class="item" v-for="(t, index) in types" :key="index">
      <Icon :type="t" />
      <div>{{ t }}</div>
    </div>
  </div>
</template>

<script>
import Icon from "./";
import { types } from "./index.vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 580px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px auto;
  .item {
    /* display: flex; */
    margin: 15px;
    text-align: center;
  }
}
</style>
