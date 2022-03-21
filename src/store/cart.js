import axios from 'axios'; //AJAX

export default({


    state: { //類似data
        cartProducts: [], //所有放入購物車的東西 以物件表現 用vfor
        Cart:{},
           total: "100",
           cartsLength:0
      },
      actions: {   
    // 測試
    getCartAllProduct(context) {
   const vm=this
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
     context.commit('LOADING',true)
     axios.get(api).then((response) => {
        //裡面有coupons[]也有頁碼
        if (response.data.success) {
            context.commit('CART',response.data.data)

            context.commit('LOADING',false)
            vm.cartsLength=response.data.data.carts.length
          vm.Cart = response.data.data;
          console.log(vm.Cart);
                 vm.cartProducts = response.data.data.carts;
        // console.log(response.data.data.total);
    console.log(vm.cartProducts)
        vm.total = response.data.data.total;
          // (vm.IsShow = false), (vm.Forkfork = false);
        }
      });
    },  
    deleteCartProduct(context,id) {
        const vm=this
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING',false)
      axios.delete(api).then((response) => {
        if (response.data.success) {
            context.commit('LOADING',false)
            context.dispatch('getCartAllProduct')
          // console.log("成功刪除")
          //  console.log(vm.Cart.carts.length);
              this.$bus.$emit('message:push',"成功刪除","danger");
    
        }
      });
    },
    
    // 測試
    
    
    
    
    

    
      },


      mutations:{

        CART(state,payload){
            state.cart=payload


        }
      }

})