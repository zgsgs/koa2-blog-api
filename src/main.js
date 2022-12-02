/*
 * @Author       : jason <2087108700@qq.com>
 * @Date         : 2021-06-26 23:00:16
 * @LastEditTime : 2021-07-05 13:31:50
 * @LastEditors  : Jason
 * @Description  : 主入口文件
 * @FilePath     : \koa2-blog-api\src\main.js
 */
require('module-alias/register')
const koa = require('koa')
// Instantiate koa
const app = new koa()
// Initialize Models before import passport
const middlewares = require('@/middlewares')
middlewares(app)
// Initialize DataBase
require('@models/mysql')
// Clear
const clear = require('clear')
clear()

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on http://127.0.0.1:${port}`)
})
