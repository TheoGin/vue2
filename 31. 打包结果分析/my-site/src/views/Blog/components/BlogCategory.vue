<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <!-- 直接传递没有全部，需要map -->
    <!-- <RightList :list="data"></RightList> -->
    <RightList :list="list" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";

export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (acc, item) => acc + item.articleCount,
        0
      );
      const result = [
        { id: -1, name: "全部", articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((item) => {
        return {
          ...item,
          isSelect: item.id === this.categoryId,
          aside: `${item.articleCount}篇`
        };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id !== -1) {
        // 1、http://localhost:8080/article/2?page=2&limit=20
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: item.id,
          },
        });
      } else {
        // 2、http://localhost:8080/article?page=2&limit=20
        this.$router.push({
          name: "Blog",
          query,
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-category-container {
  position: relative;
  width: 300px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
  padding: 20px;

  h2 {
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }
}
</style>
