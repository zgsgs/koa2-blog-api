/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:29:50
 * @LastEditTime : 2021-07-04 14:06:03
 * @LastEditors  : Jason
 * @Description:
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\Blog.js
 */

const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const BlogCategory = require('./BlogCategory')
const BlogComment = require('./BlogComment')

const Blog = sequelize.define('Blog', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  // blog_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '文章ID' },
  status: { type: DataTypes.INTEGER, allowNull: false, comment: '状态 0-未启用', defaultValue: 0 },
  blog_title: { type: DataTypes.STRING, allowNull: false, comment: '标题' },
  blog_category: { type: DataTypes.STRING, allowNull: false, comment: '分类' },
  blog_label: { type: DataTypes.STRING, allowNull: false, comment: '标签' },
  blog_cover: { type: DataTypes.STRING, allowNull: false, comment: '封面' },
  blog_topic: { type: DataTypes.STRING, allowNull: false, comment: '收录专栏' },
  blog_summary: { type: DataTypes.STRING, comment: '摘要', defaultValue: '' },
  blog_page_views: { type: DataTypes.STRING, comment: '浏览量', defaultValue: 0 },
  blog_collection: { type: DataTypes.INTEGER, comment: '收藏量', defaultValue: 0 },
  blog_content: { type: DataTypes.TEXT, comment: '内容' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1已删除 0未删除' },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

Blog.BlogCategory = Blog.hasOne(BlogCategory)
Blog.BlogComment = Blog.hasMany(BlogComment)

module.exports = Blog
