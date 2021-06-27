/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-26 23:00:16
 * @LastEditTime: 2021-06-27 13:20:56
 * @LastEditors: jason
 * @Description: 主入口文件
 * @FilePath: \koa2-blog-api\src\main.js
 */
require('module-alias/register')
const koa = require('koa')
const clear = require('clear')
// Initialize Models before import passport
const middlewares = require('@/middlewares')
// Initialize DataBase
require('@models/mysql')

// Instantiate koa
const app = new koa()
middlewares(app)
clear()

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on http://127.0.0.1:${port}`)
})
