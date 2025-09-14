<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";
import { debounce } from "@/utils";

export default {
  components: { RightList },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    list() {
      const getToc = (toc) => {
        if (!toc) {
          return;
        }
        return toc.map((item) => {
          return {
            ...item,
            isSelect: item.anchor === this.activeAnchor,
            children: getToc(item.children),
          };
        });
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const getDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            getDoms(t.children);
          }
        }
      };
      getDoms(this.toc);
      return doms;
    },
  },
  created() {
    // window.setActiveAnchor = this.setActiveAnchor;
    this.setSelectDebounce = debounce(this.setActiveAnchor, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setActiveAnchor() {
      // ??
      if (!this.doms) {
        return;
      }
      const range = 200;
      this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定0 - 200范围内 激活锚点
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-size: 1em;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>
