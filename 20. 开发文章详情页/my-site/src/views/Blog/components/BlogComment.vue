<template>
  <MessageArea
      :title="title"
      :subTitle="data.total + ''"
      :isLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
  />
</template>

<script>
import MessageArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData";
import {getComments, postComment} from "@/api/blog";

export default {
  mixins: [fetchData({total: 0, rows: []})],
  components: {
    MessageArea,
  },
  data() {
    return {
      title: "评论列表",
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  created() {
    window.fetchMore = this.fetchMore
    this.$bus.$on('mainScroll', this.handleScroll);
  },
  destroyed() {
    this.$bus.off('mainScroll', this.handleScroll);
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    // 加载更多
    async fetchMore() {
      if(!this.hasMore) {
        return;
      }
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.total++;
      this.data.rows.unshift(resp);
      callback("评论成功");
    },
    async handleScroll(mainContainer) {
      if (this.isloading) {
        // 防止滚动触发多次
        return;
      }
      const range = 100; // 不用完全相等，滚动容器的底部和页面底部之间的距离小于100即可
      // console.log(mainContainer.clientHeight);
      // console.log(mainContainer.scrollTop);
      // console.log(mainContainer.scrollHeight);
      const dec = Math.abs(mainContainer.scrollHeight - (mainContainer.scrollTop + mainContainer.clientHeight));
      if (dec < range) {
        console.log("加载更多")
        this.isLoading = true;
        await this.fetchMore();
        this.isloading = false;
      }
    }
  },
};
</script>

<style lang="less" scoped></style>
