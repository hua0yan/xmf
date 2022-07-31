import axios from 'axios'
export const getownerId = () =>
  axios({
    url: '/api/owner/list'
  })
// 盘点库区数据
// warehouseId: 1003233683332691233
// status: 1
export const getareaId = (params) =>
  axios({
    url: '/api/area/list',
    params
  })
//   表格数据请求
// code: 盘点单号
// status: 5
// type: SJPD 盘点类型
// ownerId: 798980735426888481 货主
// areaId: 798977362099175521 盘点库区
// current: 1
// size: 10
export const getwarehouse = (params) =>
  axios({
    url: '/ips/check/pageDetail',
    params
  })
