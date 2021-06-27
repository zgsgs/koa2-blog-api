/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-01 11:21:32
 * @LastEditTime: 2021-06-08 18:58:39
 * @LastEditors: jason
 * @Description: 封装koa-body中间件
 * @FilePath: \koa-restful-api\src\middlewares\body.js
 */
const koaBody = require('koa-body')
const path = require('path')
const keys = require('@root/config/keys')

module.exports = () => {
  return koaBody({
    multipart: true, // 支持文件上传
    // encoding: 'gzip',
    formidable: {
      uploadDir: path.join(__dirname,'../../', keys.upload.dir), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: keys.upload.maxFieldsSize, // 文件上传大小
    },
  })
}
