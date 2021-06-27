/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-26 14:09:53
 * @LastEditTime: 2021-05-31 17:28:32
 * @LastEditors: jason
 * @Description: 导出配置
 * @FilePath: \koa-restful-api\config\index.js
 */
const keys = require('./keys')
const constants = require('./constants')
const ERROR_MSG = require('./error-msg')

module.exports = {
  keys,
  constants,
  ERROR_MSG,
}
