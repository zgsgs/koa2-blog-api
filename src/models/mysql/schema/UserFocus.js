/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:15:53
 * @LastEditTime: 2021-06-28 01:17:17
 * @LastEditors: jason
 * @Description: 用户关注模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\UserFocus.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserFocus = sequelize.define('UserFocus', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // focus_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '关注ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  focus_list: { type: DataTypes.STRING, allowNull: false, comment: '关注列表' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserFocus
