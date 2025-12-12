<template>
  <div>
    <h1>Comp3</h1>
    <input />
  </div>
</template>

<script>
export default {
  name: "Comp3",
  beforeCreate() {
    console.log("Comp3 beforeCreate");
  },
  created() {
    console.log("Comp3 created");
  },
  beforeMount() {
    console.log("Comp3 beforeMount");
  },
  mounted() {
    console.log("Comp3 mounted");
  },
  beforeDestroy() {
    console.log("Comp3 beforeDestroy");
  },
  destroyed() {
    console.log("Comp3 destroyed");
  }
};
</script>