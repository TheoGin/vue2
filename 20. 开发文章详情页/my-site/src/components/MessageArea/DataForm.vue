<template>
  <form ref="form" @submit.prevent="handleSubmit" class="data-form-container">
    <div class="form-item">
      <div class="input-area">
        <input
          type="text"
          placeholder="用户昵称"
          maxlength="10"
          v-model="formData.nickname"
        />
        <div class="tip">{{ formData.nickname.length }}/10</div>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="input-area">
        <textarea
          placeholder="输入内容"
          maxlength="300"
          v-model="formData.content"
        ></textarea>
        <div class="tip">{{ formData.content.length }}/300</div>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <button :disabled="isSubmiting">
        {{ isSubmiting ? "提交中..." : "提交" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false,
    };
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";
      if (this.error.nickname || this.error.content) {
        // 有错误
        return;
      }
      this.isSubmiting = true; // 正在提交，防止重复点击
      this.$emit("submit", this.formData, (successMsg) => {
        this.$showMessage({
          type: "success",
          duration: 1000,
          content: successMsg,
          container: this.$refs.form,
          callback: () => {
            this.formData.nickname = "";
            this.formData.content = "";
            this.isSubmiting = false;
          },
        });
      }); // 让父组件来处理事件
    },
  },
};
</script>

<style lang="less" scoped>
// @import "~@/styles/global.less";
@import "~@/styles/var.less";

.data-form-container {
  margin-bottom: 20px;
}

.form-item {
  margin-bottom: 8px;

  .error {
    height: 20px;
    line-height: 20px;
    margin-top: 6px;
    color: @danger;
    font-size: 14px;
  }

  &:first-child .input-area {
    width: 50%;
  }
}

.input-area {
  position: relative;
  width: 100%;

  input,
  textarea {
    border: 1px dashed @gray;
    box-sizing: border-box;
    border-radius: 5px;
    color: @words;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: @primary;
  }

  .tip {
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 12px;
    color: @gray;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
  }

  textarea {
    width: 100%;
    height: 120px;
    padding: 8px 15px;
    resize: none;
  }
}

button {
  border: none;
  background: @primary;
  color: #fff;
  border-radius: 5px;
  width: 100px;
  height: 34px;
  cursor: pointer;

  &:hover {
    background: darken(@primary, 10%);
  }

  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>
