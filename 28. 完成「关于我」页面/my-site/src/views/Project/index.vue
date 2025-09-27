<template>
  <div class="project-container" v-loading="loading" ref="mainContainer">
    <div class="item" v-for="item in data" :key="item.id">
      <a
        :href="item.url ? item.url : `javascript:alert('该网只能通过内网访问')`"
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" :src="item.thumb" alt="" />
      </a>
      <div class="right">
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该网只能通过内网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
            >{{ item.name }}</a
          >
        </h2>
        <a class="github" v-if="item.github" :href="item.github">github</a>
        <p v-for="(desc, index) in item.description" :key="index">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";

export default {
  mixins: [mainScroll("mainContainer")],
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

  .item {
    display: flex;
    // align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    transition: 0.5s;

    &:hover {
      box-shadow: 0 0 5px #000;
      transform: scale(1.01);
    }

    h2 {
      margin-top: 0;
    }

    .github {
      color: @primary;
    }

    .thumb {
      width: 250px;
      // display: block;
      border-radius: 6px;
      margin-right: 20px;
    }

    p {
      margin: 1em 0;
    }
  }
}
</style>
