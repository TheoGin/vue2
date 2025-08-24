import Icon from "@/components/Icon";
import styles from "./message.module.less";
import { getComponentRootDom } from "./index.js";

/**
 * 弹出消息，传入配置对象，属性：
 * @param {String} content 消息内容
 * @param {String} type 消息类型，'info' | 'success' | 'warn' | 'error'
 * @param {Number} duration 消息多久后消失
 * @param {HTMLElement} container 在html元素中居中
 * @param {Function} callback 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
/* export default function showMessage(
  content,
  type = "info",
  duration = 2000,
  container,
  callback
) { */
export default function showMessage(options = {}) {
  // 参数太多 -》换成配置对象
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  /* if (!container) {
    container = document.body;
  } */
  const iconDom = getComponentRootDom(Icon, { type: "success" });
  // console.log(iconDom.outerHTML); // iconDom.outerHTML获取到字符串格式：<i data-v-e117f028="" class="iconfont icon-container iconzhengque"></i>

  // 创建消息元素
  const div = document.createElement("div");
  div.innerHTML = `
    <span class="${styles.icon}">
      ${iconDom.outerHTML}
    </span>
    <div>${content}</div>
  `;

  // console.log(styles.message); // {message: 'message-module_message_1ZcIf'}

  // const typeClassName = styles['message-' + type];
  // 设置样式
  const typeClassName = styles[`message-${type}`]; //类型样式名
  div.className = `${styles.message} ${typeClassName}`;
  // div.style.background = 'red';

  // 容器的position是否改动过
  if (container !== document.body && getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }
  container.appendChild(div);

  // 浏览器强行渲染。没有重新渲染，不会导致 reflow，所有需要触发reflow
  div.clientHeight; // 导致reflow

  // 回归到正常位置
  // div.style.transform = "translate(-50%, -50%) translateY(0)";
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  // 等一段时间，消失
  setTimeout(() => {
    div.style.transform = "translate(-50%, -50%) translateY(-25px)";
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();

        // 动画之后做一些事情，比如跳转页面之类，所以需要回调
        /* if (options.callback) {
          options.callback();
        } */
       options.callback && options.callback();
      },
      {
        once: true, // 只运行一次
      }
    );
  }, duration);
}
