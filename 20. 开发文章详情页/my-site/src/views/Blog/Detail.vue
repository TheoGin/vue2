<template>
  <div class="detail-container">
    <Layout>
      <div class="main-container" v-loading="isLoading">
        <BlogDetail v-if="data" :blog="data" />
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogTOC v-if="data" :toc="data.toc" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout/index.vue';
import BlogTOC from "@/views/Blog/components/BlogTOC.vue";
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import BlogDetail from "@/views/Blog/components/BlogDetail.vue";

export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id);
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  padding: 20px;
  overflow-y: scroll;
  // height: 100%;
  height: 100vh;
  height: 100vh;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  position: relative;
  padding: 20px;
}
</style>