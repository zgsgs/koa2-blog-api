/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 21:48:12
 * @LastEditTime: 2021-06-27 21:50:37
 * @LastEditors: jason
 * @Description: 系统配置模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\System.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const System = sequelize.define('System', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, comment:'流水号', autoIncrement: true},
  // system_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'系统配置ID'},
  status: {type:DataTypes.STRING, allowNull:false,comment:'状态'},
  key: {type:DataTypes.STRING, allowNull:false,comment:'状态'},
  value: {type:DataTypes.STRING,comment:'状态'},
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = System
