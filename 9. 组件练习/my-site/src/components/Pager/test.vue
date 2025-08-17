<template>
  <div>
    <Pager 
      :total="total" 
      :current="current" 
      @pageChange="handlePageChange" 
    />

    <Pager :total="102" :current="11" />
    <Pager :total="202" :current="13" :visible-number="20" />
    <!-- 驼峰或横线都可以 -->
    <Pager :total="202" :current="13" :visibleNumber="20" />
    <Pager :total="62" :current="6" :limit="3" />
  </div>
</template>

<script>
import Pager from "./";

export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 102,
    };
  },
  methods: {
    // 3. 注册事件：父组件申明，当子组件发生某件事的时候，自身将做出一些处理
    handlePageChange(newPageNum) {
      this.current = newPageNum;
      console.log("加载当前页数据");
    },
  },
};
</script>

<style scoped></style>
