<template>
  <div id="app">
    <button @click="titleLevel++">titleLevel+1</button>
    <button @click="titleLevel--">titleLevel-1</button>
    <!-- <ul>123</ul> -->
    <!--<component is="ul">123</component>-->
    <!--
      mode="out-in" 先消失，后进入
      mode="in-out" 先进入，再消失
    -->
    <transition name="title" appear mode="out-in">
      <component :is="`h${titleLevel}`">titleLevel：{{ titleLevel }}</component>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleLevel: 1
    };
  }
};
</script>

<style>
#app {
  text-align: center;
}

.title-enter,
.title-leave-to {
  opacity: 0;
}

.title-enter-active,
.title-leave-active {
  transition: .5s;
}
</style>
