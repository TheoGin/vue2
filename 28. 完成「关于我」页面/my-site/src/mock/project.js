import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "@description",
  "data|5-10": [
    {
      id: "@guid",
      name: "@ctitle(1,10)",
      "url|1": ["@url", null],
      "github|1": ["@url", null],
      "description|1-2": ["@cparagraph(5, 10)"],
      thumb: `@image(300x250, @color, #fff, @natural)`,
      "order|+1": 1,
    },
  ],
});
