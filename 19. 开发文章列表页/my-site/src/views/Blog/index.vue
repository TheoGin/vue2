<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        <div class="main">
          <Blog />
        </div>
      </template>
      <template #right>
        <div class="right">
          <BlogCategory />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout/index.vue';
import BlogList from "@/views/Blog/components/BlogList.vue";
import BlogCategory from "@/views/Blog/components/BlogCategory.vue";

export default {
  components: {
    Layout,
    Blog: BlogList,
    BlogCategory,
  }
}
</script>

<style scoped lang="less">
.main {
  height: 100vh;
}
.right {
  width: 300px;
  height: 100vh;
}
</style>