<template>
  <div>
    <h1>Comp1</h1>
    <input />
  </div>
</template>

<script>
export default {
  name: 'Comp1',
  beforeCreate() {
    console.log('Comp1 beforeCreate');
  },
  created() {
    console.log('Comp1 created');
  },
  beforeMount() {
    console.log('Comp1 beforeMount');
  },
  mounted() {
    console.log('Comp1 mounted');
  },
  beforeDestroy() {
    console.log('Comp1 beforeDestroy');
  },
  destroyed() {
    console.log('Comp1 destroyed');
  }
}
</script>
