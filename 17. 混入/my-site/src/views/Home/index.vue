<template>
  <div
      class="home-container"
      ref="container"
      v-loading="isLoading"
      @wheel="handleWheel"
  >
    <ul
        class="carousel-container"
        :style="{
        marginTop,
      }"
        @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <div
        v-show="index >= 1"
        class="arrow arrow-up"
        @click="switchTo(index - 1)"
    >
      <Icon type="arrowUp"/>
    </div>
    <div
        v-show="index < data.length - 1"
        class="arrow arrow-down"
        @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown"/>
    </div>
    <ul class="indicator">
      <li
          :class="{
          active: index === i,
        }"
          v-for="(item, i) in data"
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

  // 创建BFC处理 carousel-container 和 home-container 外边距合并问题
  overflow: hidden;

  // 测试
  // width: 400px;
  // height: 300px;
  /* width: 60%;
  height: 40%;
  border: 5px solid;
  margin: 100px auto;
  overflow: visible; */

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
  .self-center();
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
  .self-center();
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
import {getBanners} from "@/api/banner.js";
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import fetchData from '@/mixins/fetchData'

export default {
  mixins: [fetchData([])],
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      // data: [],
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在切换中
      // isLoading: true,
    };
  },
  /*async created() {
    this.data = await getBanners();
    this.isLoading = false;
  },*/
  // 真实 DOM 挂载完
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    // 像window这种事件，不要用window.onresize，而要用addEventListener，不然可能会把其他resize事件给覆盖掉
    window.addEventListener("resize", this.handleResize);
  },
  // destoryed() {
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async fetchData() {
      return await getBanners();
    },
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        // 正在滚轮中，防止一次滚动两张图片
        return;
      }
      // console.log(e.deltaY);
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index++;
      } else if (e.deltaY < -5 && this.index >= 1) {
        // 往下滚动
        this.switching = true;
        this.index--;
      }
    },
    handleTransitionend() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
};
</script>
