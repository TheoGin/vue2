import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  "data|5-10": [
    {
    //   id: "@guid",
      id: "@uuid", // 或
      name: "@ctitle(1,10)",
      "url|1": ["@url", null],
      "github|1": ["@url", null],
      "description|1-2": ["@cparagraph(1, 5)"],
      thumb: `@image(300x250, @color, #fff, @natural)`,
      "order|+1": 1,
    },
  ],
});
