<template>
  <ul class="menu-container">
    <!-- 
      @click.prevent="handleClick(m.link)" prevent写法会丢失路径，点那个都是http://localhost:8080
    -->
    <li v-for="m in menus" :key="m.link" :class="{ active: isActive(m) }">
      <a :href="m.link">
        <div class="icon">
          <Icon :type="m.icon" />
        </div>
        <span>
          {{ m.title }}
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
      menus: [
        {
          title: "首页",
          link: "/",
          icon: "home",
        },
        {
          title: "文章",
          link: "/blog",
          icon: "blog",
          startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          title: "关于我",
          link: "/about",
          icon: "about",
        },
        {
          title: "项目&效果",
          link: "/project",
          icon: "code",
        },
        {
          title: "留言板",
          link: "/message",
          icon: "chat",
        },
      ],
    };
  },
  methods: {
    isActive(menu) {
      // return location.pathname === menu.link; // http://localhost:8080/blog/daer/dsaffd 没有办法选中 “文章”

      // const path = location.pathname;
      const link = menu.link.toLocaleLowerCase(); // 兼容大写
      const curPathname = location.pathname.toLocaleLowerCase(); // 当前浏览器的访问路径
      if (menu.startWith) {
        // location.pathname.startsWith('/about') // true
        return curPathname.startsWith(link);
      } else {
        return curPathname === link;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  margin: 24px 0;
  padding: 0;
  list-style-type: none;
  color: @gray;
  

  li {
    height: 45px;
    line-height: 45px;
    padding: 0 50px;
    &.active {
      // background-color: #2f2f2f;

      // 颜色比变量减淡 3%
      background-color: darken(@words, 3%);
    }

    a {
      display: flex;

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
