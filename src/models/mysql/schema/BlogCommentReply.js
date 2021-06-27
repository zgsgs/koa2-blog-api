/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:32:47
 * @LastEditTime: 2021-06-27 23:37:10
 * @LastEditors: jason
 * @Description:
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\BlogCommentReply.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const BlogCommentReply = sequelize.define('BlogCommentReply', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment:'流水号'},
  // comment_reply_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '评论回复ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  content: { type: DataTypes.TEXT, allowNull: false, comment: '评论回复内容' },
  love: { type: DataTypes.INTEGER, comment: '评论回复点赞数', defaultValue: 0 },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = BlogCommentReply
