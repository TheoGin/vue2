<template>
  <div class="layout-container">
    <!-- <slot v-slot="left"></slot> -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <main class="main">
      <slot name="main"></slot>
    </main>
    <aside class="right">
      <slot name="right"></slot>
    </aside>
  </div>
</template>

<script></script>

<style>
.layout-container {
  display: flex;
  .left {
    width: 250px;
    height: 100vh;
  }
  .main {
    flex: 1 1 auto;
  }

  .right {
    width: 260px;
  }
}
</style>
