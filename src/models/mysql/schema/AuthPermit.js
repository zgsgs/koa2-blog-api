/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-06-27 19:21:17
 * @LastEditTime : 2021-07-04 18:04:35
 * @LastEditors  : Jason
 * @Description: 权限信息 自定义权限模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\AuthPermit.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')

const AuthPermit = sequelize.define('AuthPermit', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, autoIncrement: true, comment: '流水号' },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  code: { type: DataTypes.STRING, allowNull: false, comment: '权限代码 add-添加 delete-删除 get-查询 edit-编辑 ...' },
  name: { type: DataTypes.STRING, allowNull: false, comment: '权限名' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

module.exports = AuthPermit
