import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
    code: 0,
    msg: "@description",
    data: [
        {
            id: "@guid",
            name: "@ctitle(1,10)",
            'url|1': ["@url", null],
            'github': ["@url", null],
            'description|1-5': [
                "@description"
            ],
            thumb: "@thumb",
            'order|+1': 1,
        },
    ],
});
