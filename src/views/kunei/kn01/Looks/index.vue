<template>
  <div>
    <!--  第一个 -->
    <el-card style="margin-bottom: 30px">
      <el-collapse v-model="activeNames1" @change="handleChange">
        <el-collapse-item title="基础信息" name="1">
          <el-row type="flex" justify="center">
            <el-steps
              :space="200"
              :active="active"
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
          </el-row>
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
    <div class="two" v-if="+total" style="margin-bottom: 30px">
      <el-card>
        <el-collapse v-model="activeNames2">
          <el-collapse-item title="盘点清单" name="1">
            <div class="table">
              <el-table
                :data="gettableList"
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
                <el-table-column
                  prop="warehouseName"
                  label="仓库名称"
                  width="120"
                >
                </el-table-column>
                <el-table-column prop="areaName" label="库区名称" width="120">
                </el-table-column>
                <el-table-column
                  prop="locationName"
                  label="库位名称"
                  width="120"
                >
                </el-table-column>
                <el-table-column prop="goodsName" label="货品名称" width="180">
                </el-table-column>
                <el-table-column prop="goodsCode" label="货品编号" width="120">
                </el-table-column>
                <el-table-column
                  prop="goodsBarCode"
                  label="货品条码"
                  width="120"
                >
                </el-table-column>
                <el-table-column prop="ownerName" label="货主名称" width="120">
                </el-table-column>
                <el-table-column prop="stockNum" label="库存数量" width="120">
                </el-table-column>
              </el-table>
              <div class="block">
                <el-row type="flex" justify="center">
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
                </el-row>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
    <!-- 第三个 -->
    <el-card style="margin-bottom: 30px">
      <el-collapse v-model="activeNames3" @change="handleChange">
        <el-collapse-item title="基础信息" name="1">
          <el-card shadow="never" style="background-color: #fdfcf9">
            <div>
              <el-button
                type="warning"
                plain
                style="color: black; border-radius: unset; margin-bottom: 15px"
                >一盘</el-button
              >
              <el-descriptions
                v-if="checkTaskEntity1"
                class="margin-top"
                :column="4"
                direction="vertical"
                style="background-color: fdfcf9"
              >
                <el-descriptions-item label="任务编号">{{
                  checkTaskEntity1.code
                }}</el-descriptions-item>
                <el-descriptions-item label="盘点次数">{{
                  checkTaskEntity1.checkNum
                }}</el-descriptions-item>
                <el-descriptions-item label="任务状态">{{
                  checkTaskEntity1.type
                }}</el-descriptions-item>
                <el-descriptions-item label="开始时间">{{
                  checkTaskEntity1.createTime
                }}</el-descriptions-item>
                <el-descriptions-item label="完成时间"
                  >{{ checkTaskEntity1.updateTime }}
                </el-descriptions-item>
                <el-descriptions-item label="盘点人">{{
                  checkTaskEntity1.personName
                }}</el-descriptions-item>
                <el-descriptions-item label="盘点数量">{{
                  checkTaskEntity1.checkTotal
                }}</el-descriptions-item>
                <el-descriptions-item label="损益合计">{{
                  checkTaskEntity1.stockTotal
                }}</el-descriptions-item>
              </el-descriptions>

              <div class="table" v-if="id1List">
                <el-table
                  :data="id1List"
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
                  <el-table-column type="index" label="损益单号" width="150">
                  </el-table-column>
                  <el-table-column prop="code" label="仓库名称" width="120">
                  </el-table-column>
                  <el-table-column
                    prop="warehouseName"
                    label="仓库名称"
                    width="120"
                  >
                  </el-table-column>
                  <el-table-column prop="areaName" label="库区名称" width="120">
                  </el-table-column>
                  <el-table-column
                    prop="locationName"
                    label="库位名称"
                    width="180"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="ownerName"
                    label="货主名称"
                    width="180"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="goodsName"
                    label="货品名称"
                    width="120"
                  >
                  </el-table-column>
                  <el-table-column prop="idNum" label="损益数量" width="120">
                  </el-table-column>
                  <el-table-column
                    prop="idMoney"
                    label="损益金额（元）"
                    width="120"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="updateTime"
                    label="处理时间"
                    width="120"
                  >
                  </el-table-column>
                  <el-table-column prop="remark" label="损益单状态" width="120">
                  </el-table-column>
                </el-table>
                <div class="block" style="padding: 5px">
                  <el-row type="flex" justify="center">
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
                  </el-row>
                </div>
              </div>
            </div>
            <div style="margin-top: 30px">
              <!-- --------------------------------------------------- -->
              <el-button
                type="warning"
                plain
                style="color: black; border-radius: unset; margin-bottom: 15px"
                >复盘</el-button
              >
              <el-card shadow="never" style="background-color: #fdfcf9">
                <el-descriptions
                  v-if="checkTaskEntity2"
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

                <div class="table" v-if="id2List">
                  <el-table
                    :data="gettableList"
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
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column type="index" label="序号" width="150">
                    </el-table-column>
                    <el-table-column
                      prop="locationName"
                      label="仓库名称"
                      width="120"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="areaName"
                      label="库区名称"
                      width="120"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="locationCode"
                      label="库位编号"
                      width="120"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="locationName"
                      label="库位名称"
                      width="180"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="goodsName"
                      label="货品名称"
                      width="180"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="goodsCode"
                      label="货品编号"
                      width="120"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="goodsBarCode"
                      label="货品条码"
                      width="120"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="ownerName"
                      label="货主名称"
                      width="120"
                    >
                    </el-table-column>
                    <el-table-column prop="free" label="库存数量" width="120">
                    </el-table-column>
                  </el-table>
                  <div class="block" style="padding: 5px">
                    <el-row type="flex" justify="center">
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
                    </el-row>
                  </div>
                </div>
              </el-card>
            </div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </el-card>
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
      activeNames2: ['2'],
      activeNames3: ['3'],
      checkTaskEntity1: null,
      checkTaskEntity2: null,
      id1List: null,
      id2List: null,
      timeArray: [],
      getLooksList: {},
      gettableList: [],
      total: 0,
      active: 0,
      List: {
        current: 1,
        size: 10,
        masterId: '',
        status: 2
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
      this.active = res.data.data.status
      this.getLooksList = res.data.data
      if (this.active === 6) {
        this.EmployeeEnum.fammterType = this.EmployeeEnum.fammterType.splice(
          this.EmployeeEnum.fammterType.length - this.timeArray.length,
          this.timeArray.length
        )
        this.EmployeeEnum.fammterType[0].value = '新建'
      }
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
      this.gettableList = res.data.data.records
      this.total = res.data.data.total
    },
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="less"></style>
