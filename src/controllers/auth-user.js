/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 14:02:36
 * @LastEditTime: 2021-06-28 02:39:32
 * @LastEditors: jason
 * @Description: 操作Users表的API网关
 * @FilePath: \koa2-blog-api\src\controllers\auth-user.js
 */
const Router = require('koa-router')
const passport = require('koa-passport')
const fs = require('fs')
const path = require('path')
// import form validate
const validateRegisterInput = require('@/validation/register')
const validateLoginInput = require('@/validation/login')
// import AuthUser
const AuthUser = require('@mysql/AuthUser')
const tools = require('@/utils/tools')
const { constants } = require('@root/config')
const { CustomError, HttpError } = require('@/utils/error')
const keys = require('@root/config/keys')

const router = new Router()

/**
 * @route GET api/auth/user/test
 * @desc 测试接口地址
 * @access: public
 * @param {*}
 * @return {*}
 */
router.get('/test', async ctx => {
  ctx.log.info('ctx测试log4js')
  ctx.body = { msg: 'auth-user works...' }
})

/**
 * @route POST api/auth/user/register
 * @desc: 注册
 * @access: public
 * @param {Context} ctx
 * @return {JSON}
 */
router.post('/register', async ctx => {
  const { errors, isValid } = validateRegisterInput(ctx.request.body)
  if (!isValid) {
    ctx.status = 400
    ctx.body = { msg: errors }
    return
  }
  let { name, email, password, avatar, code, type, level, phone, salt } = ctx.request.body
  const findResult = await AuthUser.findAll({ where: { email } })
  if (findResult.length > 0) {
    ctx.body = { msg: '邮箱已被占用' }
    return
  }

  password = await tools.enbcrypt(password)
  if (!avatar) {
    avatar = `https://api.multiavatar.com/${name}.svg`
  }
  const newAuthUser = await AuthUser.build({
    name,
    email,
    password,
    avatar,
    code: 1,
    type: 1,
    level: 0,
    phone: phone || '',
    salt: salt || '',
    created_at: new Date(),
    updated_at: new Date(),
  })
  // 存入数据库
  await newAuthUser
    .save()
    .then(user => {
      ctx.body = user
    })
    .catch(err => {
      ctx.body = err
    })
})

/**
 * @route POST api/auth/user/login
 * @desc: 登录
 * @access: public
 * @param {Context} ctx
 * @return {JSON}
 */
router.post('/login', async ctx => {
  ctx.log.info(ctx.request.body)
  const { errors, isValid } = validateLoginInput(ctx.request.body)
  if (!isValid) {
    ctx.status = 400
    ctx.body = { msg: errors }
    return
  }
  const { phone, email, password } = ctx.request.body
  const loginName = phone ? { phone } : { email }
  const findResult = await AuthUser.findAll(loginName)
  if (findResult.length == 0) {
    ctx.status = 404
    ctx.body = { msg: '用户不存在' }
    return
  }
  const user = findResult[0]
  const { uuid, name, avatar, password: pwd } = user
  const payload = { uuid, name, avatar }
  const token = tools.jwtSign(payload)
  const isCompare = await tools.compare(password, pwd)
  if (isCompare) {
    ctx.body = { success: true, uuid, token: `Bearer ${token}` }
  } else {
    ctx.status = 400
    ctx.body = { msg: '密码错误' }
  }
})
/**
 * @route POST api/auth/user/redirect
 * @desc: 路由重定向
 * @access: public
 * @param {*}
 * @return {*}
 */
router.get('/redirect', async ctx => {
  ctx.status = 304
  ctx.response.redirect('/')
  ctx.response.body = '<a href="/">Index Page</a>'
})
/**
 * @route POST api/auth/user/current
 * @desc: 跨表查询用户当前信息
 * @access: private
 * @param {Context} ctx
 * @return {JSON}
 */
router.get('/current', passport.authenticate('jwt', { session: false }), async ctx => {
  const { id, name, email, avatar } = ctx.state.user
  ctx.body = { id, name, email, avatar }
})
/**
 * @route POST api/auth/user/avatar
 * @desc: 上载头像
 * @access: private
 * @param {Context} ctx
 * @return {JSON}
 */
router.post('/avatar', passport.authenticate('jwt', { session: false }), async ctx => {
  const { id } = ctx.state.user
  const file = ctx.request.files.file
  const basename = path.basename(file.path)
  const reader = fs.createReadStream(file.path)
  const stream = fs.createWriteStream(path.join('../../public/images', file.name))
  reader.pipe(stream)
  ctx.log.info(`uploading ${file.name} -> ${stream.path}`)

  ctx.body = { url: `${ctx.origin}/${keys.upload.dir}${basename}` }
})

module.exports = router.routes()
