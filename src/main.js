// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'


import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import axios from 'axios' //AJAX
import VueAxios from 'vue-axios'
import currency from '@/filters/currency'
import Lingallery from 'lingallery';











import { vsButton, vsSelect, vsPopup,vsInputNumber,vsIcon,vsSideBar} from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
Vue.use(vsIcon)
Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)
Vue.use(vsSideBar)

Vue.use(vsInputNumber)



import Vuex from 'vuex'

Vue.use(Vuex)
import "./bus"

import store from './store/store';
Vue.component('lingallery', Lingallery);

import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)





const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})

// import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
// import 'swiper/dist/css/swiper.css'
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)




Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
Vue.filter('currency', currency);
Vue.component("Loading", Loading)


new Vue({
  i18n,
  el: '#app',
  router,

  components: {
    App,

  },
  store,


  render: h => h(App),
  template: '<App/>'
}).$mount('#app')

// const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next)

  if (to.meta.requiresAuth) {
    console.log("這裡需要驗證")
    const api = `${process.env.APIPATH}/api/user/check`

    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        next()

      } else {
        next({
          path: "/Login"
        })
        alert("沒登入不可以進來")
      }
    })
  } else { //如果他是有這條驗證的就擋下來 沒有的直接通過
    next()
  }
})
