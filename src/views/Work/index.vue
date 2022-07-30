<template>
  <div class="work">
    <div class="divStatic">
      <div class="Left">
        <div data-v-68619bf0="" data-v-a1146998="" class="banner">
          <img
            data-v-68619bf0=""
            src="http://www-wms-java.itheima.net/img/dashboard-banner-left@2x.5afd2949.png"
            alt=""
            class="img-left"
          /><img
            data-v-68619bf0=""
            src="http://www-wms-java.itheima.net/img/dashboard-banner-right@2x.28195570.png"
            alt=""
            class="img-right"
          /><img
            data-v-68619bf0=""
            src="http://www-wms-java.itheima.net/img/avatar@2x.4f4a758f.png"
            alt=""
            class="user-header"
          />
          <p data-v-68619bf0="" class="user-title">仓储管理员</p>
          <p data-v-68619bf0="" class="subject-title">
            我不是为了输赢，我就是认真！
          </p>
          <p data-v-68619bf0="" class="subject-author">—— 罗永浩</p>
          <div data-v-68619bf0="" class="site">
            <p data-v-68619bf0="" class="title">北京总仓</p>
          </div>
        </div>
        <div class="backlog">
          <div class="subject">待办信息</div>
          <div class="item-list">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="6"
                ><div class="grid-content">
                  <a href="#">
                    <div class="backlog-Item">
                      <i class="iconfont icon-ruku"></i>
                      <div data-v-6b16ef46="" class="title">入库单</div>
                    </div>
                    <div class="bottom">
                      <i>新增</i><span>2</span> <i>待审核</i
                      ><span style="color: rgb(0, 118, 255)">2</span>
                    </div>
                  </a>
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content">
                  <a href="#">
                    <div class="backlog-Item" style="background-color: #ffb200">
                      <i class="iconfont icon-chukudan"></i>
                      <div data-v-6b16ef46="" class="title">出库单</div>
                    </div>
                    <div class="bottom">
                      <i>新增</i><span>2</span> <i>待审核</i
                      ><span style="color: rgb(0, 118, 255)">2</span>
                    </div>
                  </a>
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content">
                  <a href="#">
                    <div class="backlog-Item" style="background-color: #ff7100">
                      <i class="iconfont icon-navicon-pdd"></i>
                      <div data-v-6b16ef46="" class="title">盘点单</div>
                    </div>
                    <div class="bottom">
                      <i>新增</i><span>6</span> <i>待审核</i
                      ><span style="color: rgb(0, 118, 255)">6</span>
                    </div>
                  </a>
                </div></el-col
              >
            </el-row>
          </div>
        </div>
      </div>
      <div class="Right">
        <div data-v-f17088d0="" data-v-a1146998="" class="notes">
          <div data-v-f17088d0="" class="subject">通知/公告</div>
          <div data-v-f17088d0="" class="item">
            <div data-v-f17088d0="" class="hr"></div>
            <div data-v-f17088d0="" class="title">紧急盘点通知</div>
            <div data-v-f17088d0="" class="time">2020.12.30 18:23:14</div>
          </div>
          <div data-v-f17088d0="" class="item">
            <div data-v-f17088d0="" class="hr"></div>
            <div data-v-f17088d0="" class="title">运维服务更新通知</div>
            <div data-v-f17088d0="" class="time">2021.01.25 18:23:14</div>
          </div>
          <div data-v-f17088d0="" class="item">
            <div data-v-f17088d0="" class="hr"></div>
            <div data-v-f17088d0="" class="title">客户入库变更通知</div>
            <div data-v-f17088d0="" class="time">2021.01.26 18:23:14</div>
          </div>
          <div data-v-f17088d0="" class="item">
            <div data-v-f17088d0="" class="hr"></div>
            <div data-v-f17088d0="" class="title">五一放假通知</div>
            <div data-v-f17088d0="" class="time">2021.02.15 18:23:14</div>
          </div>
          <div data-v-f17088d0="" class="item">
            <div data-v-f17088d0="" class="hr"></div>
            <div data-v-f17088d0="" class="title">品达物流系统对接通知</div>
            <div data-v-f17088d0="" class="time">2021.3.25 18:23:14</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tasks">
      <div data-v-3a2de5dd="" class="subject">任务导航</div>
      <div class="item-list">
        <el-row :gutter="20">
          <el-col :span="5"
            ><div class="grid-content">
              <a href="#">
                <div class="grid-Item">
                  <div class="icon">
                    <i class="iconfont icon-kache"></i>
                  </div>
                  <div class="text">收货任务</div>
                </div></a
              >
            </div></el-col
          >
          <el-col :span="5"
            ><div class="grid-content">
              <a href="#">
                <div class="grid-Item">
                  <div class="icon" style="background-color: #52d4f3">
                    <i class="iconfont icon-shangjia"></i>
                  </div>
                  <div class="text">上架任务</div>
                </div></a
              >
            </div></el-col
          >
          <el-col :span="5"
            ><div class="grid-content">
              <a href="#">
                <div class="grid-Item">
                  <div class="icon" style="background-color: #ff7100">
                    <i class="iconfont icon-navicon-pdd"></i>
                  </div>
                  <div class="text">盘点任务</div>
                </div></a
              >
            </div></el-col
          >
          <el-col :span="5"
            ><div class="grid-content">
              <a href="#">
                <div class="grid-Item">
                  <div class="icon" style="background-color: #ff609e">
                    <i class="iconfont icon-jianhuo"></i>
                  </div>
                  <div class="text">拣货任务</div>
                </div></a
              >
            </div></el-col
          >
          <el-col :span="4"
            ><div class="grid-content">
              <a href="#">
                <div class="grid-Item">
                  <div class="icon" style="background-color: #ffb200">
                    <i class="iconfont icon-jjrw"></i>
                  </div>
                  <div class="text">交接任务</div>
                </div></a
              >
            </div></el-col
          >
        </el-row>
      </div>
    </div>
    <div class="inout-charts">
      <div class="title">
        <el-row :gutter="20">
          <el-col :span="16"><div class="text">入库/出库信息</div></el-col>
          <el-col :span="8"
            ><div class="btn">
              <el-button @click="getMyChartdate('w')">本周</el-button>
              <el-button @click="getMyChartdate('e')">本月</el-button>
              <el-button @click="getMyChartdate('c')">全年</el-button>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="charts"></div>
    </div>
    <div class="libs">
      <div class="use-charts"></div>
      <div class="libs-charts"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { gettodo, geteCharts, geteCharts1 } from '@/Api/work.js'
