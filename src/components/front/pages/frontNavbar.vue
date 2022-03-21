<template>
  <div>
    <div>
      <loading :active.sync="isLoading"></loading>
      <nav
        class="
          navbar navbar-expand-lg
          bg-white
          navbar navbar-light

          fixed-top
          py-0
          navbar-fixed-right
          flex-nowrap
          border-bottom
        "
      >
        <a href="#" @click.prevent="onClickCategory('HOME')" class="logo"
          >JOJOLEE</a
        >

        <!-- 列子 -->
        <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
          <ul class="navbar-nav h2 text-secondary">
            <li class="nav-item ml-3 text-primary  ">
              <a
                href="#"
                class="nav-link   navbarFontSize navbarcolor"
                @click.prevent="onClickCategory('HOME')"
                :class="{ 'navbar-active': this.$route.path == '/' }"
                >HOME
                <i
                  class="fas fa-music"
                  style="display: none"
                  :class="{ 'icon-show': this.$route.path == '/' }"
                ></i
              ></a>
            </li>
            <li class="nav-item text-primary">
              <a
                href="#"
                class="nav-link  navbarFontSize navbarcolor"
                @click.prevent="onClickCategory('EG', 'Fender')"
                :class="{ 'navbar-active': this.$route.path === '/EG' }"
                >ELECTRIC
                <i
                  class="fas fa-music"
                  style="display: none"
                  :class="{ 'icon-show': this.$route.path == '/EG' }"
                ></i
              ></a>
            </li>
            <li class="nav-item ml-3 text-primary">
              <a
                href="#"
                class="
                  nav-link
                  text-decoration-none 
                  navbarFontSize
                  navbarcolor
                "
              
                @click.prevent="onClickCategory('AG', 'Martin')"
                :class="{ 'navbar-active': this.$route.path === '/AG' }"
                >ACOUSTIC
                <i
                  class="fas fa-music"
                  style="display: none"
                  :class="{ 'icon-show': this.$route.path == '/AG' }"
                ></i
              ></a>
            </li>
            <li class="nav-item pl-2 ml-2 text-primary">
              <a
                href="#"
                class="
                  nav-link
                  text-decoration-none 
                  navbarFontSize
                  navbarcolor
                "
                @click.prevent="onClickCategory('AC', 'Capo')"
                :class="{ 'navbar-active': this.$route.path === '/AC' }"
              >
                ACCESSORIES
                <i
                  class="fas fa-music"
                  style="display: none"
                  :class="{ 'icon-show': this.$route.path == '/AC' }"
                ></i
              ></a>
            </li>
          </ul>
        </div>

        <!-- 1CART -->
        <button
          id="navbar-Cart1"
          type="button"
          class="btn"
          data-toggle="modal"
          @click.prevent="OpenCartModal()"
          style="position: relative; font-size: 16px"
        >
          <i class="fas fa-shopping-cart fa-2x text-primary "> </i>

          <span class="cart-itemnumber bg-info">{{ cartsLength }}</span>
        </button>

        <!-- 第二個CART-RWD -->
        <!-- 購物車直接去結帳 -->
        <div id="navbar-RWDCart" class="d-none ml-auto">
          <button
            type="button"
            class="btn border-0"
            style="position: relative"
            @click.prevent="GoToCheck()"
          >
           <i class="fas fa-shopping-cart fa-2x text-primary "> </i>

          <span class="cart-itemnumber bg-info">{{ cartsLength }}</span>
          </button>
  
          <button
            class="btn text-dark border-0"
            type="button"
   @click="navShow = ! navShow"
   style="width:2em ;font-size:1.3em"
          >
            <i v-if="navShow" class="fas fa-bars"></i>
            <i v-else class="fas fa-times"></i>
          </button>
        </div>

        <!-- navbar-RWDCart -->

<!-- 漢堡選單 -->
<div  >
  <ul id="Menu" class="HambugerMenu text-center "  :class="{'menu-show': !navShow}" style="background:#F5F9F8">
   <li class="nav-item menu-border-bottom py-1 ">
                <a
                
                  class="nav-link  text-primary"
                  @click.prevent="onClickCategory('HOME')"
                  :class="{ 'navbar-active-RWD': this.$route.path == '/' }"
                  id="home"
                  >HOME</a
                >
              </li>
              <li class="nav-item menu-border-bottom py-1">
                <a
       
                  class="nav-link text-primary"
                  :class="{ 'navbar-active-RWD': this.$route.path == '/EG' }"
                  @click.prevent="onClickCategory('EG', 'Fender')"
                >
                
                  ELECTRIC-GUITAR
                </a>
              </li>
              <li class="nav-item menu-border-bottom py-1">
                <a
             
                  class="nav-link text-primary"
                  :class="{ 'navbar-active-RWD': this.$route.path == '/AG' }"
                  @click.prevent="onClickCategory('AG', 'Martin')"
                >
                  ACOUSTIC-GUITAR
                </a>
              </li>
              <li class="nav-item  py-1 " style="  border-bottom:2px solid gray;">
                <a
                  class="nav-link text-primary"
                  :class="{ 'navbar-active-RWD': this.$route.path == '/AC' }"
                  @click.prevent="onClickCategory('AC', 'Capo')"
                >
                  ACCESSORIES
                </a>
              </li>



  </ul>
</div>


      </nav>





      <!-- 位子 -->
      <!-- Cart -->
      <div
        class="modal fade"
        id="cartModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="cartModal"
        aria-hidden="true"
        style="z-index: 2040 !important"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
          style="z-index: 2050 !important"
        >
          <div class="modal-content">
            <div class="modal-header border-bottom-0 bg-primary">
              <h5 class="modal-title text-white ml-3" id="cartModal">
                Your Shopping Cart
              </h5>
              <button
                type="button"
                class="close text-black"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" v-if="total > 0">
              <table class="table table-image">
                <thead>
                  <tr class="font-weight-bold">
                    <th id="th1" scope="col" width="110"></th>
                    <th
                      scope="col"
                      width="300"
                      class="pl-3"
                      style="text-align: start !important"
                    >
                      Product
                    </th>
                    <th scope="col" width="150">Qty/Price</th>
                    <th scope="col" width="150">Total</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody class="text-dark">
                  <tr v-for="item in cartProducts" :key="item.id">
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        class="img-fluid"
                        style="max-height: 80px"
                        alt="Sheep"
                      />
                    </td>
                    <td
                      class="h6"
                      style="
                        text-align: start !important ;
                        vertical-align: middle;
                      "
                    >
                      <span>{{ item.product.title }}</span> <br />
                      <span>{{ item.feature }}</span>
                    </td>
                    <td style="vertical-align: middle">
                      {{ item.qty || 1 }}/{{ item.product.price }}
                    </td>
                    <td class="font-weight-bolder text-dark" style="vertical-align: middle">
                      {{ item.final_total | currency }}
                    </td>
                    <td style="vertical-align: middle">
                      <a
                        href="#"
                        @click.prevent="deleteCartProduct(item.id)"
                        class="btn btn-danger btn-sm"
                      >
                        <i class="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <h5>
                  Total:
                  <span class="price text-success">{{ total | currency }}</span>
                </h5>
              </div>
            </div>
            <div class="modal-body" v-if="total == 0">
              <div
                class="text-center text-dark py-4 border-bottom"
                style="letter-spacing: 1px; font-weight: bold"
              >
                <h2>購物車是空的歐</h2>
              </div>
            </div>
            <div
              class="modal-footer border-top-0 d-flex justify-content-between"
            >
              <button type="button" class="btn btn-outline-light" data-dismiss="modal">
                Close
              </button>
              <button
                v-if="total > 0"
                type="button"
                class="btn btn-info text-white "
                @click.prevent="GoToCheck()"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import LOGO from "../../../assets/img/indexBackground/LOGO.svg";


