/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:47:13
 * @LastEditTime : 2021-07-04 22:00:27
 * @LastEditors  : Jason
 * @Description: 文章分类模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\BlogCategory.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const BlogCategory = sequelize.define('BlogCategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  name: { type: DataTypes.STRING, allowNull: false, comment: '分类名' },
  type: { type: DataTypes.STRING, allowNull: false, comment: '分类类型' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = BlogCategory
