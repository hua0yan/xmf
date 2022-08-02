<template>
  <div>
    <el-card>
      <!-- 第一个 -->
      <el-collapse v-model="activeNames1" @change="handleChange">
        <el-collapse-item title="基础信息" name="1">
          <el-steps
            :space="200"
            :active="2"
            finish-status="success"
            align-center
          >
            <el-step
              v-for="(item, index) in EmployeeEnum.fammterType"
              :key="index"
              :title="item.value"
              :description="item.time"
            ></el-step>
          </el-steps>
          <el-card
            shadow="never"
            style="margin-top: 50px; background-color: #fdfcf9"
          >
            <el-descriptions
              class="margin-top"
              :column="4"
              direction="vertical"
              style="background-color: fdfcf9"
            >
              <el-descriptions-item label="盘点单号">{{
                getLooksList.code
              }}</el-descriptions-item>
              <el-descriptions-item label="创建时间">{{
                getLooksList.createTime
              }}</el-descriptions-item>
              <el-descriptions-item label="计划盘点时间">{{
                getLooksList.planCheckTime
              }}</el-descriptions-item>
              <el-descriptions-item label="盘点原因">{{
                getLooksList.reason
              }}</el-descriptions-item>
              <el-descriptions-item label="盘点维度"
                >{{ getLooksList.dimension }}
              </el-descriptions-item>
              <el-descriptions-item label="盘点类型">{{
                getLooksList.type
              }}</el-descriptions-item>
              <el-descriptions-item label="盘点仓库">{{
                getLooksList.warehouseName
              }}</el-descriptions-item>
              <el-descriptions-item label="盘点库区">{{
                getLooksList.areaName
              }}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 第二个 -->
    <!-- <el-card margin-top="30px">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="盘点清单" name="1">
          <div class="table">
            <el-table
              :data="records"
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
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column type="index" label="序号" width="150">
              </el-table-column>
              <el-table-column prop="locationName" label="仓库名称" width="120">
              </el-table-column>
              <el-table-column prop="areaName" label="库区名称" width="120">
              </el-table-column>
              <el-table-column prop="locationCode" label="库位编号" width="120">
              </el-table-column>
              <el-table-column prop="locationName" label="库位名称" width="180">
              </el-table-column>
              <el-table-column prop="goodsName" label="货品名称" width="180">
              </el-table-column>
              <el-table-column prop="goodsCode" label="货品编号" width="120">
              </el-table-column>
              <el-table-column prop="goodsBarCode" label="货品条码" width="120">
              </el-table-column>
              <el-table-column prop="ownerName" label="货主名称" width="120">
              </el-table-column>
              <el-table-column prop="free" label="库存数量" width="120">
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
        </el-collapse-item>
      </el-collapse>
    </el-card> -->
  </div>
</template>

<script>
import { getLooks, getcheckList } from '@/Api/KNareahouse'
import EmployeeEnum from '@/Api/constant/knfammter'

export default {
  name: 'Looks',
  data() {
    return {
      EmployeeEnum: EmployeeEnum,
      activeNames1: ['1'],
      activeNames: ['3'],
      checkTaskEntity1: null,
      checkTaskEntity2: null,
      id1List: null,
      id2List: null,
      timeArray: [],
      getLooksList: {},
      List: {
        current: 1,
        size: 10,
        masterId: '',
        status: 1
      }
    }
  },
  created() {
    this.getLooks()
  },
  methods: {
    // 分页
    currentChange(page) {
      this.List.current = page
    },
    handleSizeChange(val) {
      this.List.size = val
    },
    // 所有数据
    async getLooks() {
      const res = await getLooks(this.$route.query.id)
      console.log(res)
      this.List.masterId = res.data.data.id
      this.checkTaskEntity1 = res.data.data.checkTaskEntity1
      this.checkTaskEntity2 = res.data.data.checkTaskEntity2
      this.id1List = res.data.data.id1List
      this.id2List = res.data.data.id2List
      this.timeArray = res.data.data.timeArray
      this.getLooksList = res.data.data
      this.EmployeeEnum.fammterType = this.EmployeeEnum.fammterType.splice(
        this.EmployeeEnum.fammterType.length - this.timeArray.length,
        this.timeArray.length
      )
      this.EmployeeEnum.fammterType.forEach((item, index) => {
        item.time = this.timeArray[index]
        // console.log(item)
      })
      console.log(this.EmployeeEnum.fammterType)
      this.getcheckList()
    },
    // 表格
    async getcheckList() {
      //   console.log(this.List)
      const res = await getcheckList(this.List)
      console.log(res)
    },
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style></style>
