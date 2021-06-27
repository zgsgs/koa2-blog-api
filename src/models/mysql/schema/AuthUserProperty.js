/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:00:27
 * @LastEditTime: 2021-06-27 23:57:58
 * @LastEditors: jason
 * @Description: 用户属性模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\AuthUserProperty.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const AuthUserProperty = sequelize.define('AuthUserProperty', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // property_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '用户属性ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  name: { type: DataTypes.STRING, allowNull: false, comment: '属性名' },
  value: { type: DataTypes.STRING, allowNull: false, comment: '属性值' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = AuthUserProperty
