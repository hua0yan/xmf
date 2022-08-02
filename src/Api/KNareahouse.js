import axios from 'axios'
export const getownerId = () =>
  axios({
    url: '/api/owner/list'
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
// 盘点库区1
export const getareaId = (params) =>
  axios({
    url: '/api/warehouse/list',
    params
  })
// 盘点库区数据2
// warehouseId: 1003233683332691233
// status: 1
export const getareaIds = (params) =>
  axios({
    url: '/api/area/list',
    params
  })
// 获取code
export const getPD = () =>
  axios({
    url: '/api/codeFactory/next/PD'
  })
// 新增库内
// areaId: "798977362099175521"
// code: "PD000586"
// dimension: "KW"
// id: "1003684625605745377"
// ownerId: null
// planCheckTime: "2022-08-28 22:01:01"
// reason: "CY"
// status: 1
// type: "JHPD"
// warehouseId: "798976929725153313"
export const getnextCheck = (data) =>
  axios({
    method: 'POST',
    url: '/ips/check',
    data
  })
//   回流
export const getnextCheckout = (data) =>
  axios({
    method: 'PUT',
    url: '/ips/check',
    data
  })
// 盘点清单请求
export const getcheckList = (params) =>
  axios({
    method: 'GET',
    url: '/ips/checkList/pageDetail',
    params
  })
// 添加盘点清单
export const Addcheckpage = (params) =>
  axios({
    method: 'GET',
    url: '/ips/stock/pageDetail',
    params
  })
// 确认添加
export const AddBatch = (data) =>
  axios({
    method: 'POST',
    url: '/ips/checkList/batch',
    data
  })
//   查看详情
export const getLooks = (id) =>
  axios({
    method: 'GET',
    url: `/ips/check/detail/${id}`,
    params: {
      0: id
    }
  })
