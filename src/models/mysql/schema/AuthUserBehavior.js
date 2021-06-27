/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 18:21:30
 * @LastEditTime: 2021-06-28 01:02:40
 * @LastEditors: jason
 * @Description: 用户行为模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\AuthUserBehavior.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const AuthUserBehavior = sequelize.define('AuthUserBehavior', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // behavior_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '主键记录流水号' },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  object_type: { type: DataTypes.STRING, allowNull: false, comment: '关联对象类型' },
  object_id: { type: DataTypes.STRING, allowNull: false, comment: '关联对象号' },
  type: { type: DataTypes.STRING, allowNull: false, comment: '行为类型' },
  value: { type: DataTypes.STRING, allowNull: false, comment: '行为数值' },
  intro: { type: DataTypes.STRING, comment: '行为说明' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = AuthUserBehavior
