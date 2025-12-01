<template>
  <div id="app">
    <A />
  </div>
</template>

<script>
import A from "@/components/A.vue";

export default {
  components: {
    A
  },
  provide: {
    a: 1,
    b: 2
  },
  data() {
    return {};
  }
};
</script>
