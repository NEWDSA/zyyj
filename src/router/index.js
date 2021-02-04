import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录页
import Login from '@/views/m_login/index.vue'
import Layout from '@/components/Layout'
import PerfDataBorad from '@/views/TransData/PerfDataBorad'
import main from '@/views/index'
Vue.use(VueRouter)

//固定展示的路由
export const fixedRouter = [
  {
    path: '',
    name: 'login',
    component: Login,
    hidden: true
  },
  {
    path:'',
    component:Layout, //整体页面布局的布局(包含左侧菜单跟住内容区域)
    children:[{
      path:'main',
      component:main,
      meta:{
        title:'首页',//菜单名称
        roles:['user','admin'], //当前菜单那些角色可以看到
        icon:'el-icon-info' //菜单左侧的icon图标
      }
    }]
  }
]

// 需要权限判断展示的路由
export const permissionRouter=[{
  path:'/TransData',
  component:Layout,
  name:'TransData',
  meta:{
    title:'成交数据',
    roles:['admin','user']
  },
  children:[{
    path:'/TransData/PerfDataBorad',
    name:'PerfDataBorad',
    component:PerfDataBorad,
    meta:{
      title:'业绩数据看板',
      roles:['admin']
    }
  }]
}]

export default new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes:fixedRouter
})
