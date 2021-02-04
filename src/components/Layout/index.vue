<template>
  <div class="app_wapper">
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside class="slider_container">
        <el-menu
          class="sub_meuns_wapper"
          mode="vertical"
          unique-opened
          :default-active="$route.path"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <!-- 菜单组件 -->
          <side-Meuns :routes="getRoutes"></side-Meuns>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-container class="app_content">
        <el-header style="text-align: right; font-size: 12px">
          <Header>
            <i class="el-icon-setting" style="line-height: 70px;float-right:70px;"></i>
            <el-button @click="outSystem" size="mini" plain type="primary"
              >退出</el-button
            >
          </Header>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- 二级路由跳转 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// 左侧菜单组件
import sideMeuns from "@/components/SideMenus";
import Header from "@/components/Header"; //引入头部
import { permissionRouter } from "@/router";
export default {
  computed: {
    getRoutes() {
      return global.antRouter;
    },
  },
  components: {
    sideMeuns,
    Header,
  },
  data() {
    return {
      userRole: "Topest",
    };
  },
  methods: {
    outSystem() {
      //退出系统
      localStorage.setItem("userRole", "unload");
      // 跳转到登录页的时候顺便刷新
      window.location.href = window.location.origin + window.location.pathname;
    },
  },
  mounted() {
    // console.log("菜单的展开跟路由有关系，查看elementui--el-menu  的default-active 属性")
    // console.log(this.$route.path)
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*wapper*/
.app_wapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.app_content {
  min-height: 500px;
  margin-left: 180px;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 70px !important;
}

.app_wapper .el-aside,
.slider_container .el-menu {
  color: #333;
  transition: width 0.28s;
  width: 180px !important;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  background-color: rgb(48, 65, 86);
}
.el-main {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 20px;
    height: calc( 100vh - 90px)  !important;
}
</style>
