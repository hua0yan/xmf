<template>
  <div class="divWarehouse">
    <div class="Head">
      <div class="header" style="margin-bottom: 50px">
        <el-steps :active="active" align-center finish-status="success">
          <el-step title="填写基础信息"></el-step>
          <el-step title="填写盘点清单"></el-step>
        </el-steps>
      </div>
      <div class="body" v-if="isShow">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div class="divLable">盘点单号</div>
              <el-input
                disabled
                v-model="List.code"
                placeholder="请输入"
              ></el-input>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="divLable">盘点原因</div>
              <el-select
                v-model="List.reason"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in EmployeeEnum.reason"
                  :key="index"
                  :label="item.value"
                  :value="item.status"
                ></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="divLable">盘点维度</div>
              <el-select
                v-model="List.dimension"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option
                  v-for="(item, index) in EmployeeEnum.dimension"
                  :key="index"
                  :label="item.value"
                  :value="item.status"
                ></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="divLable">盘点类型</div>

              <el-select
                v-model="List.type"
                slot="prepend"
                placeholder="请选择"
              >
                <el-option label="随机盘点" value="SJPD"></el-option>
                <el-option label="计划盘点" value="JHPD"></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <div class="b">
          <el-row style="margin-top: 25px">
            <el-col
              :span="6"
              v-if="List.dimension === 'KW' || List.dimension === ''"
            >
              <div class="grid-content">
                <div class="divLable">库区</div>
                <el-cascader :props="props" v-model="areaIdArr"></el-cascader>
              </div>
            </el-col>
            <el-col
              :span="6"
              v-if="List.dimension === 'HP' || List.dimension === ''"
            >
              <div class="grid-content">
                <div class="divLable">货主</div>
                <el-select
                  v-model="List.ownerId"
                  slot="prepend"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="(i, index) in getownerIdList"
                    :key="index"
                    :label="i.name"
                    :value="i.id"
                  ></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <div class="divLable">计划时间</div>

                <!-- <span class="demonstration">设置默认时间</span> -->
                <el-date-picker
                  v-model="List.planCheckTime"
                  type="datetime"
                  placeholder="选择日期时间"
                  format="yyyy-MM-dd HH:mm:ss"
                  value-format="yyyy-MM-dd HH:mm:ss"
                >
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="body1" v-else>
        <el-card>
          <el-row>
            <el-button
              type="warning"
              round
              style="width: 150px"
              @click="Addcheckpages"
              >添加盘点清单</el-button
            >
            <el-button round plain type="info" style="width: 150px"
              >删除盘点清单</el-button
            >
          </el-row>
          <el-divider></el-divider>
          <el-row
            type="flex"
            justify-content="center"
            align-items="center"
            style="height: 320px"
          >
            <el-image
              style="width: 100px; height: 100px"
              :src="`http://www-wms-java.itheima.net/img/empty.4300e933.png`"
              fit="cover"
            ></el-image>
          </el-row>
        </el-card>
      </div>
      <el-divider></el-divider>
      <div class="footer" style="text-align: center; margin-top: 15px">
        <el-button plain round type="info" style="width: 150px" @click="goback"
          >返回</el-button
        >
        <el-button round type="warning" style="width: 150px" @click="next">{{
          !isShow ? '提交' : '下一步'
        }}</el-button>
      </div>
    </div>
    <!-- 添加盘点清单弹框 -->
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      999
    </el-dialog>
  </div>
</template>

<script>
import {
  getPD,
  getnextCheck,
  getnextCheckout,
  getcheckList,
  Addcheckpage,
  getownerId,
  getwarehouse,
  getareaId,
  getareaIds
} from '@/Api/KNareahouse'
import EmployeeEnum from '@/Api/constant/knfammter'

