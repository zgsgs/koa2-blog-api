/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 20:16:44
 * @LastEditTime: 2021-06-28 01:17:31
 * @LastEditors: jason
 * @Description: 用户好友模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\UserFriend.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserFriend = sequelize.define('UserFriend', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // friend_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '用户好友记录ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  friend_list: { type: DataTypes.STRING, allowNull: false, comment: '用户好友列表' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserFriend
