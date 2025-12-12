<template>
  <div id="app">
    <RecycleScroller
      class="scroller"
      :items="items"
      :item-size="54"
      v-slot="{ item }"
    >
      <list-item :item="item" />
    </RecycleScroller>
  </div>
</template>

<script>
import ListItem from "./components/ListItem.vue";

// 使用第三方插件的 RecycleScroller
import { RecycleScroller } from "vue-virtual-scroller";
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
// import RecycleScroller from "./components/RecycleScroller";
var items = [];
for (var i = 0; i < 10000; i++) {
  items.push({
    id: i + 1,
    name: i + 1,
    age: i + 1
  });
}
export default {
  components: { ListItem, RecycleScroller },
  data() {
    return {
      items
    };
  }
};
</script>

<style>
#app {
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
}
.scroller {
  width: 500px;
  margin: 0 auto;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
