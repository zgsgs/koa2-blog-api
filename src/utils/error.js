/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-31 17:17:39
 * @LastEditTime: 2021-06-01 10:59:42
 * @LastEditors: jason
 * @Description: 定义错误对象
 * @FilePath: \koa-restful-api\src\utils\error-handle.js
 */
const util = require('util')
const { ERROR_MSG, constants } = require('@root/config')

/**
 * @desc: 自定义错误处理
 * @access: public
 * @param {*} code 错误状态码
 * @param {*} msg 错误消息
 * @return {*}
 */
function CustomError(code, msg) {
  Error.call(this, '')

  this.code = code
  this.msg = msg || ERROR_MSG[code] || 'Unknown error'

  this.getCodeMsg = function () {
    return {
      code: this.code,
      msg: this.msg,
    }
  }
}
/**
 * @desc: http协议请求错误处理
 * @access: public
 * @param {*} code 错误状态码
 * @param {*} msg 错误消息
 * @return {*}
 */
function HttpError(code, msg) {
  if (Object.values(constants.HTTP_CODE).indexOf(code) < 0) {
    throw Error('Not an invalid http code')
  }

  CustomError.call(this, code, msg)
}

util.inherits(CustomError, Error)
util.inherits(HttpError, CustomError)

module.exports = { HttpError, CustomError }
