/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-23 21:37:25
 * @LastEditTime: 2021-05-28 21:26:07
 * @LastEditors: jason
 * @Description: 登录表单验证
 * @FilePath: \koa-restful-api\validation\login.js
 */
const Validator = require('validator')
const isEmpty = require('./is-empty')

/**
 * @desc: 登录表单验证
 * @access: public
 * @param {Object} validateLoginInput
 * @return {Object} isValid
 */
module.exports = validateLoginInput = data => {
  let errors = {}
  let { email, password } = data
  email = !isEmpty(email) ? email : ''
  password = !isEmpty(password) ? password : ''

  !Validator.isEmail(email) && (errors.email = '邮箱不合法')
  Validator.isEmpty(email) && (errors.email = '邮箱不能为空')
  !Validator.isLength(password, { min: 6, max: 30 }) && (errors.password = 'password的长度不能小于6位且不超过30位')
  Validator.isEmpty(password) && (errors.password = 'password不能为空')

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
