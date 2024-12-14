import axios from "axios"

//创建一个axios请求对象
const request = axios.create({
    //baseurldizhi 
    baseURL: "http://localhost:8080",
    //超时时间
    timeout: 10000,
    //全局请求头
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    },
        //设置请求成功的状态码范围
    validateStatus: function (status) {
        // 对于 2xx 范围的状态码都返回响应数据
        return true
    },
    // 运行发送跨域请求
    crossDomain: true,
    // 允许携带cookie
    withCredentials: false,


})

//封装请求方法
export const get = (url, params) =>
    request({
        url,
        method: "get",
        params
    })

export const post = (url, data) =>
    request({
        url,
        method: "post",
    })
    
// 设置请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config
}, error => {
    // 请求错误时做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response
}, error => {
    // 响应错误时做点什么
    return Promise.reject(error)
})

//设置响应拦截图


// 导出请求对象
export default request