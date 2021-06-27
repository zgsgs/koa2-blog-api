/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:17:50
 * @LastEditTime: 2021-06-28 00:15:47
 * @LastEditors: jason
 * @Description:
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\UserMessage.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserMessage = sequelize.define('UserMessage', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // message_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'用户消息ID'},
  status: {type:DataTypes.STRING, allowNull:false,comment:'状态'},
  title: {type:DataTypes.STRING, allowNull:false,comment:'用户消息标题'},
  content: {type:DataTypes.STRING, allowNull:false,comment:'用户消息内容'},
  level: {type:DataTypes.STRING, allowNull:false,comment:'用户消息等级'},
  is_read: {type:DataTypes.BOOLEAN, allowNull:false,comment:'是否已读'},
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserMessage
