import axios from 'axios'
export const getwarehouse = (params) =>
  axios({
    url: '/api/area/pageDetail',
    params
  })
// 启用或停用
export const setstatus = (data) =>
  axios({
    method: 'PUT',
    url: '/api/area',
    data
  })
// 请求Code
export const getCode = () =>
  axios({
    url: '/api/codeFactory/next/KQ'
  })
// 新增房源
export const addHouse = (data) =>
  axios({
    method: 'POST',
    url: '/api/warehouse',
    data
  })
