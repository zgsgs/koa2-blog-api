/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-26 23:28:21
 * @LastEditTime: 2021-06-27 01:02:02
 * @LastEditors: jason
 * @Description: 中间件统一入口 导出所有中间件
 * @FilePath: \koa2-blog-api\src\middlewares\index.js
 */
const koaPassport = require('koa-passport')
const router = require('@/routes')
const error = require('./error')
const logger = require('./logger/logger')
// const passport = require('./passport')
const static = require('./static')
const body = require('./body')

module.exports = async app => {
  app.use(logger())
  app.use(error())
  app.use(static())
  app.use(body())
  app.use(koaPassport.initialize())
  app.use(koaPassport.session())
  app.use(router.routes()).use(router.allowedMethods())

  // passport(koaPassport)

  // 全局监听error并生成logger
  app.on('error', async (err, ctx) => {
    console.error('Error occurred:', err)
  })
}
