/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:26:53
 * @LastEditTime : 2021-07-04 14:30:45
 * @LastEditors  : Jason
 * @Description: 用户直接权限
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\AuthUserPermit.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const AuthUserPermit = sequelize.define('AuthUserPermit', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // permit_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '权限ID' },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  code: { type: DataTypes.STRING, allowNull: false, comment: '权限代码' },
  name: { type: DataTypes.STRING, allowNull: false, comment: '权限名' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = AuthUserPermit
