<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <SiteAside />
      </template>
      <template #main>
        主区域
      </template>
      <template #right>
        right
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
import SiteAside from '@/components/SiteAside';

export default {
  components: {
    Layout,
    SiteAside
  },
};
</script>

<style></style>
