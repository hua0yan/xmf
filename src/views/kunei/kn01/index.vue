<template>
  <div class="divWarehouse">
    <div class="Head">
      <el-row>
        <el-col :span="6">
          <div class="grid-content">
            <div class="divLable">盘点单号</div>
            <el-input v-model="code" placeholder="请输入"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="divLable">盘点状态</div>
            <el-select v-model="Status" slot="prepend" placeholder="请选择">
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

            <el-select v-model="type" slot="prepend" placeholder="请选择">
              <el-option label="随机盘点" value="SJPD"></el-option>
              <el-option label="计划盘点" value="JHPD"></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-btn">
            <el-button type="warning" round @click="getwarehouse"
              >搜索</el-button
            >
            <el-button round style="background-color: #f8f5f5">重置</el-button>
          </div>
        </el-col>
      </el-row>
      <div class="b" style="margin-top: 25px">
        <el-row>
          <el-col :span="6">
            <div class="grid-content">
              <div class="divLable">货主</div>
              <el-select v-model="ownerId" slot="prepend" placeholder="请选择">
                <el-option
                  v-for="i, index in getownerIdList"
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
              <el-select v-model="areaId" slot="prepend" placeholder="请选择">
                <el-option label="全部" value=""></el-option>
                <el-option label="停用" value="0"></el-option>
                <el-option label="启用" value="1"></el-option>
              </el-select>
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
          @click="$router.push('/home/kqaddhouse')"
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
            <el-table-column prop="warehouseName" label="所属仓库" width="120">
            </el-table-column>
            <el-table-column prop="code" label="库区编号" width="120">
            </el-table-column>
            <el-table-column prop="name" label="库区名称" width="120">
            </el-table-column>
            <el-table-column
              prop="temperatureType"
              label="湿度类型"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="bearingType"
              :formatter="formatterBearing"
              label="承重类型"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="useType"
              :formatter="formatterCache"
              label="用途属性"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              :formatter="formatterStatus"
              label="库区状态"
              width="120"
            >
            </el-table-column>
            <el-table-column prop="personName" label="负责人" width="120">
            </el-table-column>
            <el-table-column prop="phone" label="联系电话" width="120">
            </el-table-column>
            <el-table-column prop="createTime" label="更新时间" width="180">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="240">
              <template slot-scope="scope">
                <el-button
                  @click="editHouse(scope.row)"
                  type="text"
                  size="small"
                  >编辑</el-button
                >
                <el-button
                  type="text"
                  size="small"
                  @click="ClickStatus(scope.row)"
                  >查看详情</el-button
                >
                <el-button type="text" size="small" @click="deleteLike"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              :current-page="page"
              :page-sizes="[2, 3, 5, 6]"
              :page-size="2"
              layout="total, sizes, prev, pager, next, jumper"
              :total="+total"
              @current-change="currentChange"
            >
            </el-pagination>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog
      :title="`确认`"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>确认要**吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="clicksta">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getownerId, getwarehouse, setstatus } from '@/Api/KNareahouse'
import EmployeeEnum from '@/Api/constant/knfammter'
export default {
  name: 'KNFirstck',
  data() {
    return {
      EmployeeEnum: EmployeeEnum,
      getownerIdList: [],
      getwarehouseList: [],
      code: '',
      Status: '',
      type: '',
      ownerId: '',
      areaId: '',
      dialogVisible: false,
      total: 0,
      page: 1,
      status2: '',
      id: ''
    }
  },
  created() {
    this.getownerIds()
    this.getwarehouse()
  },
  methods: {
    async getownerIds() {
      const res = await getownerId()
      console.log(res)
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
    currentChange(page) {
      this.page = page
      this.getwarehouse()
    },
    async getwarehouse() {
      const res = await getwarehouse({
        code: this.code,
        status: this.Status,
        type: this.type,
        ownerId: this.ownerId,
        areaId: '',
        current: this.page,
        size: 5
      })
      // console.log(res)
      this.getwarehouseList = res.data.data.records
      this.total = res.data.data.total
      // console.log(this.total)
      // console.log(this.getwarehouseList)
    },
    // 格式化数据
    fammterType(a, b, cellValue) {
      const useType = EmployeeEnum.fammterType.find(
        (item) => item.type === cellValue
      )?.value
      return useType || '未知'
    },
    formatterBearing(a, b, cellValue) {
      const useType = EmployeeEnum.bearingType.find(
        (item) => item.type === cellValue
      )?.value
      return useType || '未知'
    },
    formatterCache(a, b, cellValue) {
      const useType = EmployeeEnum.cache.find(
        (item) => item.type === cellValue
      )?.value
      return useType || '未知'
    },
    formatterStatus(a, b, cellValue) {
      const useType = EmployeeEnum.disabled.find(
        (item) => item.type === cellValue
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
      this.dialogVisible = true
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
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`)
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`)
    // }
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
