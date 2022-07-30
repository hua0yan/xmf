<template>
  <div class="home">
    <!-- <el-container> -->
    <el-aside width="200px">
      <div class="sidebar-logo-container">
        <img
          src="http://www-wms-java.itheima.net/img/logo@2x.2c4f2c76.png"
          alt=""
        />
      </div>
      <el-row class="tac">
        <el-col :span="12">
          <h5>自定义颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#ffff"
            text-color="#8e888a"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>工作台</span>
              </template>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>基础信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="$router.push('/home/1-1')">仓库管理</el-menu-item>
                <el-menu-item index="1-2" @click="$router.push('/home/1-2')">库区管理</el-menu-item>
                <el-menu-item index="1-3">库位管理</el-menu-item>
                <el-menu-item index="1-4">库位视图</el-menu-item>
                <el-menu-item index="1-5">货品管理</el-menu-item>
                <el-menu-item index="1-6">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                <span>商务管理</span>
              </template>
              <el-menu-item-group>
                <el-timeline>
                  <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                  >
                    {{ activity.content }}
                  </el-timeline-item>
                </el-timeline>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-house"></i>
                <span>库内管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-sell"></i>
                <span>入库管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-truck"></i>
                <span>出库管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <!-- 右边头部 -->
    <el-header>
      <el-button plain
        >工作台<i class="el-icon-close el-icon--right"></i
      ></el-button>
      <el-button plain>盘点单</el-button>
      <el-button plain
        >朴素按钮<i class="el-icon-close el-icon--right"></i
      ></el-button>
    </el-header>
    <!-- </el-container> -->
    <!-- 主体部分 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          content: '库区管理',
          size: 'large'
        },
        {
          content: '库区管理',
          color: '#ffb200'
        },
        {
          content: '库位管理',
          size: 'normal '
        },
        {
          content: '库位视图'
        },
        {
          content: '库位视图'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.home {
  position: relative;
  height: 100%;
  width: 100%;

  .el-header {
    margin-left: 208px;
    height: 64px;
    // width: 100%;
    background: #f5f1f1;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
    .el-button {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 36px;
      background: #fff;
      border-radius: 6px;
      line-height: 31px;
      color: #b5abab;
      padding: 0 9px 0 13px;
      font-size: 13px;
      margin-left: 10px;
      margin-top: 13px;
      margin-bottom: 14px;
      text-align: center;
      font-weight: 400;
      font-family: PingFangSC, PingFangSC-Regular;
    }
  }

  .el-aside {
    transition: width 0.28s;
    width: 226px !important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background: #ffffff;
    border-right: #d9d0cf 2px solid;
    .el-menu {
      border-right: 0;
      padding: none;
    }
    .sidebar-logo-container {
      position: relative;
      width: 100%;
      height: 100px;
      line-height: 100px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 150px;
        height: 64px;
      }
    }
    .tac {
      width: 100%;
      height: 100%;
      .el-col {
        width: 100%;
        height: 100%;
        .el-submenu__title {
          background: #fff6e2 !important;
          border-radius: 0 100px 100px 0;
          color: #ffc12f !important;
          border-bottom-color: #ffb200;
        }
        /deep/.el-timeline-item__node {
          width: 6px;
          height: 6px;
        }

        /deep/.el-timeline-item__tail {
          height: 20px;
          border-left: 2px solid #d9d0cf;
          border-right: 0;
          position: absolute;
          top: 20px;
          margin-left: -4px;
        }
      }
    }
  }

  .main {
    // width: 100%;
    height: 100%;
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 217px;
    // position: relative;
    background-color: #aae9a0;
    overflow: hidden;
    padding: 20px 30px 30px 30px;
  }
}
</style>
