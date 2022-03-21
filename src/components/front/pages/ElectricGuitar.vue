<template>
  <div
    id="EG"
    style="background: rgba(248, 248, 248, 0.932); margin-top: 40px !important"
  >
  <!-- WED -->
    <div id="Carousel-WED">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="BackgroundImg1 container-fluid w-100"
              :style="{ backgroundImage: 'url(' + BackgroundImg1 + ')' }"
              style="background-position: center center"
            ></div>
          </div>
          <div class="carousel-item">
            <div
              class="BackgroundImg1 container-fluid w-100"
              :style="{ backgroundImage: 'url(' + BackgroundImg2 + ')' }"
              style="background-position: center top 20%"
            ></div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <!-- 直立式 -->
    <div id="Carousel-RWD" class="d-none">
<div  id="carouselExampleIndicators">
     <swiper :options="swiperOption" class="h-100">
        <swiper-slide class="slide-1 bg-set container-fluid w-100" 
         :style="{ backgroundImage: 'url(' + BackgroundImg1RWD + ')' }"
              style="background-position: center">

        </swiper-slide>
        <swiper-slide class="slide-2 bg-set container-fluid w-100"  
        :style="{ backgroundImage: 'url(' + BackgroundImg2RWD + ')' }"
        style="background-position: center">
        </swiper-slide>
      </swiper>

</div>
</div>


