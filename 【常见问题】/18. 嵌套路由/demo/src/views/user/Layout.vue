<template>
  <div class="layout-container">
    <div class="left">
      <router-link to="/user/profile" active-class="text-yellow-600" class="mx-5"
        >profile</router-link
      >
      <router-link to="/user/address" active-class="text-yellow-600" class="mx-5"
        >Address</router-link
      >
      <router-link to="/user/security" active-class="text-yellow-600" class="mx-5"
        >Security</router-link
      >
      <router-link to="/user/friends" active-class="text-yellow-600" class="mx-5"
        >Friends</router-link
      >
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style scoped>
.layout-container {
  display: flex;
}

.left {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
  height: 100%;
  line-height: 2.5em;
}
.right {
  flex: 1;
}
</style>