export default {
  name: 'KNFirstck',
  data() {
    return {
      EmployeeEnum: EmployeeEnum,
      active: 0,
      getownerIdList: [],
      getwarehouseList: [],
      areaIdArr: '',
      isShow: true,
      dialogTableVisible: false,
      List: {
        areaId: '',
        code: '',
        dimension: '',
        id: '',
        ownerId: null,
        planCheckTime: '',
        reason: '',
        status: 1,
        type: '',
        warehouseId: ''
      },
      status2: '',
      props: {
        lazy: true,
        // emitPath: false,
        // checkStrictly: false,
        lazyLoad(node, resolve) {
          const { level } = node
          //   this.List.warehouseId = node.value
          if (level === 0) {
            setTimeout(async () => {
              const res = await getareaId({ status: 1 })
              //   console.log(res.data.data)
              const nodes = res.data.data.map((item) => ({
                value: item.id,
                label: item.name,
                leaf: level >= 1
              }))
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes)
            })
          } else {
            setTimeout(async () => {
              const res = await getareaIds({
                warehouseId: node.value
              })
              const nodes = res.data.data.map((item) => ({
                value: item.id,
                label: item.name,
                leaf: level >= 1
              }))
              resolve(nodes)
            })
          }
        }
      }
    }
  },
  created() {
    this.getCode()
    this.getownerIds()
    // this.getwarehouse()
  },
  methods: {
    async Addcheckpages() {
      this.dialogTableVisible = true
      const res = await Addcheckpage({
        areaId: this.List.areaId,
        locationCode: '',
        locationName: '',
        current: 1,
        size: 10,
        needFree: 1
      })
      console.log(res)
    //   --------------------------------------------------
    },
    //   下一步
    async next() {
      if (
        this.List.code &&
        this.List.dimension &&
        this.List.reason &&
        this.List.planCheckTime &&
        this.List.type
      ) {
        this.isShow = false
        if (this.active++ > 2) this.active = 0
        this.List.warehouseId = this.areaIdArr[0]
        this.List.areaId = this.areaIdArr[1]
        const res = await getnextCheck(this.List)
        this.List.id = res.data.data.id
        const ress = await getcheckList({
          masterId: this.List.id,
          current: 1,
          size: 10
        })
        console.log(ress)
        this.$message.success('恭喜你！提交成功')
      } else {
        this.$message.error('请将盘点单信息填写完整')
      }
    },
    // 返回
    async goback() {
      if (this.isShow) {
        this.$router.back()
      } else {
        this.isShow = true
        const res = await getnextCheckout(this.List)
        console.log(res)
        this.List = res.data.data
      }
    },
    // 货主
    async getownerIds() {
      const res = await getownerId()
      // console.log(res)
      res.data.data.forEach((item) => {
        this.getownerIdList.push({
          id: item.id,
          name: item.name
        })
      })
    },
    // 获取PD
    async getCode() {
      const res = await getPD()
      this.List.code = res.data.data
    },
    // 列表初始化
    async getwarehouse() {
      const res = await getwarehouse({
        code: this.List.code,
        current: this.List.current,
        size: this.List.size
      })
      // console.log(res)
      this.getwarehouseList = res.data.data.records
      this.total = res.data.data.total
      // console.log(this.total)
      // console.log(this.getwarehouseList)
    },
    close() {
      this.List = {
        code: '',
        status: '',
        type: '',
        ownerId: '',
        areaId: ''
      }
    }

    // 启用停用请求爆红
  }
}
</script>

<style scoped lang="less">
.divWarehouse {
  .Head {
    // height: 127px;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: rgba(144, 142, 142, 0.17) 0px 0px 6px 0px;
    padding: 30px;
    margin-bottom: 20px;
    .grid-content {
      margin-right: 26px;
      .divLable {
        margin-bottom: 10px;
        height: 18px;
      }
      .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;
      }
      /deep/.el-input__inner {
        border: unset;
        background-color: #f8f5f5;
      }
      .el-select {
        width: 100%;
      }
    }
    .grid-btn {
      margin-top: 30px;
      margin-left: 100px;
      .el-button {
        color: black;
        border: unset;
      }
    }
  }
  .divContent {
    // height: 340px;
    background: rgb(255, 255, 255);
    border-radius: 12px;
    box-shadow: rgba(144, 142, 142, 0.17) 0px 0px 6px 0px;
    .btn {
      margin: 10px 0 20px 30px;
    }
    .block {
      margin: 0 280px;
    }
  }
}
</style>
