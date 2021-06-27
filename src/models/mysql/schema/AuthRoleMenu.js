/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-28 00:23:59
 * @LastEditTime: 2021-06-28 00:27:46
 * @LastEditors: jason
 * @Description: 角色菜单映射模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\AuthRoleMenu.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const AuthMenu = sequelize.define('AuthMenu', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // role_menu_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'角色菜单映射ID'},
  status: {type:DataTypes.STRING, allowNull:false,comment:'状态'},
  role_id: {type:DataTypes.STRING, allowNull:false,comment:'角色ID'},
  menu_id: {type:DataTypes.STRING, allowNull:false,comment:'菜单ID'},
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = AuthMenu
