/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 01:22:03
 * @LastEditTime : 2021-07-04 14:48:39
 * @LastEditors  : Jason
 * @Description: 用户账号模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\AuthUser.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const User = require('./User')
const AuthUserBehavior = require('./AuthUserBehavior')
const AuthUserPermit = require('./AuthUserPermit')
const AuthUserProperty = require('./AuthUserProperty')
const UserEducation = require('./UserEducation')
const UserExperience = require('./UserExperience')
const UserFocus = require('./UserFocus')
const UserMessage = require('./UserMessage')
const UserFriend = require('./UserFriend')
const Blog = require('./Blog')
const System = require('./System')

const AuthUser = sequelize.define('AuthUser', {
  // id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  uuid: { type: DataTypes.STRING, primaryKey: true, allowNull: false, unique: true, comment: 'uuid用户唯一标识', defaultValue: DataTypes.UUIDV4 },
  code: { type: DataTypes.STRING, allowNull: false, comment: '账号代号' },
  type: { type: DataTypes.STRING, allowNull: false, comment: '账号类型' },
  level: { type: DataTypes.STRING, allowNull: false, comment: '账号等级' },
  name: { type: DataTypes.STRING, allowNull: false, comment: '用户名' },
  email: { type: DataTypes.STRING, comment: '邮箱' },
  phone: { type: DataTypes.STRING, allowNull: false, comment: '手机号' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  password: { type: DataTypes.STRING, allowNull: false, comment: '密码' },
  salt: { type: DataTypes.STRING, allowNull: false, comment: '密码盐值' },
  avatar: { type: DataTypes.STRING, comment: '头像' },
  github: { type: DataTypes.STRING, comment: 'Github' },
  gitlab: { type: DataTypes.STRING, comment: 'GitLab' },
  google: { type: DataTypes.STRING, comment: 'Google' },
  microsoft: { type: DataTypes.STRING, comment: 'Microsoft' },
  qq: { type: DataTypes.STRING, comment: 'QQ' },
  wechart: { type: DataTypes.STRING, comment: '微信' },
  weibo: { type: DataTypes.STRING, comment: '新浪微博' },
  last_login_ip: { type: DataTypes.STRING, allowNull: false, defaultValue: '0.0.0.0', validate: { isIP: true }, comment: '最后登录IP' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

AuthUser.AuthUserBehavior = AuthUser.hasMany(AuthUserBehavior)
AuthUser.AuthUserPermit = AuthUser.hasMany(AuthUserPermit)
AuthUser.AuthUserProperty = AuthUser.hasMany(AuthUserProperty)
AuthUser.User = AuthUser.hasOne(User)
AuthUser.UserEducation = AuthUser.hasMany(UserEducation)
AuthUser.UserExperience = AuthUser.hasMany(UserExperience)
AuthUser.UserFocus = AuthUser.hasMany(UserFocus)
AuthUser.UserMessage = AuthUser.hasMany(UserMessage)
AuthUser.UserFriend = AuthUser.hasOne(UserFriend)
AuthUser.Blog = AuthUser.hasMany(Blog)
AuthUser.System = AuthUser.hasMany(System)

module.exports = AuthUser
