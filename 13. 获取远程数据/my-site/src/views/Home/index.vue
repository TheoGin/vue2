<template>
  <div class="home-container" ref="container">
    <h1>主页</h1>
  </div>
</template>

<script>
import { getBanners } from '@/api/banner.js'
getBanners().then(r => {
    console.log(r)
})
export default {
  methods: {
    
  },
};
</script>

<style scoped lang="less">
.home-container {
  width: 200px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid;
}
</style>