<!-- 橫向式 -->
   <div id="Carousel-RWD-Horizontal" style="display: none">
      <div
        id="carouselExampleIndicators"
      >
     <swiper :options="swiperOption" class="h-100">
        <swiper-slide class="slide-1 bg-set container-fluid w-100" 
         :style="{ backgroundImage: 'url(' + BackgroundImg1RWD + ')' }"
              style="background-position: center">

        </swiper-slide>
        <swiper-slide class="slide-2 bg-set container-fluid w-100"  
        :style="{ backgroundImage: 'url(' + BackgroundImg2RWD + ')' }"
        style="background-position: center">
        </swiper-slide>

      </swiper>
      </div>
    </div>

    <div
      id="productList-All"
      class="container-fluid py-3 mt-5"
      style="margin-top: 5px; padding-top: 0px !important"
    >
      <div class="row justify-content-center">
        <!-- list -->

        <div id="productList" class="col-md-2 col-sm-3 col-12 text-start ml-5">
          <h3 class="h2 mb-4 text-dark" style="font-family: fantasy">
            ELECTRIC<span class="mr-1">-</span>GUITARS
          </h3>
          <div
            id="productList-List"
            class="
              row
              d-flex
              justify-content-center justify-content-sm-between
              pl-3
            "
          >
            <div
              class="my-2 pl-2 col-sm-12 col-2 RWD-set"
              v-for="list in EleGuitarList"
              :key="list.id"
              @click.prevent="onClickCategory(list.id)"
            >
              <ul>
                <li>
                  <a 
                    href="#"
                    class="h5 "
                    style="letter-spacing: 1px"
                    :class="{ 'listColor': getNowPage == list.id}"
                    
                  >
                    {{ list.name }}
              </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Product-List-RWD -->
        <div id="Product-List-RWD" class="col-12 mb-4 d-none text-center">
          <div class="h3 text-dark justify-content-center text-center">
            ELECTRIC <span class="mr-1">-</span>GUITARS
          </div>
          <div class="col-12 text-center">
            <div
              class="btn-group btn-group-sm mx-1 mt-2"
              role="group"
              aria-label="First group"
              v-for="list in EleGuitarList"
              :key="list.id"
              @click.prevent="onClickCategory(list.id)"
            >
              <button
                type="button"
                class="btn btn-outline-warning  "
                :class="{
                  'btn-warning': getNowPage == list.id,
                  'list-active-RWD': getNowPage == list.id,
                }"
              >
                {{ list.name }}
              </button>
            </div>
          </div>
        </div>

        <!-- 產品內容 -->
        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
          <div
            class="row d-flex justify-content-center justify-content-lg-start"
          >
            <!-- 卡片起點 -->

            <div
              id="ProductItem"
              class="
                col-12 col-sm-4 col-md-4 col-lg-2
                mb-5
                mx-3
                ml-4
                btn
                shadowHover
                item-images
                bg-white
              "
              @click.prevent="goProductDetail(item.id)"
              style="min-width: 300px"
              v-for="item in products"
              :key="item.id"
            >
              <!-- col-12 col-sm-8 col-md-10 col-lg-2 -->

              <div
                class="mt-2 ml-1 text-left"
                style="letter-spacing: 0.2px; min-height: 40px"
              >
                <h6
                  class="font-weight-bold"
                  style="font-size: 16px; line-height: 22px"
                >
                  {{ item.title }}
                </h6>
              </div>
              <div
                class="bg-white ProductImage my-3"
                :style="` background-image: url(${item.imageUrl})`"
              ></div>
              <!-- 吉他圖片 -->
              <!-- hover -->
              <div>
                <h6
                  class="text-black text-center"
                  style="letter-spacing: 1px; font-size: 20px"
                >
                  {{ item.price | currency }}
                </h6>
                <!-- 大的放大鏡 -->
                <p
                  id="magnifier"
                  class="px-1 py-1"
                  @click.stop="openDetailModal(item)"
                >
                  <i
                    class="fas fa-search iconSize DetailPosition iconStatus"
                  ></i>
                </p>
                <!-- 小得放大鏡 -->
                <p
                  id="RWD-magnifier"
                  class="px-1 py-1 d-none"
                  @click.stop="goProductDetail(item.id)"
                >
                  <i
                    class="fas fa-search iconSize DetailPosition iconStatus"
                  ></i>
                </p>
              </div>
            </div>
            <!-- 單一個card所有內容 -->
          </div>
        </div>
      </div>
      <div class="mb-5"></div>
    </div>

    <!-- 放大鏡的modal -->
    <div
      class="modal fade"
      id="quickViewModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="z-index: 1000000 !important"
    >
      <div class="modal-dialog modal-dialog-centered modalSize" role="document">
        <div class="modal-content">
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="close mr-2"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="h3">X</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-5" style="max-height: 500px">
                  <div id="lingallery-Product">
                    <div class="mt-3">
                      <lingallery
                        :height="380"
                        :width="500"
                        :showThumbnails="false"
                        :accentColor="'#af715b'"
                        :items="[
                          {
                            id: 'someid1',
                            src: quickProduct.imageUrl,
                            thumbnail: quickProduct.imageUrl,
                          },
                          {
                            src: ProductImages.ProductImg1,
                            thumbnail: ProductImages.ProductImg1,
                          },
                          {
                            src: ProductImages.ProductImg2,
                            thumbnail: ProductImages.ProductImg2,
                          },
                          {
                            src: ProductImages.ProductImg3,
                            thumbnail: ProductImages.ProductImg3,
                          },
                          {
                            src: ProductImages.ProductImg4,
                            thumbnail: ProductImages.ProductImg4,
                          },
                        ]"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-7" style="position: relative">
                  <h5
                    class="modal-title modalClick text-dark"
                    style="font-size: 24px"
                  >
                    {{ quickProduct.title }}
                  </h5>
                  <div class="h5 my-3 pb-3 border-bottom text-light">
                    NT{{ quickProduct.price | currency }}
                  </div>
                  <!-- 數量 -->
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div><p class="text-dark h5">Quantity:</p></div>
                    <div>
                      <vs-input-number
                        color="#C49464"
                        min="1"
                        v-model="quickProduct.qty"
                      />
                    </div>
                  </div>

                  <!-- 嘗試 -->
                  <!-- 皮克 -->
                  <div
                    v-if="PickShow"
                    class="
                      d-flex
                      justify-content-between
                      mt-2
                      align-items-center
                      text-light
                    "
                  >
                    <div><p class="text-light h5">style:</p></div>
                    <select
                      v-model="quickProduct.feature"
                      class="form-control w-50"
                    >
                      <option selected disabled>Please Select</option>
                      <option v-for="option in optionsPick" :key="option.text">
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                  <!-- 吉他和弦 -->
                  <div
                    v-if="GString"
                    class="
                      d-flex
                      justify-content-between
                      mt-2
                      align-items-center
                    "
                  >
                    <div><p class="text-light h5">style:</p></div>
                    <select
                      required
                      v-model="quickProduct.feature"
                      class="custom-select w-50"
                    >
                      <!-- <option selected >0.5mm</option> -->

                      <option selected disabled>Please Select</option>
                      <option
                        v-for="option in optionsStrings"
                        :key="option.text"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                  </div>

                  <div
                    @click.prevent="isShow = !isShow"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <p class="pt-3 h5 text-dark">
                      Details <i class="fas fa-caret-down"></i>
                    </p>
                  </div>
                  <!-- detail -->

                  <div
                    class="pl-2 pr-3 mt-3 collapse h6"
                    v-if="isShow"
                    id="collapseExample"
                  >
                    <p class="text-dark pr-2" style="font-size: 16px">
                      {{ quickProduct.description }}
                    </p>
                    <p class="text-dark" style="font-size: 16px">
                      {{ quickProduct.content }}
                    </p>
                  </div>
                  <!-- 條長度ProductImg3 -->
                  <div style="position: absolute; bottom: 0; left: 0; right: 0">
                    <div class="text-muted text-nowrap text-right h5 mr-2">
                      小計
                      <strong class="ml-2">
                        {{
                          (quickProduct.price * (quickProduct.qty || 1))
                            | currency
                        }}
                      </strong>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="
                          btn btn-outline-primary btn-sm btn-block
                          mt-3
                          mm
                          modalClick
                        "
                        @click.prevent="
                          addToCart(
                            quickProduct.id,
                            quickProduct.qty,
                            quickProduct.feature
                          )
                        "
                      >
                        ADD TO BAG<i class="fas fa-shopping-cart ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  class="
                    btn btn-info
                    text-white
                    mt-4
                    btn-sm btn-block
                    font-weight-bolder
                    py-1
                    modalClick
                  "
                  @click.prevent="
                    goProductDetail(
                      quickProduct.id,
                      quickProduct.qty,
                      quickProduct.feature
                    )
                  "
                >
                  All Product Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 點開cart 呈現ㄉmodal -->
  </div>
