<template>
  <div ref="messageContainer" class="message-container" v-loading="isLoading">
    <MessageArea
      title="留言板"
      :sub-title="`${data.total}`"
      :list="data.rows"
      :is-loading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData";
import { getMessages, postMessage } from "@/api/message";
import mainScroll from "@/mixins/mainScroll";

export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
  mounted() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getMessages(this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postMessage(formData);
      this.data.total++;
      this.data.rows.unshift(resp);
      callback("留言成功");
    },
    async handleScroll(mainContainer) {
      if (this.isLoading || !mainContainer) {
        // 目前正在加载更多
        return; // 防止滚动触发多次
      }
      // 一个可接受的范围，在这个范围内都算达到了底部
      const range = 100; // 不用完全相等，滚动容器的底部和页面底部之间的距离小于100即可
      const dec = Math.abs(
        mainContainer.scrollHeight -
          (mainContainer.scrollTop + mainContainer.clientHeight)
      );
      if (dec <= range) {
        await this.fetchMore();
      }
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
  },
};
</script>

<style scoped lang="less">
.message-container {
  // padding: 20px;
  padding: 25px 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  height: 100%;
  scroll-behavior: smooth;
}

.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
