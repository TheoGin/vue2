<template>
  <div>
    <p>
      <!-- update:n1事件名 -->
      <button type="button" @click="$emit('update:n1', n1 - 1)">-</button>
      <span>{{ n1 }}</span>
      <button type="button" @click="$emit('update:n1', n1 + 1)">+</button>
    </p>
    <p>
      <button type="button" @click="$emit('update:n2', n2 - 1)">-</button>
      <span>{{ n2 }}</span>
      <button type="button" @click="$emit('update:n2', n2 + 1)">+</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["n1", "n2"],
  created() {
    console.log(this.$parent) // 可以拿到父组件的实例
  }
};
</script>
