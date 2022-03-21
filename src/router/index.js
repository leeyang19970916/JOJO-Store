import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/front/Index'
import admin from '@/components/admin/Dashboard'

import ProductList from '@/components/admin/pages/ProductList'
import Coupons from '@/components/admin/pages/Coupons'
import AcousticGuitar from '@/components/front/pages/AcousticGuitar'
import ElectricGuitar from '@/components/front/pages/ElectricGuitar'
import Accessories from '@/components/front/pages/Accessories'
import ProductDetail from '@/components/front/pages/ProductDetail'
import FrontPages from '@/components/front/pages/FrontPages'
import CheckOut from '@/components/front/pages/CheckOut'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '*', //隨機輸入path
      redirect: '/' //都前往此路徑
    },
    // 前端畫面
    {
      path: '/',
 
      component: index,
      children: [
        {
          path: '',
          name: 'FrontPages',
          component: FrontPages,

        },
        {
          path: 'AG',
          name: 'AcousticGuitar',
          component: AcousticGuitar,

        },
        {
          path: 'EG',
          name: 'ElectricGuitar',
          component: ElectricGuitar,


        },
        {
          path: 'AC',
          name: 'Accessories',
          component: Accessories,

        },
        {
          path: 'detail/:productId',
          name: 'ProductDetail',
          component: ProductDetail,

        },
        {
          path: 'CheckOut',
          name: 'CheckOut',
          component: CheckOut,

        },



      ]
    },
    //後端起點
    {
      path: '/admin',
      name: 'admin',
      component: admin, //dashboard
      children: [{
          path: 'ProductList',
          name: 'ProductList',
          component: ProductList,
          meta: { requiresAuth: true }
        },
        {
          path: 'Coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true }
        },

      ]
    },



  ]
})
