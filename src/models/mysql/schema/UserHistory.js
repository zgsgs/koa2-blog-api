/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-04 18:38:38
 * @LastEditTime : 2021-07-04 22:15:11
 * @LastEditors  : Jason
 * @Description  : 用户浏览记录模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\UserHistory.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserHistory = sequelize.define('UserHistory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  // uuid: { type: DataTypes.INTEGER, allowNull: false, comment: '用户ID' },
  blog_id: { type: DataTypes.INTEGER, allowNull: false, comment: '文章ID' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserHistory
