import Mock from "mockjs";
import "./banner";
import "./blog";
import "./setting";
import "./about";
import "./project";
import "./message";

// 指定被拦截的 Ajax 请求的响应时间
Mock.setup({
  timeout: "1000-1500",
});
