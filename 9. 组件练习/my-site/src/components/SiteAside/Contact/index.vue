<template>
  <div class="contact-container">
    <a href="https://github.com/TheoGin" class="item">
      <div class="icon">
        <!-- 给图标套一个元素，方便控制样式 -->
        <Icon type="github" />
      </div>
      <span>TheoGin</span>
    </a>
    <a href="mailto:fuchaojun448@qq.com" class="item">
      <div class="icon">
        <Icon type="mail" />
      </div>
      <span>fuchaojun448@qq.com</span>
    </a>
    <a
      href="tencent://message/?Menu=yes&uin=2559629448&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      class="item"
    >
      <div class="icon">
        <Icon type="qq" />
      </div>
      <span>2559629448</span>
      <div class="qrcode">
        <img src="./image.png" alt="" />
      </div>
    </a>
    <a class="item">
      <div class="icon weixin">
        <Icon type="weixin" />
      </div>
      <span>17818582572</span>
      <div class="qrcode">
        <img src="./image.png" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
// 全局样式已在 main.js引入
// @import "~@/styles/global.less";
@import "~@/styles/var.less";

.contact-container {
  // width: 100%;
  // height: 100%;
  // 颜色不要写死
  color: @gray;
  font-size: 20px;
  padding: 20px;
  // overflow: hidden;
  @itemHeight: 30px;

  .item {
    display: flex;
    // align-items: center;
    margin: 14px 0;
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;

    // a 元素可能没有 href
    cursor: pointer;

    .icon {
      // margin-right: 10px;
      width: 36px;
      font-size: 26px;
    }

    .icon.weixin {
      font-size: 32px;
      text-indent: -2px;
    }

    span {
      font-size: 14px;
    }

    &:hover .qrcode {
      // display: block;
      transform: scaleY(1);
    }

    .qrcode {
      background-color: #fff;
      padding: 10px 15px;
      position: absolute;
      left: 0;
      
      // 底部高度跟随 item 的高度
      bottom: @itemHeight + 5px;
      border-radius: 5px;
      // display: none;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;

      /* &::before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -19px;
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: #fff transparent transparent transparent;
      } */
      //  另一种方式实现三角
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
        width: 8px;
        height: 8px;
        background-color: #fff;
      }

      img {
        // width: 100%;
        // 定宽高，放在图片有大有小
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
