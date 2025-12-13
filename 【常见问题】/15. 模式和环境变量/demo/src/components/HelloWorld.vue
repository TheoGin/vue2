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
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped></style>
