<template>
  <div>
    <h1>Hello Vue</h1>
    <h2 v-pre>{{ title }}</h2>
  </div>
</template>

<script>
const config = {
  created() {
    console.log("mixins config created");
  },
};

export default {
  mixins: [config],
  created() {
    console.log("App created");
  },
  data() {
    return {
      title: "asdfasfd",
    };
  },
};
</script>
