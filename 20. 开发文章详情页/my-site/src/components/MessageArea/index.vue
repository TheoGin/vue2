<template>
  <div class="message-area-container" id="data-form-container">
    <!-- 会写重复的 emit -->
    <!-- <DataForm @submit="handleSubmit" /> -->

    <!-- <DataForm v-on:submit="handleSubmit" /> -->
    <!-- 等价于 -->
    <!-- <DataForm v-on="{submit: handleSubmit}" /> -->

    <!-- 而子组件 this.$listeners // { event1: handleEvent1, event2: handleEvent2 } -->
    <DataForm v-on="$listeners"/>
    <DataList :title="title" :data="data" />
    <div class="loading" v-loading="isLoading"></div>
  </div>
</template>

<script>
import DataForm from "@/components/MessageArea/DataForm.vue";
import DataList from "@/components/MessageArea/DataList.vue";
import Icon from "@/components/Icon/index.vue";

export default {
  props:{
    isLoading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
  },
  components: {
    DataForm,
    DataList,
    Icon,
  },
  methods: {
    /* handleSubmit(formData, callback) {
      this.$emit("submit", formData, callback);
    }, */
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  margin-top: 50px;
}
</style>
