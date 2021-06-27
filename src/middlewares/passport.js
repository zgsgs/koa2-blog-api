/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-23 19:40:19
 * @LastEditTime: 2021-06-27 00:59:32
 * @LastEditors: jason
 * @Description: 封装passport-jwt中间件，解析token
 * @FilePath: \koa2-blog-api\src\middlewares\passport.js
 */
const { Strategy, ExtractJwt } = require('passport-jwt')
const JwtStrategy = Strategy
// const mongoose = require('mongoose')
const {keys:config} = require('@root/config')
// const Users = mongoose.model('users')

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.secretOrKey
module.exports = passport => {
  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    const user = await Users.findById(jwt_payload.id)
    if (!user) {
      return done(null, false);
    }
    return done(null,user)
  }));
}
