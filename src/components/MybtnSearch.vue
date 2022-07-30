<template>
  <div class="grid-content">
    <el-button type="warning" round>搜索</el-button>
    <el-button round style="background-color: #f8f5f5">重置</el-button>
  </div>
</template>

<script>
export default {
  name: 'MybtnSearch'
}
</script>

<style scoped lang="less">
.grid-content {
  margin-top: 30px;
  margin-left: 100px;
  .el-button {
    color: black;
    border: unset;
  }
}
</style>
