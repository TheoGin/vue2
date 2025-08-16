import MyButton from "./components/MyButton.js";

const template = `
    <div>
      <h1>App组件</h1>
      <MyButton />
    </div>
  `;

// vue的根组件
export default {
  components: {
    MyButton,
  },
  /* template: `
      <div>
        <h1>App组件</h1>
        <MyButton />
      </div>
    `, */
  template,
};
