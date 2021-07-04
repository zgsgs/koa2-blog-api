/*
 * @Author       : Jason <2087108700@qq.com>
 * @Date         : 2021-07-04 19:22:39
 * @LastEditTime : 2021-07-04 21:38:50
 * @LastEditors  : Jason
 * @Description  : 系统字典模型
 * @FilePath     : \koa2-blog-api\src\models\mysql\schema\SystemDictionaryType.js
 */
const { DataTypes } = require('sequelize')
const sequelize = require('@models/mysql')
const SystemDictionary = require('./SystemDictionary')

const SystemDictionaryType = sequelize.define('SystemDictionaryType', {
  id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true, comment: '流水号', autoIncrement: true },
  status: { type: DataTypes.STRING, allowNull: false, comment: '状态' },
  name: { type: DataTypes.STRING, comment: '字典类型中文名称' },
  remark: { type: DataTypes.STRING, comment: '字典类型备注' },
  is_delete: { type: DataTypes.INTEGER, comment: '软删除 1-已删除 0-未删除', defaultValue: 0 },
  revision: { type: DataTypes.STRING, comment: '乐观锁' },
  created_by: { type: DataTypes.STRING, comment: '创建人' },
  created_at: { type: DataTypes.DATE, comment: '创建时间', defaultValue: DataTypes.DATE },
  updated_by: { type: DataTypes.STRING, comment: '更新人' },
  updated_at: { type: DataTypes.DATE, comment: '更新时间', defaultValue: DataTypes.DATE },
})

SystemDictionaryType.SystemDictionary = SystemDictionaryType.hasMany(SystemDictionary)

module.exports = SystemDictionaryType
