import axios from "axios";
import showMessage from "@/utils/showMessage";

 // 创建一个axios的实例
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(function(response) {
  if (response.data.code !== 0) {
    showMessage({
      type: "error",
      content: response.data.msg,
      duration: 1500,
    });
    return null;
  }
  return response.data.data;
});

export default axiosInstance;
