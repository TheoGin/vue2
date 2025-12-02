<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  created() {
    console.log('HelloWorld', this);
  }
};
</script>

<style scoped></style>
