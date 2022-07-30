<template>
  <div class="divLogin">
    <div class="divContent">
      <div class="Left">
        <div class="Title">
          <img
            src="http://www-wms-java.itheima.net/img/title.ef005a7a.png"
            alt=""
          />
        </div>
        <div class="form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="mobile" label-width="">
              <div class="Img">
                <i class="el-icon-mobile"></i>
              </div>
              <div class="count">
                <el-input v-model="ruleForm.mobile"></el-input>
              </div>
            </el-form-item>
            <el-form-item prop="pass">
              <div class="Img">
                <i class="el-icon-lock"></i>
              </div>
              <div class="count">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </div>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="Right"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const mobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入账户'))
      } else if (value !== 'admin') {
        return callback(new Error('账号错误，请重新输入'))
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value !== '111111') {
        return callback(new Error('密码错误，请重新输入'))
      }
    }
    return {
      checked: false,
      ruleForm: {
        pass: '111111',
        mobile: 'admin'
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        mobile: [{ validator: mobile, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$router.push('/home/work')
    }
  }
}
</script>

<style scoped lang="less">
.divLogin {
  .divContent {
    width: 958px;
    height: 516px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px rgb(93 93 93 / 33%);
    background-color: #fff;
    border-radius: 40px;
    .Left {
      float: left;
      width: 398px;
      height: 516px;
      //   background: rgb(232, 157, 157);
      border-radius: 34px 0 0 34px;
      margin: 0 auto;
      .Img {
        float: left;
        width: 50px;
        height: 50px;
        background: #eae7e7;
        border-radius: 8px 0 0 8px;
        .el-icon-mobile,
        .el-icon-lock {
          width: 25px;
          height: 24px;
          margin: 12px 13px;
          font-size: 20px;
        }
      }
      .count {
        float: left;
        /deep/.el-input__inner {
          width: 230px;
          height: 50px;
          background-color: #f8f5f5;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }
      .Title {
        margin-left: 124px;
        margin-top: 72px;
        img {
          width: 150px;
          height: 64px;
        }
      }
      .el-button {
        width: 280px;
        height: 50px;
        background: #ffb200;
        border-radius: 8px;
        box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: #332929;
        line-height: 22px;
      }
    }
    .Right {
      float: right;
      background-image: url(http://www-wms-java.itheima.net/img/contentBg.1321d126.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      width: 560px;
      height: 516px;
    }
  }
}
</style>
