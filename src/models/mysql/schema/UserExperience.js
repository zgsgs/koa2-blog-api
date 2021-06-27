/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 17:48:39
 * @LastEditTime: 2021-06-28 01:17:08
 * @LastEditors: jason
 * @Description: 用户工作经历数据模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\UserExperience.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserExperience = sequelize.define('UserExperience', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // experience_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '工作经历ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  current: { type: DataTypes.BOOLEAN, comment: '当前工作状态' },
  title: { type: DataTypes.STRING, comment: '名称' },
  company: { type: DataTypes.STRING, comment: '公司' },
  location: { type: DataTypes.STRING, comment: '公司地址' },
  from: { type: DataTypes.DATE, comment: '入职时间' },
  to: { type: DataTypes.DATE, comment: '离职时间' },
  description: { type: DataTypes.STRING, comment: '工作描述' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserExperience