export default function(refStrValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refStrValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");

      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refStrValue].removeEventListener(
        "scroll",
        this.handleMainScroll
      );
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refStrValue].scrollTop = scrollTop;
      },
      // 用handleMainScroll，而不是 handleScroll，防止跟组件已有方法名重名
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refStrValue]);
      },
    },
  };
}
