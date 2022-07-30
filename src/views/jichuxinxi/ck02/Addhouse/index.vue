<template>
  <div class="divWarehouseAdd">
    <el-card>
      <el-form :model="ruleForm" :rules="rules" ref="form">
        <el-row type="flex">
          <el-col>
            <el-form-item
              label="库区编号"
              style="margin-right: 20px"
              prop="code"
            >
              <el-input disabled v-model="ruleForm.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="所属仓库"
              prop="warehouseId"
              style="margin-right: 20px"
            >
              <el-select
                v-model="ruleForm.warehouseId"
                placeholder="请选择活动区域"
                style="width: 100%"
              >
                <el-option label="中转仓" value="ZZ"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="库区名称"
              prop="name"
              style="margin-right: 20px"
            >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="湿度类型"
              prop="temperatureType"
              style="margin-right: 20px"
            >
              <el-select
                v-model="ruleForm.temperatureType"
                placeholder="请选择活动区域"
                style="width: 100%"
              >
                <el-option label="中转仓" value="ZZ"></el-option>
                <el-option label="加工仓" value="JG"></el-option>
                <el-option label="储备仓" value="CB"></el-option>
                <el-option label="冷藏仓" value="LC"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row type="flex">
          <el-col>
            <el-form-item
              label="承重类型"
              prop="bearingType"
              style="margin-right: 20px"
            >
              <el-select
                v-model="ruleForm.bearingType"
                placeholder="请选择活动区域"
                style="width: 100%"
              >
                <el-option label="中转仓" value="ZZ"></el-option>
                <el-option label="加工仓" value="JG"></el-option>
                <el-option label="储备仓" value="CB"></el-option>
                <el-option label="冷藏仓" value="LC"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="用途属性"
              prop="useType"
              style="margin-right: 20px"
            >
              <el-select
                v-model="ruleForm.useType"
                placeholder="请选择活动区域"
                style="width: 100%"
              >
                <el-option label="中转仓" value="ZZ"></el-option>
                <el-option label="加工仓" value="JG"></el-option>
                <el-option label="储备仓" value="CB"></el-option>
                <el-option label="冷藏仓" value="LC"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="负责人"
              prop="personName"
              style="margin-right: 20px"
            >
              <el-input v-model="ruleForm.personName"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="联系电话"
              prop="phone"
              style="margin-right: 20px"
            >
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="库区状态" prop="status">
          <el-row>
            <el-col>
              <el-radio v-model="ruleForm.status" label="1">启用</el-radio>
              <el-radio v-model="ruleForm.status" label="0">停用</el-radio>
            </el-col>
            <el-col></el-col>
          </el-row>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item>
          <el-row type="flex" justify="center">
            <el-button round size="large" @click="$router.back()"
              >返回</el-button
            >
            <el-button type="warning" round size="large" @click="addHouses"
              >提交</el-button
            >
          </el-row>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { addHouse, getCode, editHouse } from '@/Api/KQwarehouse'
export default {
  name: 'AddHouse',
  // data中定义参数
  data() {
    return {
      // v-model绑定input才能输入
      ruleForm: {
        bearingType: 'QX',
        code: 'KQ001895',
        name: '库区名称',
        personName: '负责人',
        phone: '16665457896',
        status: 1,
        temperatureType: 'CW',
        useType: 'CKHCQ',
        warehouseId: '798976929725153313'
      },
      // 表单校验规则
      rules: {
        name: [
          {
            required: true,
            message: '此选项不能为空'
          }
        ],
        phone: [
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号',
            trigger: 'blur'
          }
        ],
        personName: [
          {
            required: true,
            message: '此选项不能为空'
          }
        ],
        warehouseId: [
          {
            required: true,
            message: '此选项不能为空'
          }
        ],
        status: [
          {
            required: true,
            message: '此选项不能为空'
          }
        ],
        temperatureType: [
          {
            required: true,
            message: '此选项不能为空'
          }
        ],
        useType: [
          {
            required: true,
            message: '此选项不能为空'
          }
        ]
      }
    }
  },
  created() {
    this.getCode()
    this.seteditHouse()
  },
  methods: {
    // 回流之后表单自动校验，报错
    async seteditHouse() {
      console.log(this.$route.query.id)
      if (this.$route.query.id) {
        const res = await editHouse(this.$route.query.id)
        // console.log(res)
        this.ruleForm = res.data.data
      }
    },
    async getCode() {
      const res = await getCode()
      console.log(res)
      this.ruleForm.code = res.data.data
    },
    // 新增房源
    async addHouses() {
      await this.$refs.form.validate()
      await addHouse()
      this.$message.success('新增仓库成功')
      this.$router.push('/home/1-1')
      // this.ruleForm = {}
    }
  }
}
</script>

<style scoped lang="less"></style>
