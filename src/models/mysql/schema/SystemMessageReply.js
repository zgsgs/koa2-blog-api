/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:22:20
 * @LastEditTime: 2021-06-28 02:00:46
 * @LastEditors: jason
 * @Description: 系统消息回复模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\SystemMessageReply.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const SystemMessageReply = sequelize.define('SystemMessageReply', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // message_reply_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'消息回复ID'},
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  title: { type: DataTypes.STRING, allowNull: false, comment: '反馈回复标题' },
  content: { type: DataTypes.TEXT, allowNull: false, comment: '反馈回复内容' },
  level: { type: DataTypes.STRING, allowNull: false, comment: '反馈回复层级' },
  ip: { type: DataTypes.STRING, allowNull: false, defaultValue: '', validate: { isIP: true }, comment: '用户IP' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = SystemMessageReply
