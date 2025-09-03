<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelect"  />
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList.vue";

export default {
  components: {RightList},
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  computed: {
    list() {
      return this.toc.map(item => {
        return {
          ...item,
          // isSelect: item.anchor === this.$route.hash
        }
      })
    }
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    }
  }
}
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