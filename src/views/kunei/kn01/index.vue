<template>
  <div class="divWarehouse">
    <div class="Head">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div class="divLable">盘点单号</div>
            <el-input v-model="List.code" placeholder="请输入"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="divLable">盘点状态</div>
            <el-select
              v-model="List.status"
              slot="prepend"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in EmployeeEnum.fammterType"
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

            <el-select v-model="List.type" slot="prepend" placeholder="请选择">
              <el-option label="随机盘点" value="SJPD"></el-option>
              <el-option label="计划盘点" value="JHPD"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-btn">
            <el-button type="warning" round @click="getwarehouseLi"
              >搜索</el-button
            >
            <el-button round style="background-color: #f8f5f5" @click="close"
              >重置</el-button
            >
          </div>
        </el-col>
      </el-row>
      <div class="b" style="margin-top: 25px">
        <el-row>
          <el-col :span="6">
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
              <div class="divLable">盘点库区</div>
              <el-cascader :props="props" v-model="List.areaId"></el-cascader>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="divContent">
      <el-card shadow="always">
        <el-button
          type="success"
          round
          class="btn"
          @click="$router.push('/home/knaddhouse')"
          >新增盘点单</el-button
        >
        <el-button type="info" plain round>生成盘点任务</el-button>
        <div class="table">
          <el-table
            :data="getwarehouseList"
            border
            style="width: 100%"
            :header-cell-style="{
              background: '#f9f6ee',
              color: '#887e7e',
              'text-align': 'center'
            }"
            :row-style="{ height: '0' }"
            :cell-style="{ 'text-align': 'center' }"
          >
            <el-table-column type="index" label="序号" width="150">
            </el-table-column>
            <el-table-column prop="code" label="盘点单号" width="120">
            </el-table-column>
            <el-table-column prop="updateName" label="货主" width="120">
            </el-table-column>
            <el-table-column
              prop="status"
              :formatter="formatterStatus"
              label="盘点单状态"
              width="120"
            >
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="180">
            </el-table-column>
            <el-table-column prop="updateTime" label="计划盘点时间" width="180">
            </el-table-column>
            <el-table-column
              prop="reason"
              :formatter="formatterReason"
              label="盘点原因"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="dimension"
              :formatter="formatterDimension"
              label="盘点维度"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="type"
              :formatter="formatterType"
              label="盘点类型"
              width="120"
            >
            </el-table-column>
            <el-table-column prop="warehouseName" label="盘点仓库" width="120">
            </el-table-column>
            <el-table-column prop="areaName" label="盘点库区" width="180">
            </el-table-column>
            <el-table-column prop="createName" label="创建人" width="180">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="240">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.status === 1"
                  @click="editHouse(scope.row)"
                  type="text"
                  size="small"
                  >修改详情</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="ClickStatus(scope.row)"
                  >{{
                    scope.row.status === 1 ? '生成盘点任务' : '查看详情'
                  }}</el-button
                >
                <el-button
                  v-if="scope.row.status === 1"
                  type="text"
                  size="small"
                  @click="deleteLike"
                  >取消</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              :current-page="List.page"
              :page-sizes="[2, 3, 5, 6]"
              :page-size="2"
              layout="total, sizes, prev, pager, next, jumper"
              :total="+total"
              @current-change="currentChange"
              @size-change="handleSizeChange"
            >
            </el-pagination>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog
      :title="`盘点任务生成`"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-card style="background: #f9f9f9">
        <span>1个盘点任务生成失败！</span><br />
        <span>盘点任务生成失败原因如下</span><br />
        <span>PD000446未完成盘点单清单</span>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clicksta">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getownerId,
  getwarehouse,
  getareaId,
  getareaIds,
  setstatus
} from '@/Api/KNareahouse'
import EmployeeEnum from '@/Api/constant/knfammter'

export default {
  name: 'KNFirstck',
  data() {
    return {
      EmployeeEnum: EmployeeEnum,
      getownerIdList: [],
      getwarehouseList: [],
      List: {
        code: '',
        status: '',
        type: '',
        ownerId: '',
        areaId: '',
        current: 1,
        size: 5
      },
      dialogVisible: false,
      total: 0,
      status2: '',
      props: {
        lazy: true,
        emitPath: false,
        checkStrictly: false,
        lazyLoad(node, resolve) {
          const { level } = node
          if (level === 0) {
            setTimeout(async () => {
              const res = await getareaId({ status: 1 })
              // console.log(res.data.data)
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
    this.getownerIds()
    this.getwarehouse()
  },
  methods: {
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
    deleteLike() {
      this.$notify({
        title: '提示',
        message: ({ style: 'color: #757c83' }, '演示系统,不支持此操作')
      })
    },
    // 分页
    currentChange(page) {
      this.List.current = page
      this.getwarehouse()
    },
    handleSizeChange(val) {
      this.List.size = val
      this.getwarehouse()
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
    // 搜索列表
    async getwarehouseLi() {
      const List = {}
      for (const key in this.List) {
        // console.log(key)
        // console.log(this.List[key])
        if (this.List[key]) {
          List[key] = this.List[key]
        }
      }
      const res = await getwarehouse(List)
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
    },
    // 格式化数据
    formatterType(a, b, cellValue) {
      const useType = EmployeeEnum.type.find(
        (item) => item.status === cellValue
      )?.value
      return useType || '未知'
    },
    formatterDimension(a, b, cellValue) {
      const useType = EmployeeEnum.dimension.find(
        (item) => item.status === cellValue
      )?.value
      return useType || '未知'
    },
    formatterReason(a, b, cellValue) {
      const useType = EmployeeEnum.reason.find(
        (item) => item.status === cellValue
      )?.value
      return useType || '未知'
    },
    formatterStatus(a, b, cellValue) {
      const useType = EmployeeEnum.fammterType.find(
        (item) => item.status === cellValue
      )?.value
      return useType || '未知'
    },

    async editHouse(row) {
      console.log(row)
      this.$router.push({
        path: '/home/kqaddhouse',
        query: {
          id: row.id
        }
      })
      // await editHouse()
    },
    // 启用停用请求爆红
    ClickStatus(row) {
      console.log(row)
      if (row.status === 1) {
        this.dialogVisible = true
      } else {
        this.$router.push({
          path: '/home/looks',
          query: {
            id: row.id
          }
        })
      }
    },
    async clicksta() {
      await setstatus({
        id: this.id,
        status: this.status2 === 1 ? 0 : 1
      })
      this.$message.success(`${this.status === 1 ? '停用' : '启用'}成功`)
      this.dialogVisible = false
      this.getwarehouse()
    }
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
