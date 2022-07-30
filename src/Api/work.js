import axios from 'axios'
export const gettodo = () =>
  axios({
    url: '/ips/home/todo'
  })
export const geteCharts = (dimension) =>
  axios({
    method: 'GET',
    url: '/ips/home/sumList',
    params: {
      dimension
    }
  })
export const geteCharts1 = () =>
  axios({
    url: '/ips/home/stockUseStatus'
  })
