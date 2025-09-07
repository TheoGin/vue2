<template>
  <MessageArea :title="title" :isLoading="isLoading" :data="data" @submit="handleSubmit" />
</template>

<script>
import MessageArea from "@/components/MessageArea/index.vue";
import fetchData from "@/mixins/fetchData";
import {getComments, postComment} from "@/api/blog";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data(){
    return {
      title: '评论列表',
      page: 1,
      limit: 10,
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.total++;
      this.data.rows.unshift(resp);
      callback('评论成功');
    },
  },
};
</script>

<style lang="less" scoped></style>
