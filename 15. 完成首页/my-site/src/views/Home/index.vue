<template>
  <div class="home-container" ref="container">
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem />
      </li>
    </ul>
    <div
      v-show="index >= 1"
      class="arrow arrow-up"
      @click="switchTo(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      class="arrow arrow-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{
          active: index === i,
        }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}

.arrow {
  .self-center(fixed);
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  @gap: 25px;
  transform: translateX(-50%);

  &.arrow-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }

  &.arrow-down {
    // 重置 top: 50%;
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  .self-center(fixed);
  left: auto;
  right: 15px;
  transform: translateY(-50%);

  li {
    width: 7px;
    height: 7px;
    background-color: @words;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 1px solid #fff;
    box-sizing: border-box;
    cursor: pointer;

    &.active {
      background-color: #fff;
    }
  }
}
</style>

<script>
import { getBanners } from "@/api/banner.js";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";

export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  // 真实 DOM 挂载完
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
};
</script>
