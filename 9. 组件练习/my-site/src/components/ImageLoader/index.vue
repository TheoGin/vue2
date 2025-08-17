<template>
  <div class="image-loader-container">
    <img v-if="loadingFinish" :src="src" alt="" />
    <img v-else :src="placeholder" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      loadingFinish: false,
    };
  },
  onMounted(){
    console.log(111);
    
    setTimeout(() => {
        this.loadingFinish = true;
    }, this.duration);
  },
};
</script>

<style scoped lang="less">
.image-loader-container {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
