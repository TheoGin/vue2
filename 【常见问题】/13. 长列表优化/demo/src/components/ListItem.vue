<template>
  <div class="item-container">
    <div>id{{ item.id }}</div>
    <div>name{{ item.name }}</div>
    <div>age{{ item.age }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: []
    }
  }
};
</script>

<style scoped>
.item-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #ccc;
  height: 54px;
  line-height: 54px;
}
</style>
