function Vue(options) {
  var data = options.data(); // 组件是一个data函数，返回一个数据对象
  observe(data); // 变成响应式数据
  var methods = options.methods;
  Object.defineProperty(this, "a", {
    get() {
      return data.a; // 代理模式，可以通过 this.a 获取数据
    },
    set(val) {
      data.a = val;
    },
  });

  Object.entries(methods).forEach(([methodName, fn]) => {
    this[methodName] = fn.bind(this); // 绑定this，可以通过 this.方法名 调用方法
  });

  var updateComponent = () => {
    this._update(this._render()); // this._render() 获取虚拟dom，传给 this._update() 更新
  };

  new Watcher(updateComponent); // 创建一个 watcher，监听数据变化，并调用 updateComponent
}

new Vue(vnode.componentOptions); // 创建一个 vue 实例，用 vnode.componentOptions.propsData 初始化数据

