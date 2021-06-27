/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:20:48
 * @LastEditTime: 2021-06-28 01:59:59
 * @LastEditors: jason
 * @Description: 系统反馈模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\SystemFeedback.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const SystemFeedbackReply = require('./SystemFeedbackReply')

const SystemFeedback = sequelize.define('SystemFeedback', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // feedback_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'反馈ID'},
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  title: { type: DataTypes.STRING, allowNull: false, comment: '反馈标题' },
  content: { type: DataTypes.TEXT, allowNull: false, comment: '反馈内容' },
  type: { type: DataTypes.STRING, allowNull: false, comment: '反馈类型' },
  level: { type: DataTypes.STRING, allowNull: false, comment: '反馈层级' },
  ip: { type: DataTypes.STRING, allowNull: false, defaultValue: '', validate: { isIP: true }, comment: '反馈IP' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

SystemFeedback.SystemFeedbackReply = SystemFeedback.hasMany(SystemFeedbackReply)

module.exports = SystemFeedback
