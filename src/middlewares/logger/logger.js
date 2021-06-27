/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-27 10:34:15
 * @LastEditTime: 2021-06-02 10:18:30
 * @LastEditors: jason
 * @Description: 封装koa-logger日志中间件
 * @FilePath: \koa-restful-api\src\middlewares\logger.js
 */
const Logger = require('koa-logger')
const Moment = require('moment')

// 使用日志中间件
module.exports = () => {
  return Logger(str => {
    console.log(`${Moment().format('YYYY-MM-DD HH:mm:ss')}${str}`)
  })
}
