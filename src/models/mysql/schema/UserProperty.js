/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:00:27
 * @LastEditTime : 2021-07-04 21:17:45
 * @LastEditors  : Jason
 * @Description: 用户属性模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\AuthUserProperty.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserProperty = sequelize.define('UserProperty', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  // uuid: { type: DataTypes.STRING, allowNull: false, comment: '用户ID' },
  name: { type: DataTypes.STRING, allowNull: false, comment: '属性名' },
  value: { type: DataTypes.STRING, allowNull: false, comment: '属性值' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserProperty
