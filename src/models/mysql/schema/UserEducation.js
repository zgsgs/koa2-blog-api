/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 17:59:21
 * @LastEditTime: 2021-06-28 01:16:56
 * @LastEditors: jason
 * @Description: 用户教育经历数据模型
 * @FilePath: \koa2-blog-api\src\models\mysql\schema\UserEducation.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const UserEducation = sequelize.define('UserEducation', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // education_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '教育经历ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  current: { type: DataTypes.BOOLEAN, comment: '当前状态' },
  school: { type: DataTypes.STRING, comment: '学校' },
  degree: { type: DataTypes.STRING, comment: '学位' },
  field_of_study: { type: DataTypes.STRING, comment: '研究领域' },
  from: { type: DataTypes.DATE, comment: '入学时间' },
  to: { type: DataTypes.DATE, comment: '毕业时间' },
  description: { type: DataTypes.BOOLEAN, comment: '工作描述' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = UserEducation