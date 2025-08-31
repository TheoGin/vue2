import request from "@/api/request";

/**
 * 获取所有博客分类
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}

/* getBlogCategories().then((r) => {
  console.log(r);
}); */

/**
 * 分页获取博客
 * @param page 第几页
 * @param limit 每页几条
 * @param categoryid 分类id
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get("/api/blog", {
    // 这里的 params 和 路由的params 含义不一样！！！ 会拼接成 /api/blog?page=1&limit=10&categoryid=-1
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/* getBlogs().then((r) => {
  console.log(r);
}); */

/**
 * 获取博客详情
 * @param id 博客id
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/* getBlog('fdsaewaId').then((r) => {
  console.log(r);
}); */

/**
 * 提交评论
 * @param commentInfo 评论信息对象
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function postComment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
}

/* postComment({
  nickname: "昵称",
  content: "评论内容，纯文本",
  blogId: "sdaf",
}).then((r) => {
  console.log(r);
});
 */

/**
 * 获取博客评论
 * @param blogid 博客id
 * @param page 第几页
 * @param limit 每页几条
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}

/* getComments(2, 20, "abc").then((r) => {
  console.log(r);
}); */
