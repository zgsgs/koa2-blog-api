/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 01:22:03
 * @LastEditTime : 2021-07-04 23:34:47
 * @LastEditors  : Jason
 * @Description: 用户账号模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\Auth.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const Auth = sequelize.define('Auth', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  uid: { type: DataTypes.INTEGER, allowNull: false, comment: '用户ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  type: { type: DataTypes.STRING, allowNull: false, comment: '第三方登录类型 github gitlab google microsoft qq wechart weibo' },
  openid: { type: DataTypes.STRING, allowNull: false, comment: '第三方 uid openid 等' },
  unionid: { type: DataTypes.STRING, comment: 'QQ/微信同一主体下 Unionid 相同' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = Auth
