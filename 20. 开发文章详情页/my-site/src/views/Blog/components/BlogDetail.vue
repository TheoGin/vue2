<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <aside class="aside">
      <span>日期：{{ dateFormat(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="">评论：{{ blog.commentNumber }}</a>
      <!-- <a href="">分类：{{ blog.category.id }}</a> -->
      <a href="">{{ blog.category.name }}</a>
    </aside>
    <div class="main-content markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { dateFormat } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";

export default {
  methods: {
    dateFormat,
  },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

// 写在这也可以
// @import "~@/styles/markdown.css";

/*.blog-detail-container {
  height: 100%;
}*/
.aside {
  font-size: 12px;
  color: @gray;

  span,
  a {
    margin-right: 15px;
  }
}

.main-content {
  // margin-top: 32px;
  margin: 2em 0;
}
</style>
