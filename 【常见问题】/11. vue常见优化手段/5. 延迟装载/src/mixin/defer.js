/**
 * maxFrameCount表示最大渲染帧：多少帧内把页面渲染出来
 */
export default function (maxFrameCount) {
  return {
    data() {
      return {
        frameCount: 0,
      };
    },
    mounted() {
      const requestFrameCount = () => {
        this.frameCount++;
        requestAnimationFrame(() => {
          // if (this.frameCount <= maxFrameCount) {
          if (this.frameCount < maxFrameCount) {
            requestFrameCount()
          }
        })
      }
      requestFrameCount()
    },
    methods: {
      /**
       * 在第几帧内渲染出来，返回false不渲染，true才渲染
       * @param showInFrameCount
       * @returns {boolean}
       */
      defer(showInFrameCount) {
        return this.frameCount >= showInFrameCount;
      },
    },
  };
};
