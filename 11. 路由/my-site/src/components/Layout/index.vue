<template>
  <div class="layout-container">
    <!-- <slot v-slot="left"></slot> -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <main class="main">
      <!-- <slot name="default"></slot> -->
      <slot></slot>
    </main>
    <aside class="right">
      <slot name="right"></slot>
    </aside>
  </div>
</template>

<script></script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left,
  .right {
    /* 布局组件不能定宽高 */
    /* width: 250px; */
    /* height: 100vh; */
    // width: 100%;
    // height: 100%;

    // 如果主区域设置white-space: nowrap;会把右边挤出去，所以需要设置 flex: 0 0 auto
    flex: 0 0 auto;
    overflow: hidden;
  }

  .main {
    flex: 1 1 auto;
    // height: 100%;
    overflow: hidden;
  }
}
</style>
