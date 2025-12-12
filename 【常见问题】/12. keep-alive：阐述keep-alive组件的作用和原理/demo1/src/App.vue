<template>
  <div id="app">
    <p>
      <button @click="curIndex = (curIndex + 1) % comps.length">
        switch
      </button>
    </p>
    <!-- include和exclude属性（注：里面写的需要组件有name配置组件名才生效，还有递归的情况也是） -->
    <!--<keep-alive :include="['Comp1', 'Comp2']" exclude="Comp3">-->
    <keep-alive include="Comp1,Comp2" exclude="Comp3">
    <!--<keep-alive :max="2">-->
      <component :is="comps[curIndex]"></component>
    </keep-alive>
  </div>
</template>

<script>
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
export default {
  data() {
    return {
      comps: Object.freeze([Comp1, Comp2, Comp3]),
      curIndex: 0,
    };
  },
};
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
  text-align: center;
}
</style>

