<template>
  <div>
    <div
      class="fixed bg-gray-900 text-white w-full leading-10 flex justify-center h-10"
    >
      <router-link active-class="text-yellow-600" exact class="mx-5" to="/">
        Home
      </router-link>
      <router-link active-class="text-yellow-600" class="mx-5" to="/about">
        About
      </router-link>
      <router-link active-class="text-yellow-600" class="mx-5" to="/user">
        User
      </router-link>
    </div>
    <div class="h-10"></div>
    <div class="min-h-screen py-10 lg:w-1/2 h-10 mx-auto">
      <transition :name="direction">
        <router-view />
      </transition>
    </div>
    <div class="border-solid border-t mt-10 text-center py-10 bg-gray-100">
      Footer
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    direction() {
      return this.$store.state.switchTransition.direction;
    },
  },
};
</script>

<style scoped>
.left-enter {
  opacity: 0;
  transform: translateX(-50%);
}
.left-leave-to {
  opacity: 0;
  transform: translateX(50%);
  position: absolute;
  left: 0;
  /* 要设置宽度 */
  width: 100%;
}

.left-enter-active,
.left-leave-active {
  transition: .5s;
}

.right-enter {
  opacity: 0;
  transform: translateX(50%);
}
.right-leave-to {
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 0;
  width: 100%;
}

.right-enter-active,
.right-leave-active {
  transition: .5s;
}
</style>
