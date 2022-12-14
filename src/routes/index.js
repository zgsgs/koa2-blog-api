/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-24 11:16:33
 * @LastEditTime : 2021-07-05 13:18:24
 * @LastEditors  : Jason
 * @Description  : koa-router路由中间件 封装路由 实现自动加载注册指定目录下的路由文件
 * @FilePath     : \koa2-blog-api\src\routes\index.js
 */
const Router = require('koa-router')
const fs = require('fs')
const path = require('path')
const router = new Router({ prefix: '/api' })

// 自动加载注册路由
const files = fs.readdirSync(path.join(__dirname, '../controllers'))
for (let file of files) {
  const fileExtension = file.substring(file.lastIndexOf('.') + 1)
  if (fileExtension !== 'js') {
    continue
  }
  const fileName = file.replace(/(.*\/)*([^.]+).*/ig,"$2");
  const url = fileName.replace('-', '/')
  router.use(`/${url}`, require(`@api/${fileName}`))
}

module.exports = router
