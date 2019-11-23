import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tabbar: 1,
  username: 123456789,
  password: 987654321,
  order_tabbar: 1,
  login: false,
};

const mutations = {
  // 修改公共页面底部导航
  setTabbar(state, data) {
    sessionStorage.setItem('tabbar', data)
    state.tabbar = data
  },

  //注册账号
  setUserName(state, data) {
    sessionStorage.setItem('username', data)
    state.username = data
  },

  //注册密码
  setPassWord(state, data) {
    sessionStorage.setItem('password', data)
    state.password = data
  },

  // 修改订单页面头部导航
  setOrderTabbar(state, data) {
    sessionStorage.setItem('order_tabbar', data)
    state.order_tabbar = data
  },

}



export default new Vuex.Store({
  state,
  mutations
})