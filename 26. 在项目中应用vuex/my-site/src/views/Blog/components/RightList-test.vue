<script>

import RightList from "@/views/Blog/components/RightList.vue";

export default {
  components: {
    RightList
  },
  data() {
    return {
      list: [
        {
          name: 'a',
          isSelect: false,
        },
        {
          name: 'b',
          isSelect: false,
        },
        {
          name: 'c',
          isSelect: true,
          children: [
            {
              name: 'c-1',
              isSelect: false,
            },
            {
              name: 'c-2',
              children: [
                {
                  name: 'c-2-1',
                  isSelect: false,
                },
                {
                  name: 'c-2-2',
                  isSelect: false,
                },
                {
                  name: 'c-2-3',
                  isSelect: false,
                },
                {
                  name: 'c-2-4',
                  isSelect: false,
                },
              ],
            },
            {
              name: 'c-3',
              isSelect: false,
            },
            {
              name: 'c-4',
              isSelect: false,
            },
          ],
        },
        {
          name: 'd',
        },
      ]
    }
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>

<template>
  <div class="right-list container">
    <RightList :list="list" @select="handleSelect"></RightList>
  </div>
</template>

<style scoped lang="less">

</style>