<template>
  <div>
    <h1>Comp2</h1>
    <input />
  </div>
</template>

<script>
export default {
  name: "Comp2",
  beforeCreate() {
    console.log("Comp2 beforeCreate");
  },
  created() {
    console.log("Comp2 created");
  },
  beforeMount() {
    console.log("Comp2 beforeMount");
  },
  mounted() {
    console.log("Comp2 mounted");
  },
  beforeDestroy() {
    console.log("Comp2 beforeDestroy");
  },
  destroyed() {
    console.log("Comp2 destroyed");
  }
};
</script>
