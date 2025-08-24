<template>
  <div class="home-container" ref="container">
    <ul>
      <li v-for="item in banners" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";

export default {
  data() {
    return {
      banners: [],
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  methods: {},
};
</script>

<style scoped lang="less">
.home-container {
}
</style>
