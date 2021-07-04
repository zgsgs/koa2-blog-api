/*
 * @Author: jason <2087108700@qq.com>
 * @Date: 2021-05-31 17:16:51
 * @LastEditTime: 2021-05-31 17:24:31
 * @LastEditors: jason
 * @Description: 定义常数
 * @FilePath: \koa-restful-api\config\constants.js
 */
module.exports = Object.freeze({
  HTTP_CODE: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_BUSY: 503
  },
  CUSTOM_CODE: {
    SOME_CUSTOM_ERROR: 1001,
    PARAM_VALIDATION_FAILED: 4001,
  }
})
