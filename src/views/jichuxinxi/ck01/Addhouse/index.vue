<template>
  <div class="divWarehouseAdd">
    <el-card>
      <el-form :model="ruleForm" :rules="rules" ref="form">
        <el-row type="flex">
          <el-col>
            <el-form-item label="仓库编码" style="margin-right: 20px">
              <el-input disabled v-model="ruleForm.code"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="仓库名称"
              prop="name"
              style="margin-right: 20px"
            >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item
              label="仓库类型"
              prop="type"
              style="margin-right: 20px"
            >
              <el-select
                v-model="ruleForm.type"
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
        <el-row>
          <el-col :span="16">
            <el-form-item prop="areaCode" label="省/市/区">
              <el-cascader
                style="width: 97.5%"
                class="widthSmall"
                size="large"
                :options="options"
                v-model="ruleForm.areaCode"
                @change="addressChange"
              >
              </el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="详细地址">
              <el-input
                style="width: 97.5%"
                v-model="ruleForm.dizhi"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="仓库状态" prop="status">
              <el-row>
                <el-col>
                  <el-radio v-model="ruleForm.status" label="1">启用</el-radio>
                  <el-radio v-model="ruleForm.status" label="0">停用</el-radio>
                </el-col>
                <el-col></el-col>
              </el-row>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col>
            <el-form-item label="仓库面积" style="margin-right: 20px">
              <el-input type="number" v-model.number="ruleForm.mm"></el-input>
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
            <el-form-item label="联系电话" style="margin-right: 20px">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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
import { regionData, CodeToText } from 'element-china-area-data'
import { addHouse, getCode, editHouse } from '@/Api/CKwarehouse'
export default {
  name: 'AddHouse',
  // data中定义参数
  data() {
    return {
      // v-model绑定input才能输入
      ruleForm: {
        code: '',
        name: '',
        type: '',
        areaCode: '',
        dizhi: '',
        status: '1',
        mm: '',
        personName: '',
        phone: '',
        province: '',
        city: '',
        area: ''
      },
      // 表单校验规则
      rules: {
        name: [
          {
            required: true,
            message: '请输入仓库名称'
          }
        ],
        type: [
          {
            required: true,
            message: '必选'
          }
        ],
        areaCode: [
          {
            required: true,
            message: '必选'
          }
        ],
        status: [
          {
            required: true,
            message: '必选'
          }
        ],
        personName: [
          {
            required: true,
            message: '请输入负责人'
          }
        ]
      },
      // 省市区
      form: {},
      options: regionData, // 省市区数据
      areaCode: [] // 选中的地区
    }
  },
  created() {
    this.getCode()
    this.seteditHouse()
    // 初始化省市区
    this.areaCode = [
      this.form.provinceCode,
      this.form.cityCode,
      this.form.areaCode
    ]
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
      await addHouse({
        address: this.ruleForm.dizhi,
        area: this.ruleForm.areaCode[2],
        city: this.ruleForm.areaCode[1],
        code: this.ruleForm.code,
        location: '北京市/市辖区/西城区',
        name: this.ruleForm.name,
        personName: this.ruleForm.personName,
        phone: this.ruleForm.phone,
        province: this.ruleForm.areaCode[0],
        status: this.ruleForm.status,
        surface: this.ruleForm.mm,
        type: this.ruleForm.type
      })
      this.$message.success('新增仓库成功')
      this.$router.push('/home/1-1')
      // this.ruleForm = {}
    },
    addressChange(arr) {
      const _this = this
      // console.log(arr)
      // console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]])
      // console.log(
      //   CodeToText[arr[0]] + '/' + CodeToText[arr[1]] + '/' + CodeToText[arr[2]]
      // )
      this.ruleForm.location =
        CodeToText[arr[0]] + '/' + CodeToText[arr[1]] + '/' + CodeToText[arr[2]]
      _this.form.provinceCode = arr[0]
      _this.form.cityCode = arr[1]
      _this.form.areaCode = arr[2]
      console.log(this.ruleForm.location)
    }
  }
}
</script>

<style scoped lang="less"></style>
