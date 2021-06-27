/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:13:44
 * @LastEditTime: 2021-06-28 01:24:16
 * @LastEditors: jason
 * @Description: 角色模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\AuthRole.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const AuthPermit = require('./AuthPermit')

const AuthRole = sequelize.define('AuthRole', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // role_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '校色ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  code: { type: DataTypes.STRING, allowNull: false, comment: '角色代码' },
  sort: { type: DataTypes.STRING, allowNull: false, comment: '排序代码', defaultValue: 9999 },
  name: { type: DataTypes.STRING, allowNull: false, comment: '角色名' },
  type: { type: DataTypes.STRING, allowNull: false, comment: '角色类型' },
  in_work_flow: { type: DataTypes.BOOLEAN, comment: '是否应用于工作流', defaultValue: false },
  summary: { type: DataTypes.STRING, comment: '角色描述' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})
AuthRole.AuthPermit = AuthRole.hasMany(AuthPermit)

module.exports = AuthRole
