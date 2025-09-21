<template>
  <div class="detail-container">
    <Layout>
      <!-- <div ref="mainContainer" class="main-container" v-loading="isLoading"> -->
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail v-if="data" :blog="data" />

        <!-- 加载完BlogDetail在加载MessageArea -->
        <BlogComment v-if="!isLoading" />
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogTOC ref="tocContainer" v-if="data" :toc="data.toc" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import BlogTOC from "@/views/Blog/components/BlogTOC.vue";
import fetchData from "@/mixins/fetchData";
import { getBlog, postComment } from "@/api/blog";
import BlogDetail from "@/views/Blog/components/BlogDetail.vue";
import BlogComment from "@/views/Blog/components/BlogComment.vue";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";

export default {
  mixins: [fetchData(null), mainScroll('mainContainer')],
  components: {
    BlogComment,
    Layout,
    BlogDetail,
    BlogTOC,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      // console.log(resp.title); // CORS跨域方案详解
      titleController.setRouteTitle(resp.title);
      return resp;
    },
    /*handleScroll() {
      /!* this.$refs.tocContainer.setActiveAnchor();
      console.log(this.$refs.tocContainer) *!/
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },*/
  },
  /* created() {
    window.addEventListener("scroll", () => {
      this.scrollTop = this.$refs.divContainer.scrollTop;
    });
  },
  data() {
    return {
      scrollTop: 0,
    };
  }, */
  /*mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);

    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  },
  beforeDestro
    // 可以才销毁元素时，不一直显示ToTop组件
    // this.$bus.$emit("mainScroll", undefined);
    // 不传就是undefined
    this.$bus.$emit("mainScroll");
    
    // this.$refs.mainContainer.removeEventListener("scroll", this.debounceFn);
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);

    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  },*/
  updated() {
    // 直接在地址栏输入的时候，没有调到锚点 http://localhost:8081/article/edA7A5Ca-31CA-cc05-fAaC-8dd3BBEABd7C#article-md-title-2
    // 因为是先
    const hash = location.hash;
    location.hash = "";
    /* if (hash) {
      location.hash = hash;
    } */
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
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
  overflow-y: scroll;
  height: 100%;
  position: relative;
  padding: 20px;
}
</style>
