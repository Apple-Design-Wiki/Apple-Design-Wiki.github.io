// api.js
import axios from 'axios';

const apiClient = axios.create({
 // baseURL: 'http://127.0.0.1:4523/m1/3895832-0-default',
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
  // 添加请求拦截器
  apiClient.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config——配置对象，通过对config的处理进行请求时增强操作
    //console.log('请求拦截器成功',config);
    // 如果请求中没有"?"，添加"?"，否则添加"&"
  //   if (config.url.indexOf("?") == -1) {
  //       config.url += "?token=1234";
  //   } else {
  //       config.url += "&token=1234";
  //   }
    return config;
}, function (error) {
  //console.log('请求拦截器失败',error);
  return Promise.reject(error);
});

// 添加响应拦截器
apiClient.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  //console.log('响应拦截器成功',response);
  // 可以代替catch
  // if (response.status != 200) {
  //     alert("服务器错误");
  // }
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  //console.log('响应拦截器失败',error);
  return Promise.reject(error);
});

export default apiClient;