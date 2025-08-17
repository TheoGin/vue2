<template>
  <div>
    <!-- <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg" :width="100" :height="100" /> -->
    <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg" :size="100" />
    <Avatar url="https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg" :size="150" />
  </div>
</template>

<script>
// 可以省略.vue后缀
import Avatar from './components/Avatar';
export default {
  components: {
    Avatar
  }
}
</script>