// import axios from 'axios'
// axios.defaults.baseURL = 'http://www-wms-java.itheima.net'
// axios.defaults.timeout = 50000
// export default axios

// 发布订阅模式
class EvenBus {
  arr = []
  $on(Name, callback) {
    this.arr.push({ Name, callback })
  }

  $emit(newName, ...args) {
    this.arr.forEach((item) => {
      if (item.Name === newName) {
        item.Callback(...args)
      }
    })
  }
}
export const evenBas = new EvenBus()
