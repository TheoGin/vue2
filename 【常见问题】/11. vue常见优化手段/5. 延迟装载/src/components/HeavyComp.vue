<template>
  <div class="item-container">
    <span class="small-dot" v-for="i in 5000" :key="i"></span>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.small-dot {
  width: 5px;
  height: 3px;
  background-color: #b8b8b8;
  margin: 0.1em;
}
</style>