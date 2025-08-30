import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-300": 0,
      "order|+1": 1,
    },
  ],
});

// 要拿到参数，要写成函数
// Mock.mock(/\/api\/blog(\??.)?/, "get", function(options) {
Mock.mock(/^\/api\/blog(\??.+)?$/, "get", function(options) {
  // console.log(options); // {url: '/api/blog?page=3&limit=20&categoryid=4', type: 'GET', body: null}
  // querystring 是一个第三方库，用于解析路径url成对象，vue-router 用的也是这个库
  const parsedUrlQuery = qs.parse(options.url);
  // console.log(parsedUrlQuery); // {/api/blog?page: '3', limit: '20', categoryid: '4'}
  //   return {
  // 需要再返回Mock.mock
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0,
      // "rows|50-500": [
      // 用limit来限制条数。整体当做属性表达式
      [`rows|${parsedUrlQuery.limit || 10}`]: [
        {
          id: '@guid',
          title: "@ctitle(10,50)",
          description: "@cparagraph(1,10)",
          category: {
            "id|1-10": 0,
            name: "分类@id",
          },
          "scanNumber|0-3000": 0,
          "commentNumber|0-300": 30,
          // 可能有，也可能没有。从属性值 array 中随机选取 1 个元素，作为最终值
          "thumb|1": [
            "@image('300x250', '#008c8c','#fff', 'random image')",
            null,
          ],
        //   createDate: "@date",
        // 变成时间戳
          createDate: "@date('T')",
        },
      ],
    },
  });
});
