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
import { getComments, postComment } from "@/api/blog";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
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
    },
  },
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    // this.$bus.off('mainScroll', this.handleScroll);
    // [Vue warn]: Error in beforeDestroy hook: "TypeError: this.$bus.off is not a function"

    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async handleScroll(mainContainer) {
      if (this.isLoading || !mainContainer) {
        // 目前正在加载更多
        return; // 防止滚动触发多次
      }
      // 一个可接受的范围，在这个范围内都算达到了底部
      const range = 100; // 不用完全相等，滚动容器的底部和页面底部之间的距离小于100即可
      // console.log(mainContainer.clientHeight);
      // console.log(mainContainer.scrollTop);
      // console.log(mainContainer.scrollHeight);
      const dec = Math.abs(
        mainContainer.scrollHeight -
          (mainContainer.scrollTop + mainContainer.clientHeight)
      );
      if (dec <= range) {
        await this.fetchMore();
      }
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    // 加载更多
    async fetchMore() {
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.total++;
      this.data.rows.unshift(resp);
      callback("评论成功"); // 告诉子组件，我这边处理完了，你继续
    },
  },
};
</script>

<style lang="less" scoped></style>
