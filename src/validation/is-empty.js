/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-23 21:48:55
 * @LastEditTime: 2021-05-28 21:15:41
 * @LastEditors: jason
 * @Description: 判断空
 * @FilePath: \koa-restful-api\validation\isEmpty.js
 */

/**
 * @desc: 判断空
 * @access: public
 * @param {Any} value
 * @return {Boolean} isEmpty
 */
const isEmpty = value => {
  return value == undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0)
}

module.exports = isEmpty
