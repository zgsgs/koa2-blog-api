/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 21:48:12
 * @LastEditTime : 2021-07-04 14:25:22
 * @LastEditors  : Jason
 * @Description: 系统配置模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\System.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const System = sequelize.define('System', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, comment: '流水号', autoIncrement: true },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  key: { type: DataTypes.STRING, allowNull: false, comment: '配置键' },
  value: { type: DataTypes.STRING, comment: '配置值' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = System
