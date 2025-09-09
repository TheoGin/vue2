<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";

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
    tocWithSelect() {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
      // const getToc = (toc) => {
      const getToc = (toc = []) => {
        /* if (!toc) {
          return;
        } */
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
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      getDoms(this.toc);
      return doms;
    },
  },
  created() {
    window.setActiveAnchor = this.setActiveAnchor;
    this.$bus.$on('mainScroll', this.setActiveAnchor);
  },
  destroyed() {
    this.$bus.$off('mainScroll');
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置激活的锚点
    setActiveAnchor() {
      const range = 200;
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在0 - 200范围内 激活锚点
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在下方
          return;
        } else {
          // 在上方
          this.activeAnchor = dom.id;
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
