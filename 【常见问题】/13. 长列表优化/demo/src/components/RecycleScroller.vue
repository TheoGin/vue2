<template>
  <div class="recycle-scroller-container" ref="divContainer" @scroll="setPool">
    <div
      class="recycle-scroller-wrapper"
      :style="{ height: totalHeight + 'px' }"
    >
      <div
        class="recycle-scroller-item"
        :style="{ transform: `translateY(${poolItem.position}px)` }"
        v-for="poolItem in poolItems"
        :key="poolItem.item[keyField]"
      >
        <slot :item="poolItem.item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

// 前后多渲染10条，防止滚动条滚动过快出现白屏
const prev = 10, next = 10;

export default {
  components: { ListItem },
  props: {
    items: {
      type: Array,
      default: []
    },
    itemSize: {
      type: Number,
      default: 0
    },
    keyField: {
      type: String,
      default: "id"
    }
  },
  computed: {
    totalHeight() {
      return this.itemSize * this.items.length;
    }
  },
  data() {
    return {
      classPrefix: "recycle-scroller",
      poolItems: []
    };
  },
  mounted() {
    this.setPool();
    // window.setPool = this.setPool;
    // window.dc = this.$refs.divContainer
  },
  methods: {
    setPool() {
      const scrollTop = this.$refs.divContainer.scrollTop;
      const height = this.$refs.divContainer.clientHeight;
      let startIndex = Math.floor(scrollTop / this.itemSize);
      let endIndex = Math.ceil((scrollTop + height) / this.itemSize); // slice 左闭右开，所以不需要减 1

      // 前后多渲染10条，防止滚动条滚动过快出现白屏
      startIndex -= prev;
      if (startIndex < 0) {
        startIndex = 0;
      }
      endIndex += next;
      // 超出数组长度截取 slice 会进行处理
      const startPos = startIndex * this.itemSize;
      this.poolItems = this.items.slice(startIndex, endIndex).map((item, index) => ({
        item,
        position: startPos + index * this.itemSize
      }));
    }
  }
};
</script>

<style scoped>
.recycle-scroller-container {
  overflow: auto;

  .recycle-scroller-wrapper {
    position: relative;

    .recycle-scroller-item {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