export default {
  name: 'work',
  data() {
    return {
      arr: [],
      option: {
        // title: {
        //   text: '入库/出库信息'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['入库', '出库'],
          y: 'bottom'
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '入库',
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
              color: '#ff7100'
            }
          },
          {
            name: '出库',
            type: 'bar',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
              color: '#ffb200'
            }
          }
        ]
      },
      option1: {
        title: {
          text: '库存使用情况'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '可用库存',
            type: 'pie',
            radius: ['47%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'center',
              normal: {
                position: 'center',
                color: '#ffbb00',
                fontSize: '20px',
                fontWeight: 700
              }
            },
            data: [
              { value: 1048, name: '冻结库存' },
              { value: 735, name: '可用库存' }
            ]
          }
        ]
      },
      option2: {
        title: {
          text: '库区使用情况',
          left: 'left'
        },
        color: ['#0076ff', '#52d4f3', '#5d7092', '#ffb200', '#ff7100'],
        tooltip: {
          trigger: 'item',
          formatter: ' {b}：{d}%',
          backgroundColor: 'rgba(50,50,50,0.7)',
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          orient: 'vertical',
          right: '30%',
          top: '20%',
          icon: 'circle', // 设为圆形
          selectedMode: false, // 禁止选定
          itemGap: 20,
          itemWidth: 15
          // 使用回调函数
          //   formatter: function (name) {
          //     let total = 0
          //     let target
          //     for (let i = 0; i < data.length; i++) {
          //       total += data[i].value
          //       if (data[i].name === name) {
          //         target = data[i].value
          //       }
          //     }
          //     return (
          //       name +
          // '        ' +
          // ((target / total) * 100).toFixed() +
          // '%' +
          // '        ' +
          // target
          //     )
          //   }
        },
        series: [
          {
            type: 'pie',
            radius: '70%',
            center: ['30%', '50%'],
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'inside',
              color: '#fff',
              formatter: '{c}'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 348, name: '拣货区' },
              { value: 487, name: '出货区' },
              { value: 677, name: '暂存货区' },
              { value: 126, name: '进货暂存区' },
              { value: 298, name: '出货暂存区' }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.getMyChart()
    this.getMyChartdate1()
  },
  created() {
    this.gettodo()
  },
  methods: {
    getMyChart() {
      const myChart = echarts.init(document.querySelector('.charts'))
      myChart.setOption(this.option)
      const myChart1 = echarts.init(document.querySelector('.use-charts'))
      myChart1.setOption(this.option1)
      const myChart2 = echarts.init(document.querySelector('.libs-charts'))
      myChart2.setOption(this.option2)
      // this.getMyChart()不能自己调自己
      // this.option1.series.label.normal.formatter = res1.data.data[0].name
    },
    async getMyChartdate(type) {
      // console.log(type)
      const res = await geteCharts(type)
      // console.log(res.data.data)
      // console.log(this.option.xAxis[0].data)
      this.option.xAxis[0].data = res.data.data.x
      this.option.series[0].data = res.data.data.data[0].data
      this.option.series[1].data = res.data.data.data[1].data
      this.option.series[0].name = res.data.data.data[0].name
      this.option.series[1].name = res.data.data.data[1].name
      this.getMyChart()
      // console.log(this.option.series[0].data)
      // console.log(res.data.data.data[0].data)
    },
    async getMyChartdate1() {
      const res1 = await geteCharts1()
      // console.log(res1)
      this.option1.series[0].data[0] = res1.data.data[0]
      this.option1.series[0].data[1] = res1.data.data[1]
      this.option1.series[0].data[0].itemStyle = { color: '#e5dad1' }
      this.option1.series[0].data[1].itemStyle = { color: '#ffbb00' }
      this.getMyChart()
    },
    // 巴哥1号
    async gettodo() {
      const res = await gettodo()
      // console.log(res)
      this.arr = res.data.data
      // console.log(this.arr[0].name)
    }
  }
}
</script>

