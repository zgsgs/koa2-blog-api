/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:04:52
 * @LastEditTime : 2021-07-04 15:19:37
 * @LastEditors  : Jason
 * @Description: 用户角色映射模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\AuthUserRole.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const AuthRole = require('./AuthRole')
const AuthUser = require('./AuthUser')

const AuthUserRole = sequelize.define('AuthUserRole', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // user_role_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'用户角色映射ID'},
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})
AuthUser.belongsToMany(AuthRole, { through: AuthUserRole })
AuthRole.belongsToMany(AuthUser, { through: AuthUserRole })

module.exports = AuthUserRole
