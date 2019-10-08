import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000
  })
  
  //2.axios的拦截器
  //请求的拦截.use(第一个为请求成功的函数,第二个为请求失败)
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  });
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  });

  return instance(config)
}