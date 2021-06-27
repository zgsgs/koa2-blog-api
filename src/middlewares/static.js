/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-31 13:45:03
 * @LastEditTime: 2021-06-02 10:16:38
 * @LastEditors: jason
 * @Description: 封装koa-static静态资源中间件
 * @FilePath: \koa-restful-api\src\middlewares\static.js
 */
const path = require('path')
const serve = require('koa-static')

module.exports = () => {
  return serve(path.join(__dirname, '@/public'))
}