export default {
  data() {
    return {
      category: [],
      LOGO: LOGO,
      showqqq: false,
     navShow:true,


    };
  },

  methods: {
    // 購物車


    backtoTOP() {
      $("html,body").animate({ scrollTop: 0 }, 333);
    },

    OpenCartModal() {
      console.log(this.$route.name);
      if (this.$route.name == "CheckOut") {
        this.$bus.$emit("message:push", "已經在購物車裡面摟", "success");
        return;
      } else {
        $("#cartModal").modal("show");
        const vm = this;
        const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(api).then((response) => {
          vm.getCartAllProduct();
        });
      }
    },

    getCartAllProduct() {
      const vm = this;
      vm.$store.dispatch("getCartAllProduct");
    },

    deleteCartProduct(id) {
      const vm = this;
      vm.$store.dispatch("deleteCartProduct", id);
      this.$bus.$emit("message:push", "成功刪除", "danger");
      //  vm.$store.dispatch("getCartAllProduct");
      vm.getCartAllProduct();
    },

    // 結帳
    GoToCheck() {
      const vm = this;
      // if購物車是有內容就去 沒內容跳alert

      if (vm.cartsLength == 0) {
        this.$bus.$emit("message:push", "購物車是空的", "danger");
      } else {
        vm.$router.push({ path: `/CheckOut` });
        $("#cartModal").modal("hide");
      }
    },

    onClickCategory(category, grand) {
      // (EG,FENDER)
      const vm = this;
      let genderStr = "/" + category;

      //  vm.$router.push({ path: genderStr, query: { id: category }}).catch(err => {});
      vm.$router
        .push({ path: genderStr, query: { id: grand } })
        .catch((err) => {});
      // navbarNavAltMarkup
      // $("#na").modal("hide");
vm.navShow=true
      $("html,body").animate({ scrollTop: 0 }, 333);
    },
    OpenRWDList() {
      $("#RWDList").modal("show");
    },
  },
  computed: {
    Cart() {
      return this.$store.state.Cart;
    },
    total() {
      return this.$store.state.total;
    },
    cartProducts() {
      return this.$store.state.cartProducts;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    cartsLength() {
      return this.$store.state.cartsLength;
    },
  },

  created() {
    this.getCartAllProduct();
    console.log(this.isShow)
  },
};
</script>

<style lang="scss">
@import "../../../assets/all.scss";

.navbar-active-RWD {
  color: whitesmoke !important ;
  font-weight: bold;
}

.icon-show {
  display: inline-block !important;
}
.cart-itemnumber {
  position: absolute;
  top: 2%;
  right: 12%;
  color: white;
  background: #1193a7;
  border-radius: 45%;
  font-size: 13px !important;
  font-weight: bold;
  min-width: 18px;
}
#navbar-RWDCart .cart-itemnumber {
  position: absolute;
  top: 5%;
  right: 14%;
  color: white;
  background: #1193a7;
  border-radius: 45%;
  font-size: 14px;
  font-weight: bold;
  min-width: 17px;
  height: auto;
}
.logo {
  display: block;
  background-image: url(../../../assets/img/indexBackground/LOGO.svg);
  min-width: 150px;
  min-height: 48px;
  background-size: contain;
  text-indent: 101%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50%;
  white-space: nowrap;
  cursor: pointer;
}

/* reset */
body,
h1,
ul,
li {
  margin: 0;
}

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding-left: 0;
}

a {
  text-decoration: none;
}

/* NavBar */
nav {
  background: #eee;
  box-shadow: 0px 1px 3px #00000088;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  h1 {
    float: left;
    padding-left: 50px;
    line-height: 50px;
  }
}
/* 隱藏 checkbox */
input {
  display: block;
}

body{
  position: relative;
}
#wwwwwww{
  position: absolute;
  top: 49px;
  right: 0;
  left: 0;
  z-index: 1000;
  

}

#Menu{

transition:max-height 1s;
position: absolute;
z-index: 1000;
top: 49px;
left: 0;
right: 0;

}
.HambugerMenu{
max-height: 0px;
overflow: hidden;
}
 .menu-show{
    max-height: 500px ;
  }
.menu-border-bottom{
  border-bottom:1px solid gainsboro ;
  margin-left: 10px;
    margin-right: 10px;
}
.navbar-active {
  color: #5e7f99 !important ;
  font-weight: bold;
}
// .navbarcolor{
//   color: #8496a4 ! ;
// }
.navbarcolor:hover{
  color: #5e7f99 !important;
}
</style>
