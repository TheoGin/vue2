<template>
  <div class="blog-container">
    <Layout>
      <BlogList />
      <template #right>
        <BlogCategory />
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
    BlogList,
    BlogCategory,
  }
}
</script>

<style scoped lang="less">
.blog-container {
  height: 100%;
}
</style>