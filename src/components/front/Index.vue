<template>
  <div id="index">
    <Navbar />
 <Alert />
    <router-view></router-view>

    <!-- footer -->

    <footer class="  bg-primary " style="color:whitesmoke">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <h4>About</h4>
            <p class="h6 mt-3  mr-3 ">
       
<span class="font-weight-bolder">JOJO LEE</span>  was established in 2020,
The spirit of honesty, professionalism and service provides a comfortable environment for Taiwanese music-loving friends.
            </p>
          </div>
          <div id="index-Contact" class="  my-md-0 col-12 col-md-4 h6" style="list-style: none">
            <h4>Contact</h4>

   
              <li class="mt-3">E-mail : JOJOLEE@ggmail.com</li>
              <li class="my-2">Tel : (02)2712-3456</li>
              <li>Address : 台北市大安區忠孝北路5段26號5樓</li>
       
          </div>
          <div id="index-icon" class="col-12 col-md-2 d-flex justify-content-start mt-2   " style="list-style-type: none;  color: snow;">
 <div class=" iconSet text-center pt-2  " @click="gotohref()" >   <i class="fab fa-facebook-f fa-2x "></i></div>    
       <div class=" iconSet text-center pt-2 mx-4" @click="gotohref()" >      <i class="fab fa-google fa-2x"></i></div>  
        <div class=" iconSet text-center pt-2 " @click="gotohref()" >     <i class="fab fa-instagram fa-2x"></i></div>  
        <div class=" iconSet text-center pt-2 ml-4" @click="gotohref()">     <i class="fab fa-twitter fa-2x"></i></div>  
          </div>
        </div>
        <!-- row -->
        <div class="text-center mt-4 h6">
          <h5>copyright@2021 By Yang</h5>
          <p>
            (資料來源來自網路，僅個人練習用，非商業/營利網站)
            <span class="btn" @click.prevent="openLoginModal()">
              <i class="fas fa-users-cog" style="color:snow"></i
            ></span>
          </p>
        </div>
      </div>


    </footer>
    <div
      class="modal fade"
      id="LoginModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white  " id="exampleModalLabel">
            <i class="fas fa-user ml-1"></i> <span class="ml-1">後台管理員登入</span>  
            </h5>
            <!-- style="margin-left:150px" -->
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-signin" @submit.prevent="signin">
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                v-model="user.username"
                placeholder="Email address"
                required
                autofocus
              />

              <input
                type="password"
                id="inputPassword"
                class="form-control my-4"
                v-model="user.password"
                placeholder="Password"
                required
              />
              <!-- <h4 class="mb-5">joseph0924</h4> -->
              <button
                class="btn btn-lg btn-primary btn-block w-75 mx-auto"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import Navbar from "./pages/frontNavbar.vue";
import Alert from "../AlertMessage.vue";


export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.APIPATH}/admin/signin`;
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${expired}`;
          vm.$router.push("/admin/ProductList");
              $("#LoginModal").modal("hide");
        }
      });
    },
    openLoginModal() {
      $("#LoginModal").modal("show");
    },
    gotohref(){
   $("html,body").animate({ scrollTop: 0 }, 0);
    }
  },
  components: {
    Navbar,
    Alert,
  },
};
</script>

<style lang="scss">
@import "../../assets/all.scss";
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  /* width: 100%;
        height: 100%; */
  width: 1000px;
  height: 300px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.iconSet{
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
 
}
</style>
