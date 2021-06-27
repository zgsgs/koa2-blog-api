/*
 * @Author: your name
 * @Date: 2021-05-23 21:37:36
 * @LastEditTime: 2021-05-29 23:52:10
 * @LastEditors: jason
 * @Description: In User Settings Edit
 * @FilePath: \koa-restful-api\validation\register.js
 */
const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = validateRegisterInput = data => {
  let errors = {}
  let { name, email, password, password2 } = data
  name = !isEmpty(name) ? name : ''
  email = !isEmpty(email) ? email : ''
  password = !isEmpty(password) ? password : ''
  password2 = !isEmpty(password2) ? password2 : ''

  !Validator.isLength(name, { min: 2, max: 30 }) && (errors.name = '名字的长度不能小于2位且不超过30位')
  !Validator.isEmail(email) && (errors.email = '邮箱不合法')
  !Validator.equals(password, password2) && (errors.password2 = '两次密码不一致')
  !Validator.isLength(password, { min: 6, max: 30 }) && (errors.password = 'password的长度不能小于6位且不超过30位')
  !Validator.isLength(password2, { min: 6, max: 30 }) && (errors.password2 = 'password2的长度不能小于6位且不超过30位')
  Validator.isEmpty(name) && (errors.name = '名字不能为空')
  Validator.isEmpty(email) && (errors.email = '邮箱不能为空')
  Validator.isEmpty(password) && (errors.password = 'password不能为空')
  Validator.isEmpty(password2) && (errors.password2 = 'password2不能为空')

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
