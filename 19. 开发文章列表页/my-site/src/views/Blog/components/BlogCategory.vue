<template>
  <div class="right-list-container" v-loading="isLoading">
    <!-- 直接传递没有全部，需要map -->
<!--    <RightList :list="data"></RightList>-->
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
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce((acc, item) => acc + item.articleCount, 0)
      const result = [{id: -1, name: '全部', articleCount: totalArticleCount}, ...this.data];
      return result.map(item => {
        return {
          ...item,
          isSelect: item.id === this.categoryId
        }
      })
    }
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
      // 两种情况
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
    }
  },
};
</script>

<style scoped lang="less">
.right-list-container {
  position: relative;
  height: 100%;
  overflow-y: auto;
}
</style>
