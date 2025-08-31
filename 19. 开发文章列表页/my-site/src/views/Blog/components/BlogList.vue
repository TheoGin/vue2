<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul v-if="">
      <li v-for="item in data.rows" :key="item.id">
        <div v-if="item.thumb" class="thumb">
          <a href="">
            <img :src="item.thumb" :alt="item.title" :title="item.title"/>
          </a>
        </div>
        <div class="main">
          <a href="">
            <h2>{{ item.title }}</h2>
          </a>
          <div class="aside">
            <span>日期：{{ dateFormat(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link :to="{
            name: 'BlogCategory',
            query: {
              page: routeInfo.page,
              limit: routeInfo.limit,
            },
            params: {
              categoryId: item.category.id,
            },
            }" class="">{{ item.category.name }}
            </router-link>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
        v-if="data.total"
        :total="data.total"
        :current="routeInfo.page"
        :limit="routeInfo.limit"
        :visible-number="10"
        @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import {getBlogs} from "@/api/blog";
import Pager from "@/components/Pager/index.vue";
import fetchData from "@/mixins/fetchData";
import {dateFormat} from "@/utils";

export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    dateFormat, // 要在模版中用，要写在 methods 中
    async fetchData() {
      return await getBlogs(
          this.routeInfo.page,
          this.routeInfo.limit,
          this.routeInfo.categoryId
      );
    },
    async handlePageChange(newPageNum) {
      const query = {
        page: newPageNum,
        limit: this.routeInfo.limit,
      };
      // 两种情况
      if (this.routeInfo.categoryId !== -1) {
        // 1、http://localhost:8080/article/2?page=2&limit=20
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
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
  watch: {
     async $route() {
      this.$refs.container.scrollTop = 0;

      this.isLoading = true;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
    /*['$route.params.categoryId']: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      immediated: true,
      deep: true
    },*/
  }
}
;
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;

  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;

    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }

  .main {
    flex: 1 1 auto;

    h2 {
      margin: 0;
    }
  }

  .aside {
    font-size: 12px;
    color: @gray;

    span {
      margin-right: 15px;
    }
  }

  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
