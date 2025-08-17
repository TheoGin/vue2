<template>
  <div>
    <h1>App组件</h1>
    <p>性：{{ lastname }}</p>
    <p>名：{{ firstname }}</p>

    <!-- 如果计算复杂写着不推荐 -->
    <!-- <p>全名：{{ lastname + " " + firstname }}</p> -->

    <!-- 1、用方法，但没有缓存，会导致依赖的数据没变也运行多次 -->
    <!-- <p>全名：{{ getFullName() }}</p>
    <p>全名：{{ getFullName() }}</p>
    <p>全名：{{ getFullName() }}</p>
    <p>全名：{{ getFullName() }}</p> -->

    <!-- 2、用计算属性，当做属性用 -->
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p>
    <!-- <button @click="changeFullName('Sopho Theo')">改变姓名</button> -->

    <!-- 2.1 通过 computed 的set来改变 -->
    <button @click="fullName = 'Sopho Theo'">改变姓名</button>
    <p>count: {{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      firstname: "Gin",
      lastname: "Theo",
      count: 0,
    };
  },
  methods: {
    getFullName() {
      console.log("method called");

      return this.lastname + " " + this.firstname;
    },
    changeFullName(name) {
      const arr = name.split(" ");
      this.lastname = arr[0];
      this.firstname = arr[1];
    },
  },
  computed: {
    /* fullName() {
        console.log("fullname called");
      return this.lastname + " " + this.firstname;
    }, */
    fullName: {
      get() {
        console.log("fullname called");
        return this.lastname + " " + this.firstname + Date.now();
      },
      set(val) {
        console.log(val);
        console.log("fullName set");

        // 没有改动 get 依赖的数据并不会重新调用 get
        this.count++;

        // 改动 get 依赖的数据，才会重新调用 get
        const arr = val.split(" ");
        this.lastname = arr[0];
        this.firstname = arr[1];
      },
    },
  },
};
</script>
