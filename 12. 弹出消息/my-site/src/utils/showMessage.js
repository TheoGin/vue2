import Icon from "@/components/Icon";
import styles from "./message.module.less";
import { getComponentRootDom } from "./index.js";

/**
 * 消息提示框
 * @param {String} content 消息内容
 * @param {String} type 消息类型，'info' | 'success' | 'warn' | 'error'
 * @param {Number} duration 消息持续时间
 * @param {HTMLElement} container 在html元素中居中
 * @param {Function} callback 在html元素中居中
 */
/* export default function showMessage(
  content,
  type = "info",
  duration = 2000,
  container,
  callback
) { */
export default function showMessage(options) {
  console.log(options.type);
  // 参数太多 -》换成配置对象
  const content = options.content || "info";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  /* if (!container) {
    container = document.body;
  } */

  if (getComputedStyle(container).position === "static") {
    // container.style.position = "relative";
  }

  const iconDom = getComponentRootDom(Icon, { type: "success" });
  // console.log(iconDom.outerHTML); // iconDom.outerHTML获取到字符串格式：<i data-v-e117f028="" class="iconfont icon-container iconzhengque"></i>

  const div = document.createElement("div");
  div.innerHTML = `
    <span class="${styles.icon}">
      ${iconDom.outerHTML}
    </span>
    <div>${content}</div>
  `;

  // console.log(styles.message); // {message: 'message-module_message_1ZcIf'}

  // const divClassName = styles['message-' + type];
  const divClassName = styles[`message-${type}`];
  div.className = `${styles.message} ${divClassName}`;
  // div.style.background = 'red';
  container.appendChild(div);

  // 没有重新渲染，不会导致 reflow，所有需要触发reflow
  div.clientHeight;

  div.style.transform = "translate(-50%, -50%) translateY(0)";
  div.style.opacity = 1;
  setTimeout(() => {
    div.style.transform = "translate(-50%, -50%) translateY(-25px)";
    div.addEventListener("transitionend", () => {
      div.remove();
      // 动画之后做一些事情，比如跳转页面之类，所以需要回调
      if (options.callback) {
        options.callback();
      }
    });
  }, duration);
}
