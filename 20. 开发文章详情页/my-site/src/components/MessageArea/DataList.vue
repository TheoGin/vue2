<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="44" />
      <div class="content">
        <div class="name">
          {{ item.nickname }}
        </div>
        <div class="info">
          {{ item.content }}
        </div>
      </div>
      <div class="time">
        {{ dateFormat(item.createDate, true) }}
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar/index.vue";
import { dateFormat } from "@/utils";

export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    dateFormat,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.data-list-container {
  overflow: hidden;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 15px 0;
    display: flex;
    position: relative;
    border-bottom: 1px solid lighten(@gray, 20%);
  }
}

.content {
  flex: 1 1 auto;
}

.name {
  color: @success;
  margin-bottom: 10px;
}

.info {
  font-size: 14px;
}

.time {
  position: absolute;
  top: 18px;
  right: 5px;
  font-size: 12px;
  color: @gray;
}

.avatar-container {
  margin-right: 15px;
}
</style>
