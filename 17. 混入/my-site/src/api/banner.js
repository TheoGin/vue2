import request from './request';

export async function getBanners() {
    // return await request.get('http://localhost:8080/api/banner')
    // 不加协议、主机、域名，默认会加上当前网站的
    return await request.get('/api/banner')
}