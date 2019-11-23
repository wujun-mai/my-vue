import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    // 打开页面默认是 进入 /  你都没有配置  / 的路由。 肯定没东西啊  localhost:8080  其实是 localhost:8080/ 

    //默认打开页面
    { path: '/', redirect: '/index' },

    {
      path: '/load',
      name: '/load',
      component: () => import('@/views/load.vue'),
      meta: {
        title: '登录'
      }
    },

    //order
    {
      path: '/order',
      name: '/order',
      component: () => import('./views/Order.vue'),

      children: [
        {
          path: '/',
          redirect: '/paid',
        },//进入订单 默认加载页面

        {
          path: '/paid',
          name: '/paid',
          component: () => import('./views/order/paid.vue'),
          meta: {
            title: '账单',
            needLogin: true//需要加校检判断的路由
          },
        },//到订单 已付款页面

        {
          path: '/unpaid',
          name: 'unpaid',
          component: () => import('./views/order/unpaid.vue'),
        },//到订单 未付款页面

        {
          path: '/Completed',
          name: '/Completed',
          component: () => import('./views/order//Completed.vue'),
        }//到订单 已完成页面
      ]
    },

    {
      path: '/invoice',
      name: '/invoice',
      component: () => import('./views/order/invoice.vue')
    },//订单 内容为空界面




    //mine
    {
      path: '/mine',
      name: '/mine',
      component: () => import(/* webpackChunkName: "about" */ './views/mine.vue'),
      meta: {
        title: '订单',
        needLogin: true //需要加校检判断的路由
      },

    },//我的  主页面

    {
      path: '/mine_massage',
      name: '/mine_massage',
      component: () => import('@/views/about/mine_massage.vue'),
    },//我的  我的消息栏页面




    //index
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/index.vue'),
      meta: {
        title: '主页'
      }
    },//首页 主页面
    {
      path: '/planting_first',
      name: '/planting_first',
      component: () => import('./views/index/planting/planting_first.vue')
    },//首页 轮播详情页面
    {
      path: '/navigation',
      name: '/navigation',
      component: () => import('./views/index/navigation.vue')
    },//首页 导航页面
    {
      path: '/hotal',
      name: '/hotal',
      component: () => import('./views/index/hotal.vue')
    },//首页 推荐酒店页面
    {
      path: '/scenic',
      name: '/scenic',
      component: () => import('./views/index/scenic.vue')
    },//首页 推荐景点
    {
      path: '/hot',
      name: '/hot',
      component: () => import('./views/index/hot.vue')
    },//首页 推荐火锅页面

    {
      path: '/member',
      name: '/member',
      component: () => import('./views/index/member.vue')
    },//会员优惠详情页面

    {
      path: '/city',
      name: '/city',
      component: () => import('./views/index/city.vue')
    },//导航中城市选择页面


  ]

})
