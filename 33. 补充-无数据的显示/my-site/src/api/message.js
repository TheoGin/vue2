import request from "@/api/request";

/**
 * 分页获取留言
 * @param page
 * @param limit
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function getMessages(page = 1, limit = 10) {
  return await request.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}

/* getMessages().then((r) => {
  console.log(r);
}); */

/**
 * 提交留言
 * @param messageInfo 留言信息对象 { nickname: "昵称", content: "留言内容，纯文本" }
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function postMessage(messageInfo) {
  return await request.post("/api/message", messageInfo);
}

/*
postMessage({
    nickname: "昵称",
    content: "留言内容，纯文本",
})*/