</template>
<script>
import $ from "jquery";
import BackgroundImg2 from "../../../assets/img/EGbanner/fender_page_temp_banner_2048x2048.png";
import BackgroundImg1 from "../../../assets/img/EGbanner/fender右邊.jpg";

import BackgroundImg2RWD from "../../../assets/img/EGbanner/fenderRWD.png";
import BackgroundImg1RWD from "../../../assets/img/EGbanner/fender右邊RWD.jpg";

import ProductImg1 from "../../../assets/img/ProductImages/ProductDetail/ProductImg1.jpg";
import ProductImg2 from "../../../assets/img/ProductImages/ProductDetail/ProductImg2.jpg";
import ProductImg3 from "../../../assets/img/ProductImages/ProductDetail/ProductImg3.jpg";
import ProductImg4 from "../../../assets/img/ProductImages/ProductDetail/ProductImg4.jpg";

export default {
  data() {
    return {

             swiperOption: {
     autoplay: 5500,
      speed: 1000,
         loop: true,
          effect: 'fade',
grabCursor:true,

        },
      EleGuitarProduct: [],
      breadcrumbName: "",
      EleGuitarList: [
        { name: "Fender", id: "Fender" },
        { name: "Gibson", id: "Gibson" },
        { name: "Squier", id: "Squier" },
        { name: "Epiphone", id: "Epiphone" },
      ],
      quickProduct: {
        qty: "1",
        feature: "",
      },
      isShow: false,
      total: 0,
      BackgroundImg1: BackgroundImg1,
      BackgroundImg2: BackgroundImg2,
      BackgroundImg1RWD: BackgroundImg1RWD,
      BackgroundImg2RWD,
      BackgroundImg2RWD,

      ProductCategory: [],
      getNowPage: "Fender",
      products: [],
      PickShow: false,
      GString: false,
      ProductImages: {
        ProductImg1: ProductImg1,
        ProductImg2: ProductImg2,
        ProductImg3: ProductImg3,
        ProductImg4: ProductImg4,
      },
    };
  },
  methods: {
    getProduct(page = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;

      vm.$store.dispatch("updateLoading", true);
      vm.$http.get(api).then((response) => {
        // console.log(response.data); //裡面有coupons[]也有頁碼
        if (response.data.success) {
          vm.$store.dispatch("updateLoading", false);
          vm.EleGuitarProduct = response.data.products;
          // console.log(vm.EleGuitarProduct);
          //  console.log(this.$route.query.id)
          vm.getNowPage = `${this.$route.query.id}`;
          vm.products = response.data.products.filter(
            (item) =>
              item.category.indexOf("EG") !== -1 &&
              item.category.indexOf(`${this.$route.query.id}` || `Fender`) !==
                -1
          );
        }
      });
    },

    addToCart(id, qty = 1, feature, num = 1) {
      const vm = this;

      console.log(feature);
      if (typeof feature !== "string") {
        vm.$bus.$emit("message:push", "請選擇款式", "danger");
      } else {
        vm.$store.dispatch("addToCart", { id, qty, feature, num });
        $("#quickViewModal").modal("hide");
        vm.$bus.$emit("message:push", "已加入購物車", "success");
      }
    },

    onClickCategory(id, page = 1) {
      const vm = this;

      vm.getNowPage = id;
      let genderStr = "/EG";
      vm.$router
        .push({ path: genderStr, query: { id: id } })
        .catch((err) => {});

      vm.products = vm.EleGuitarProduct.filter(
        (item) =>
          item.category.indexOf("EG") !== -1 &&
          item.category.indexOf(`${id}`) !== -1
      );
    },

    openDetailModal(item, category) {
      const vm = this;
      this.quickProduct = Object.assign({}, item, { qty: 1, feature: "" });
      $("#quickViewModal").modal("show");
      $("#quickViewModal").on("show.bs.modal", function (e) {
        $("#carouselExampleIndicators").carousel(0);
      });
      vm.isShow = false;
      this.PickShow = false;
      this.GString = false;
      console.log(vm.quickProduct);
      //  console.log(vm.quickProduct);
      if (category == "AC,Pick") {
        this.PickShow = true;
      } else {
        this.PickShow = false;
      }
      if (category == "AC,GString") {
        this.GString = true;
      } else {
        this.GString = false;
      }
      // if (quickProduct.num=1) {

      // }
    },

    goProductDetail(id, qty = 1, feature) {
      const vm = this;
      $("#quickViewModal").modal("hide");
      // vm.$router.push({ path: `/detail/${id}`,query: { num:num, feature:feature}  });
      vm.$router
        .push({ path: `/detail/${id}`, query: { feature: feature, qty: qty } })
        .catch((err) => {});
    },
  }, //methods尾巴
   mounted(){
       $(".carousel").carousel({ interval: 5000 });
    },
  created() {
    
    this.getProduct();
     $("html,body").animate({ scrollTop: 0 }, 0);
  },
};
</script>
<style lang="scss" scoped>
// @import "../../../assets/all.scss";

.mm:hover {
  color: white !important;
}
.list-active-RWD {
  color: white !important;
}

#Carousel-RWD {
  .bg-set {
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 150px;
  }
  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    min-height: 165px;
    max-height: 165px;
  }
  #carouselExampleIndicators {
    display: block;
    min-height: 140px;
  }
}

#lingallery-Product {
  #lingallery-WED .lingalleryContainer[data-v-40681078] .lingallery figure img {
    max-width: 100%;
    max-height: 100%;
    -webkit-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
    margin-top: 15px;
  }
}
.listColor{
  color: #245a86 !important;
  font-weight: 700;
}


</style>