<style scoped lang="less">
//公共样式
.subject {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #332929;
  line-height: 22px;
}
//第一大块样式
.divStatic {
  width: 100%;
  height: 451px;
  background-color: #fff;
  .Left {
    float: left;
    width: 920px;
    height: 100%;
    padding-right: 30px;
    background-color: #fdfafa;
    .banner {
      position: relative;
      width: 100%;
      height: 148px;
      background: linear-gradient(270deg, #ffc771, #ffa634);
      box-shadow: 0 0 6px 0 rgb(188 151 69 / 12%);
      border-radius: 12px;
      .img-left {
        position: absolute;
        top: 0;
        left: 0;
        height: 148px;
      }
      .img-right {
        position: absolute;
        top: 0;
        right: 0;
        height: 148px;
      }
      .user-header {
        position: absolute;
        top: 31px;
        left: 43px;
        height: 62px;
      }
      .user-title {
        position: absolute;
        left: 36px;
        bottom: 20px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #332929;
        line-height: 22px;
      }
      .subject-title {
        position: absolute;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 25px;
        top: 36px;
        left: 200px;
        font-size: 18px;
      }
      .subject-author {
        top: 76px;
        left: 400px;
        font-size: 16px;
        position: absolute;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 25px;
      }
      .site {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 147px;
        height: 40px;
        background: #f8f5f5;
        border-radius: 6px;
        opacity: 0.79;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        .title {
          font-size: 14px;
          font-weight: 500;
          color: #332929;
          line-height: 20px;
        }
      }
    }
    .backlog {
      width: 100%;
      height: 282px;
      margin-top: 20px;
      background: #fff;
      box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
      border-radius: 12px;
      padding: 25px;
      .item-list {
        margin-top: 19px;
        .el-col {
          border-radius: 4px;
          width: 263px;
          height: 196px;
          // background-color: chartreuse;
          .grid-content {
            position: relative;
            height: 186px;
            background: #fbf7f7;
            border-radius: 8px;
            padding: 20px;
            cursor: pointer;
            .backlog-Item {
              width: 49px;
              height: 49px;
              background: #0076ff;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: space-around;
              i {
                font-size: 32px;
                color: #f8f5f5;
              }
              .title {
                position: absolute;
                top: 34px px;
                left: 85px;
                font-size: 16px;
                line-height: 22px;
              }
            }
            .bottom {
              position: absolute;
              bottom: 20px;
              i {
                font-size: 14px;
                font-weight: 400;
                color: #887e7e;
                margin-right: 10px;
                vertical-align: super;
              }
              span {
                font-size: 36px;
                margin-left: 10px;
                font-weight: 500;
                color: #332929;
                margin-right: 20px;
              }
            }
            a,
            a:focus,
            a:hover {
              color: inherit;
              outline: none;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .Right {
    float: left;
    .notes {
      width: 248px;
      height: 451px;
      background-color: #fff;
      box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
      border-radius: 12px;
      padding: 30px;
      .subject {
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #332929;
        line-height: 22px;
      }
      .item {
        margin-top: 15px;
        .hr {
          width: 201px;
          height: 1px;
          background-color: #f5efee;
        }
        .title {
          width: 195px;
          height: 18px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #332929;
          line-height: 18px;
          margin-top: 15px;
        }
        .time {
          width: 115px;
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #887e7e;
          line-height: 17px;
          margin-top: 10px;
        }
      }
    }
  }
}
.tasks {
  width: 100%;
  height: 188px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  padding: 25px;
  margin-top: 19px;
  margin-bottom: 19px;
  .item-list {
    margin-top: 19px;
    .grid-content {
      height: 93px;
      background-color: #fbf7f7;
      border-radius: 5px;
      .grid-Item {
        position: relative;
        width: 100%;
        height: 93px;
        background: #fbf7f7;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .icon {
          width: 50px;
          height: 50px;
          background: #0076ff;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          i {
            font-size: 20px;
            color: #f8f5f5;
          }
        }
        .text {
          font-size: 16px;
          font-weight: 500;
          color: #332929;
          line-height: 22px;
        }
      }
      a:hover {
        display: block;
        background-color: #fff;
        outline: none;
        text-decoration: none;
        background-color: transparent;
      }
    }
  }
}
// eachars样式
.inout-charts {
  height: 500px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 19px;
  .title {
    // .btn{
    //   .el-button{
    //     width: 70px;
    //     height: 36px;
    //     margin-right: -15px;
    //   }
    // }
    .el-button:hover {
      color: #ffb200;
    }
    .text {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #332929;
      line-height: 22px;
    }
  }
  .charts {
    height: 430px;
    width: 115%;
    left: -80px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
  }
}
// 饼状图
.libs {
  display: flex;
  .use-charts {
    float: left;
    width: 30%;
    height: 354px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 25px;
    margin-right: 30px;
  }
  .libs-charts {
    float: left;
    width: 70%;
    height: 354px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 25px;
  }
}
</style>
