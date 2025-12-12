<template>
  <div>
    <span v-if="reRender">reRender: {{reRender}}</span>
    {{comment.name}}: {{comment.content}}
  </div>
</template>

<script>
export default {
  props: ['comment'],
  data() {
    return {
      reRender: 0,
    };
  },
  beforeUpdate() {
    this.reRender++
  }
};
</script>

<style scoped>
span {
  color: red;
}
</style>