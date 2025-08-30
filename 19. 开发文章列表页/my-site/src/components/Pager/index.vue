<template>
  <div class="pager-container">
    <!-- handleClick
        1、不写括号，并且不传递参数默认是 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
        2、要传递事件参数需要写 $event
        -->
    <!-- <a href="" :class="{ disabled: current === 1 }" @click.prevent="handleClick">|&lt;&lt;</a> -->
    <!-- <a href="" :class="{ disabled: current === 1 }" @click.prevent="handleClick($event)">|&lt;&lt;</a> -->
    <!-- 第一页 -->
    <a
      href=""
      :class="{ disabled: current === 1 }"
      @click.prevent="handleClick(1)"
      >|&lt;&lt;</a
    >
    <!-- 上一页 -->
    <a
      href=""
      :class="{ disabled: current === 1 }"
      @click.prevent="handleClick(current - 1)"
      >&lt;&lt;</a
    >
    <a
      href=""
      v-for="(n, index) in nums"
      :key="index"
      :class="{ active: current === n }"
      @click.prevent="handleClick(n)"
    >
      {{ n }}
    </a>
    <!-- 下一页 -->
    <a
      href=""
      :class="{ disabled: current === pageNumber }"
      @click.prevent="handleClick(current + 1)"
    >
      &gt;&gt;
    </a>
    <!-- 最后一页 -->
    <a
      href=""
      :class="{ disabled: current === pageNumber }"
      @click.prevent="handleClick(pageNumber)"
    >
      &gt;&gt;|</a
    >
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    margin: 0 6px;
    color: @primary;
    cursor: pointer;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      // total: 102   limit: 10  --> 10.2，但应该有 11 页 --> 需要向上取整
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示的最小数字
    visibleMin() {
      // visibleNumber / 2 = 5.5
      //   let min = Math.floor(this.current - this.visibleNumber / 2);
      let min = this.current - Math.floor(this.visibleNumber / 2);
      // 最小不能为负数
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    // 展示的页码数组
    nums() {
      const nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPageNum) {
      if (newPageNum < 1) {
        newPageNum = 1;
      }
      if (newPageNum > this.pageNumber) {
        newPageNum = this.pageNumber;
      }
      // 就在当前页点击无效
      if (newPageNum === this.current) {
        return;
      }
      // 1. 抛出事件：子组件在某个时候发生了一件事，但自身无法处理，于是通过事件的方式通知父组件处理
      // 2. 事件参数：子组件抛出事件时，传递给父组件的数据
      this.$emit("pageChange", newPageNum); // 抛出一个事件
    },
  },
};
</script>
