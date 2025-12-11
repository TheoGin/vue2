<template>
  <div id="app">
    <div class="scroller">
      <ListItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import ListItem from "./components/ListItem.vue";
// import RecycleScroller from './components/RecycleScroller';
var items = [];
for (var i = 0; i < 10000; i++) {
  items.push({
    id: i + 1,
    name: i + 1,
    age: i + 1
  });
}
export default {
  components: { ListItem },
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
}
.scroller {
  width: 500px;
  margin: 0 auto;
  height: 500px;
  overflow: auto;
}
</style>
