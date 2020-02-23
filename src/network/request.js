import axios from 'axios'

export function request(config){
      // 1.创建axios的实例
      const instance = axios.create({
          baseURL: 'http://123.207.32.32:8000/api/hy',
          timeout: 5000
      })
      // 2.axios的拦截器
      // 2.1请求拦截的作用
      instance.interceptors.request.use(config => {
          return config      
      }, err => {
          console.log(err);
      })
      // 2.2响应拦截的作用
      instance.interceptors.response.use(res => {
          return res.data
      }, err => {
          console.log(err);
      })
      //3.发送真正的网络请求
      return instance(config)
    }
  
    export  function ajax(url = '', params = {}, type = 'GET') {
        // 1. 变量
        let promise;
        // 2. 返回一个promise对象
        return new Promise((resolve, reject) => {
            // 2.1 判断请求的类型
            if (type.toUpperCase() === 'GET') { // get请求
                // 2.2 拼接字符串
                let paramsStr = '';
                // 2.3 遍历
                Object.keys(params).forEach(key => {
                    paramsStr += key + '=' + params[key] + '&';
                });
                // 2.4 过滤最后的&
                /*
                  注意：为了防止请求缓存，在尾部加了时间戳
                */
                if (paramsStr) {
                    paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
                    // 2.5 拼接完整路径
                    if (url.indexOf('127.0.0.1') === -1) {
                        url += '?' + paramsStr + '&Geek-James=' + randomCode(20);
                    } else {
                        url += '?' + paramsStr;
                    }
                } else {
                    if (url.indexOf('127.0.0.1') === -1) {
                        url += '?Geek-James=' + randomCode(20)
                    }
                }
                // 2.6 发起get请求
                promise = axios.get(url);
            } else if (type.toUpperCase() === 'POST') { // post请求
                // 2.7 发起post请求
                promise = axios.post(url, params);
            }
            // 2.8 处理结果并返回
            promise.then((response) => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            })
        });
    
    }