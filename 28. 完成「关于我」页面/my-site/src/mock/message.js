import Mock from 'mockjs';
import qs from 'querystring';

Mock.mock(/\/api\/message(\?.+)?/, "get", function (options) {
    const parsedUrlQuery = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|50-200": 0,
            [`rows|${parsedUrlQuery.limit || 10}`]: [
                {
                    id: "@guid",
                    nickname: "@cname",
                    content: "@cparagraph(1,10)",
                    createDate: "@date('T')",
                    "avatar|1": [
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                        "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                    ]
                }
            ]
        }
    })
})

Mock.mock(/\/api\/message/, "post", function (options) {
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            id: '@uuid',
            nickname: "@cname",
            content: "@cparagraph(1,10)",
            createDate: '@date(T)',
            "avatar|1": [
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
            ],
        }
    })
})