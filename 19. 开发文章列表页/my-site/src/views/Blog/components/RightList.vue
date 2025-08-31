<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index" @click="handleClick(item)">
      <!--  用一个元素包起来，不然其子项会全部 active    -->
      <span :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span class="aside" :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.articleCount + '篇' }}
      </span>
      <!-- 显示当前组件 -->
      <RightList @select="handleClick" :list="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if(item.isSelect) {
        return;
      }
      this.$emit("select", item);
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/var.less";

.right-list-container {
  list-style: none;
  padding: 0;

  li {
    // height: 40px;
    // 要给最小高度，而不能给高度
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;

    span.active {
      color: @warn;
      font-weight: bold;
    }

    .aside {
      font-size: 12px;
      color: @gray;
      margin-left: 12px;
    }
  }

  // 第一个距离不要
  .right-list-container {
    // margin-left: 14px;
    margin-left: 1em;
  }
}
</style>
