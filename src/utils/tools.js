/*
 * @Author: your name
 * @Date: 2021-05-25 23:17:05
 * @LastEditTime: 2021-06-01 11:10:48
 * @LastEditors: jason
 * @Description: In User Settings Edit
 * @FilePath: \koa-restful-api\src\utils\tools.js
 */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('@root/config/keys')

module.exports = {
  enbcrypt: async str => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(str, salt)
    return hash
  },
  compare: (str, enStr) => {
    return bcrypt.compareSync(str, enStr)
  },
  jwtSign: (payload, expire = 3600) => {
    return jwt.sign(payload, keys.secretOrKey, { expiresIn: expire })
  },
  formatResponse: (data = {}, code = 200, msg = 'ok') => {
    return { code, msg, data }
  },
}
