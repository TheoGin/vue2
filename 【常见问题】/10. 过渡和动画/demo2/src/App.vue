<template>
  <div class="container">
    <input
      type="text"
      @keypress.enter="addTodo"
      v-model="newTodoContent"
      class="todo-content"
      placeholder="input todo"
    />
    <button class="shuffle" @click="shuffle">随机排序</button>
    <!-- apear 可以让元素第一次进入的时候，应用.todo-enter 这个类名的样式 -->
    <transition-group name="todo" tag="ul" class="todo-container" appear>
      <li v-for="item in todos" :key="item.id" class="todo">
        <span>{{ item.content }}</span>
        <button @click="finishTodo(item)">完成</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
function randomId() {
  return Math.random()
    .toString(16) // 转成 16 进制的字符串
    .substr(2, 5);
}

export default {
  data() {
    return {
      todos: [
        {id: randomId(), content: "完成「vue过渡和动画的」的学习"},
        {id: randomId(), content: "看一部电影"},
        {id: randomId(), content: "学一首新歌"},
      ],
      newTodoContent: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodoContent) {
        return;
      }
      this.todos.unshift({
        id: randomId(),
        content: this.newTodoContent,
      });
      this.newTodoContent = "";
    },
    finishTodo(item) {
      this.todos = this.todos.filter(it => it !== item);
    },
    shuffle() {
      this.todos.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 1em auto;

  padding: 1.5em;
  border-radius: 5px;
}

.shuffle {
  margin: 1em 0;
}

.todo-content {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  outline: none;
  font-size: 1.3em;
  padding: 0 1em;
  border: 1px solid #ccc;
}

.todo-container {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}

.todo {
  padding: 0.5em 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  transition: 0.5s;
}

/* 等价于给 li.todo 加 transition: 0.5s; */
/*.todo-enter-active,
.todo-leave-active,
.todo-move {
  transition: .5s;
}*/

.todo-enter {
  //transform: translateX(-100px);
  transform: translateX(-100%);

}

.todo-leave-to {
  transform: translateX(100%);
}

.todo-enter,
.todo-leave-to {
  opacity: 0;
}

/*.todo-leave-to {*/
.todo-leave-active {
  /*
    点击完成按钮，要等元素移出后，其他元素才会移动上来。因为移出的时候，元素还没有删除，要 transitionend / animationend 事件之后才移除，这个时候已经没有这个类名了 ——》在消失的时候加上绝对定位，这样可以让其他元素无视这个元素
  */
  position: absolute;
}
</style>
