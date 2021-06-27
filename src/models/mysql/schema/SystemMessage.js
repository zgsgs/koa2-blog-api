/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:19:28
 * @LastEditTime: 2021-06-27 23:33:01
 * @LastEditors: jason
 * @Description: 系统通知模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\SystemMessage.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const SystemMessageReply = require('./SystemMessageReply')

const SystemMessage = sequelize.define('SystemMessage', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // message_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '系统消息ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  title: { type: DataTypes.STRING, allowNull: false, comment: '系统消息标题' },
  content: { type: DataTypes.TEXT, allowNull: false, comment: '系统消息内容' },
  type: { type: DataTypes.STRING, allowNull: false, comment: '系统消息类型' },
  level: { type: DataTypes.STRING, allowNull: false, comment: '系统消息等级' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})
SystemMessage.SystemMessageReply = SystemMessage.hasMany(SystemMessageReply)

module.exports = SystemMessage
