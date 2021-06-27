/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 16:53:09
 * @LastEditTime: 2021-06-28 01:17:41
 * @LastEditors: jason
 * @Description: 用户模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\User.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const UserEducation = require('./UserEducation')
const UserExperience = require('./UserExperience')
const UserFocus = require('./UserFocus')
const UserMessage = require('./UserMessage')
const UserFriend = require('./UserFriend')

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // user_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'用户ID'},
  status: {type:DataTypes.STRING, allowNull:false,comment:'状态'},
  age: {type:DataTypes.INTEGER, comment:'年龄'},
  birthday: {type:DataTypes.DATE, comment:'生日'},
  org_id: {type:DataTypes.STRING, comment:'机构'},
  post_id: {type:DataTypes.STRING, comment:'职位'},
  introduction: {type:DataTypes.STRING, comment:'个人介绍'},
  company: {type:DataTypes.STRING, comment:'公司'},
  website: {type:DataTypes.STRING, comment:'个人站点'},
  location: {type:DataTypes.STRING, comment:'地址'},
  skills: {type:DataTypes.STRING, comment:'技能'},
  bio: {type:DataTypes.STRING, comment:'个人签名'},
  github_username: {type:DataTypes.INTEGER, comment:'github用户名'},
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})
User.UserEducation = User.hasMany(UserEducation)
User.UserExperience = User.hasMany(UserExperience)
User.UserFocus = User.hasMany(UserFocus)
User.UserMessage = User.hasMany(UserMessage)
User.UserFriend = User.hasMany(UserFriend)

module.exports = User
