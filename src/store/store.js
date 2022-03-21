// 屌爆了vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// import cart from './cart';
import axios from 'axios' //AJAX
// 定義一個新的 Vue Store
export default new Vuex.Store({
  state: { //類似data
    cartProducts: [], //所有放入購物車的東西 以物件表現 用vfor
    Cart: {},
    total: "100",
    cartsLength: 0,
    isLoading: false,

  },
  actions: {
    updateLoading(context, status) {
      context.commit("LOADING", status)
    }, //規定，自訂


    // 測試



    getCartAllProduct(context) {
      const vm = this
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      // context.commit('LOADING',true)
      axios.get(api).then((response) => {
        //裡面有coupons[]也有頁碼
        if (response.data.success) {
          context.commit('CART', response.data.data)

          //  context.commit('LOADING',false)
          //  vm.cartsLength=response.data.data.carts.length
          context.commit('CARTSLENGTH', response.data.data.carts.length)

          context.commit('CARTPRODUCTS', response.data.data.carts)


          context.commit('TOTAL', response.data.data.total)

          //  vm.total = response.data.data.total;
        }
      });
    },
    deleteCartProduct(context, id) {
      const vm = this
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      //  context.commit('LOADING',false)
      axios.delete(api).then((response) => {
        if (response.data.success) {
          //  context.commit('LOADING',false)
          context.dispatch('getCartAllProduct')

        }
      });
    },

    addToCart(context, {
      id,
      qty = 1,
      feature
    }) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
        feature
      };
      context.commit('LOADING', false)
      axios.post(api, {
        data: cart
      }).then((response) => {
        context.commit('LOADING', false)

        context.dispatch('getCartAllProduct')

      });
    },


  },
  mutations: {
    LOADING(state, status) { //data,自訂參數
      state.isLoading = status
    },


    CART(state, payload) {
      state.Cart = payload
    },
    CARTSLENGTH(state, payload) {
      state.cartsLength = payload;
    },
    CARTPRODUCTS(state, payload) {
      state.cartProducts = payload;
    },
    TOTAL(state, payload) {
      state.total = payload;
    },
  },



  getters: {
    Cart: state => state.Cart,
    cartsLength: state => state.cartsLength,
    cartProducts: state => state.cartProducts,
    total: state => state.total,
  },


})
