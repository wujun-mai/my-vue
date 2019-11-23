import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vant from 'vant'
import store from '@/vuex/store'


//引用vant组件中的框架内容
import 'vant/lib/index.css';


Vue.config.productionTip = false


//将引用的组件暴露全局 使各组件能直接引用
Vue.use(axios)
Vue.use(Vant)

//将各组件挂载到实例APP上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import Router from 'vue-router'



router.beforeEach((to, from, next) => {
  const web = to.fullPath
  if (to.meta.needLogin) {
    //页面是否登录     
    if (sessionStorage.getItem("login")) {
      //本地存储中是否有login
      next(); //表示已经登录
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      alert('检测到未登录，前往登录')
      next({
        //跳转到登录页面
        name: "/load",
        query: { 'redirect': web },

      });
    }
  } else {
    //表示不需要登录
    next(); //继续往后走
  }
});




const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}