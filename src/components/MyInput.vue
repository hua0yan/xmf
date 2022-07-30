<template>
  <div class="grid-content">
    <div class="divLable">{{ title }}</div>
    <el-input v-model="input" placeholder="请输入"></el-input>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data() {
    return {
      input: ''
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
.grid-content {
  margin-right: 20px;
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
}
</style>
