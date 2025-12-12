<template functional>
  <h1>Functional: {{ props.count }}</h1>
</template>

<script>
export default {
  name: 'Functional',
  functional: true,
  props: ["count"]
};
</script>

<style lang="scss" scoped></style>
