/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 18:21:30
 * @LastEditTime : 2021-07-04 16:17:13
 * @LastEditors  : Jason
 * @Description: 模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\Test.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const Test = sequelize.define('Test', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },

  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = Test
