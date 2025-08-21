<template>
  <div class="test-container">
    <Message  />
    
    <!-- <Message msg="abc" /> -->
    <!-- 传授的信息有限 -> 插槽 -->
     <slot></slot>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
    components: {
        Message
    }
}
</script>

<style>

</style>