import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //仓库
  state: {
    //存储token
    Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):''
  },
  //修改方法
  mutations: {
    //修改token,并将token存入localStorage
    storeLogin(state,user){
      state.Authorization=user.Authorization
      localStorage.setItem('Authorization',user.Authorization)
    }
  },
  actions: {
  },
  modules: {
  }
})
