<template>
  <ul class="menu-container">
    <li
      v-for="m in menus"
      :key="m.path"
      :class="{ active: curMenu === m.path }"
      @click.prevent="handleClick(m.path)"
    >
      <a :href="m.path">
        <div class="icon">
          <Icon :type="m.icon" />
        </div>
        <span>
          {{ m.name }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      curMenu: "/",
      menus: [
        {
          name: "首页",
          path: "/",
          icon: "home",
        },
        {
          name: "文章",
          path: "/blog",
          icon: "blog",
        },
        {
          name: "关于我",
          path: "/about",
          icon: "about",
        },
        {
          name: "项目&效果",
          path: "/project",
          icon: "code",
        },
        {
          name: "留言板",
          path: "/message",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    handleClick(path) {
      this.curMenu = path;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: @gray;

  li {
    height: 45px;
    line-height: 45px;
    &.active {
      background-color: #2f2f2f;
    }

    a {
      display: flex;
      padding: 0 50px;

      &:hover {
        color: #fff;
      }

      .icon {
        width: 24px;
      }
    }
  }
}
</style>
