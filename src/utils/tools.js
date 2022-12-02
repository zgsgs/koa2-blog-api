/*
 * @Author: your name
 * @Date: 2021-05-25 23:17:05
 * @LastEditTime : 2021-07-05 13:34:21
 * @LastEditors  : Jason
 * @Description: In User Settings Edit
 * @FilePath     : \koa2-blog-api\src\utils\tools.js
 */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('@root/config/keys')

module.exports = {
  enbcrypt: async str => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(str, salt)
    return { hash, salt }
  },
  compare: (str, enStr) => {
    return bcrypt.compareSync(str, enStr)
  },
  jwtSign: (payload, expire = 3600) => {
    return jwt.sign(payload, keys.secretOrKey, { expiresIn: expire })
  },
  formatResponse: (code = 2000, msg = 'ok', data = {}) => {
    const time = new Date().getTime()
    return { code, msg, data }
  },
}
