import axios from 'axios'
export const getwarehouse = (params) =>
  axios({
    method: 'GET',
    url: '/api/warehouse/page',
    params
  })
// 启用或停用
export const setstatus = (data) =>
  axios({
    method: 'PUT',
    url: '/api/warehouse',
    data
  })
// 请求Code
export const getCode = () =>
  axios({
    url: '/api/codeFactory/next/CK'
  })
// 新增房源
export const addHouse = (data) =>
  axios({
    method: 'POST',
    url: '/api/warehouse',
    data
  })
export const editHouse = (params) =>
  axios({
    url: `/api/warehouse/${params}`
  })
