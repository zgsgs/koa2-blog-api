/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:26:53
 * @LastEditTime : 2021-07-04 21:46:02
 * @LastEditors  : Jason
 * @Description: 用户直接权限
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\UserPermit.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const User = require('./User')
const AuthPermit = require('./AuthPermit')

const UserPermit = sequelize.define('UserPermit', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  // uuid: { type: DataTypes.STRING, allowNull: false, comment: '用户ID' },
  // auth_permit_id: { type: DataTypes.INTEGER, allowNull: false, comment: '权限ID' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

User.belongsToMany(AuthPermit, { through: UserPermit })
AuthPermit.belongsToMany(User, { through: UserPermit })

module.exports = UserPermit
