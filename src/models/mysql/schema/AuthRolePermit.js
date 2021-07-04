/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:13:44
 * @LastEditTime : 2021-07-04 15:20:16
 * @LastEditors  : Jason
 * @Description: 角色模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\AuthRolePermit.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const AuthPermit = require('./AuthPermit')
const AuthRole = require('./AuthRole')

const AuthRolePermit = sequelize.define('AuthRolePermit', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // role_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '校色ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})
AuthRole.belongsToMany(AuthPermit, { through: AuthRolePermit })
AuthPermit.belongsToMany(AuthRole, { through: AuthRolePermit })

module.exports = AuthRolePermit
