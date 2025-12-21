<template>
  <div class="project-container" v-loading="loading" ref="projectContainer">
    <div class="item" v-for="item in data" :key="item.id">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <!-- <img class="thumb" :src="item.thumb" alt="" /> -->

        <!-- 图片懒加载 -->
        <img class="thumb" v-lazy="item.thumb" alt="" />
      </a>
      <div class="info">
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
            >{{ item.name }}</a
          >
        </h2>
        <a
          class="github"
          v-if="item.github"
          :href="item.github"
          target="_blank"
        >
          github
        </a>
        <p v-for="(desc, index) in item.description" :key="index">
          {{ desc }}
        </p>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty/index.vue";

export default {
  components: {Empty},
  mixins: [mainScroll("projectContainer")],
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  computed: mapState("project", ["data", "loading"]),
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/var";

.project-container {
  // width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: auto;
  padding: 20px;

  // loading居中需要
  position: relative;

  .item {
    display: flex;
    // align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    transition: 0.5s;

    &:hover {
      // box-shadow: 0 0 5px #000;
      box-shadow: -1px 1px 5px #000;
      transform: scale(1.01) translate(3px, -3px);
    }

    h2 {
      margin-top: 0;
    }

    .github {
      font-size: 14px;
      color: @primary;
    }

    .thumb {
      width: 250px;
      min-height: 150px;
      // display: block;
      border-radius: 6px;
      margin-right: 15px;
      object-fit: cover;
      flex: 0 0 auto;
    }

    p {
      margin: 1em 0;
    }
  }
}
</style>
