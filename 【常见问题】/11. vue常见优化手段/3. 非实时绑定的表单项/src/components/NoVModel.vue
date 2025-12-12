<template>
  <div class="container">
    <h1>使用 e.taget.value</h1>
    <input
      type="text"
      @keypress.enter="addTodo"
      class="todo-content"
      placeholder="input todo"
    />
    <button class="shuffle" @click="shuffle">随机排序</button>
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
        { id: randomId(), content: "完成「vue过渡和动画的」的学习" },
        { id: randomId(), content: "看一部电影" },
        { id: randomId(), content: "学一首新歌" }
      ],
      newTodoContent: ""
    };
  },
  methods: {
    addTodo(e) {
      const val = e.target.value;
      if (!val) {
        return;
      }
      this.todos.unshift({
        id: randomId(),
        content: val
      });
      e.target.value = "";
    },
    finishTodo(item) {
      this.todos = this.todos.filter(it => it !== item);
    },
    shuffle() {
      this.todos.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style scoped>
.container {
  width: 450px;

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
  transition: 5s;
}

.todo-enter {
  transform: translateX(-100%);
}

.todo-leave-to {
  transform: translateX(100%);
}

.todo-enter,
.todo-leave-to {
  opacity: 0;
}

.todo-leave-active {
  position: absolute;
}
</style>
