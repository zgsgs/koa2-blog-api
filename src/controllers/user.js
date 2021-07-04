/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 14:02:36
 * @LastEditTime : 2021-07-04 20:44:34
 * @LastEditors  : Jason
 * @Description: 操作Users表的API网关
 * @FilePath     : \koa2-blog-api\src\controllers\user.js
 */
const Router = require('koa-router')
const passport = require('koa-passport')
const fs = require('fs')
const path = require('path')
// import form validate
const validateRegisterInput = require('@/validation/register')
// import UserInfo
const UserInfo = require('@mysql/UserInfo')
const tools = require('@/utils/tools')
const { constants } = require('@root/config')
const { CustomError, HttpError } = require('@/utils/error')
const keys = require('@root/config/keys')

const router = new Router()

/**
 * @route GET api/users/test
 * @desc 测试接口地址
 * @access: public
 * @param {*}
 * @return {*}
 */
router.get('/test', async ctx => {
  ctx.log.info('ctx测试log4js')
  ctx.body = { msg: 'users works...' }
})

module.exports = router.routes()
