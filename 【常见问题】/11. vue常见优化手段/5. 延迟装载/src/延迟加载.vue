<template>
  <div class="container">
    <!-- <div class="block" v-for="n in 21" v-if="defer(n)">
      <heavy-comp></heavy-comp>
    </div> -->
    <!--<div class="block" v-if="defer(1)">
      <heavy-comp></heavy-comp>
    </div>
    <div class="block" v-if="defer(100)">
      <heavy-comp></heavy-comp>
    </div>
    <div class="block" v-if="defer(200)">
      <heavy-comp></heavy-comp>
    </div>-->
    <!-- 第 0 帧内渲染出来-->
    <!--<heavy-comp1 v-if="defer(0)" />-->

    <!-- 第 1 帧内渲染出来-->
    <!--<heavy-comp2 v-if="defer(1)" />-->

    <!-- 第 2 帧内渲染出来-->
    <!--<heavy-comp3 v-if="defer(2)" />-->

    <!-- 第 3 帧内渲染出来-->
    <!--<heavy-comp4 v-if="defer(3)" />-->
  </div>
</template>

<script>
import HeavyComp from "./components/HeavyComp.vue";
import defer from "./mixin/defer";
export default {
  // methods: {defer},
  mixins: [defer(21)],
  components: { HeavyComp },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
.block {
  border: 3px solid #f40;
}
</style>

