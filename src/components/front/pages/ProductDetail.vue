<template>
  <div id="ProductDetail" style="margin-top: 50px !important">
    <nav aria-label="breadcrumb ">
      <ol
        class="breadcrumb py-2 pl-4"
        style="font-size: 16px; background: #edd6b2"
      >
        <router-link class="breadcrumb-item text-primary" to="/"
          >Home</router-link
        >
        <li class="breadcrumb-item">
          <a
            href="#"
            class="text-capitalize text-primary"
            @click.prevent="
              onClickSubCategory(ProductCategory[0], ProductCategory[1])
            "
          >
            {{ ProductCategory[0] }} - {{ ProductCategory[1] }}
          </a>

          <!-- <a href="">{{ ProductCategory[0] }}</a> -->
        </li>
        <li class="breadcrumb-item active text-light" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>

    <!-- 內容開始 -->
    <!-- 1 -->
    <div id="Detail-all" class="container pb-5 mb-5 bg-white " >
      <div class="row">
        <div class="col-sm-5 col-12">
          <div id="lingallery-WED">
            <lingallery
              :height="450"
              :width="500"
              :accentColor="'#af715b'"
              :items="[
                {
                  id: 'someid1',
                  src: product.imageUrl,
                  thumbnail: product.imageUrl,
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

          <div id="lingallery-RWD" class="d-none mb-3">
            <lingallery
              :height="450"
              :width="500"
              :accentColor="'#af715b'"
              :items="[
                {
                  id: 'someid1',
                  src: product.imageUrl,
                  thumbnail: product.imageUrl,
                  alt: 'Some alt text',
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
        <!-- 圖片尾巴 -->

        <!-- 內容開始 -->
        <div id="ProductDetail" class="col-12 col-sm-7">
          <h2 class="h3 mt-5">{{ product.title }}</h2>
          <div
            id="ProductDetail-money"
            class="h5 mb-3 pb-3 border-bottom text-light"
          >
            NT{{ product.price | currency }}
          </div>
          <!-- 數量 -->
          <!-- 測試 -->

          <!-- 尾巴 -->
          <div class="d-flex justify-content-between align-items-center">
            <div id="ProductDetail-money">
              <p class="text-dark h5">Quantity:</p>
            </div>

            <div class="centerx">
              <vs-input-number color="#C49464" min="1" v-model="qty" />
            </div>
          </div>

          <!-- 嘗試 -->
          <!-- 皮克 -->
          <div id="ProductDetail-style" v-if="PickShow" class="mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div id="ProductDetail-money">
                <p class="text-dark h5">style:</p>
              </div>

                      <select
                      required
                      v-model="product.feature"
                      class="custom-select w-50"
                           style="margin-right:10px"
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
          </div>
          <!-- 吉他和弦 -->
          <div id="ProductDetail-style" v-if="GString" class="mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div id="ProductDetail-money">
                <p class="text-dark h5">style:</p>
              </div>

                 <select
                      required
                      v-model="product.feature"
                      class="custom-select w-50"
                           style="margin-right:10px"
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
          </div>

          <div id="ProductDetail-money" class="pt-3 h5 text-dark">Details:</div>
          <div
            class="pl-2 pr-3 mt-4 h4"
            style="letter-spacing: 0.5px;    line-height: 25px;　"
          >
            <p class="text-dark pr-2" style="font-size: 16px">
              {{ product.description }}
            </p>
            <p class="text-dark" style="font-size: 16px">
              {{ product.content }}
            </p>
          </div>
          <!-- 測試投 -->

          <!-- 測試尾巴 -->

          <!-- 條長度ProductImg3 -->

          <div
            id="ProductDetail-bottom"
            class=""
            style="position: absolute; bottom: 0; left: 0; right: 0"
          >
            <div class="text-muted text-nowrap text-right h5 mr-2">
              小計
              <strong class="ml-2">
                {{ (product.price * (qty || 1)) | currency }}
              </strong>
            </div>
            <div>
              <button
                type="button"
                class="
                  btn btn-info
                  text-white
                  btn-sm btn-block
                  mt-3
                  mm
                  modalClick
                "
                @click.prevent="addToCart(product.id, qty, product.feature)"
              >
                ADD TO BAG <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <!-- RWD -->
          <div id="ProductDetail-bottom-RWD" class="d-none">
            <div class="text-muted text-nowrap text-right h5 mr-2">
              小計
              <strong class="ml-2">
                {{ (product.price * (qty || 1)) | currency }}
              </strong>
            </div>
            <div class="text-center d-flex justify-content-center">
              <button
                type="button "
                class="
                  btn btn-info
                  text-white
                  btn-sm btn-block
                  mt-3
                  mm
                  modalClick
                  mb-5
                  w-75
                "
                @click.prevent="addToCart(product.id, qty, product.feature)"
              >
                ADD TO BAG <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- 2 -->
<!-- wwwwww -->
 


<!-- 3 -->
<!-- 內容開始 最終站 -->
 <div id="Detail-Horizontal" class="container-fluid pb-5 mb-5  bg-white " style="display:none">
      <div class="row ">
        <div class="col-sm-6 col-12">
          <div id="lingallery-WED">
            <lingallery
              :height="450"
              :width="500"
              :showThumbnails="false"
              :accentColor="'#af715b'"
              :items="[
                {
                  id: 'someid1',
                  src: product.imageUrl,
                  thumbnail: product.imageUrl,
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
        <!-- 圖片尾巴 -->

        <!-- 內容開始 -->
        <div id="ProductDetail-H" class="col-12 col-sm-6">
          <h2 class="h4 mt-5">{{ product.title }}</h2>
          <div
            id="ProductDetail-money"
            class="h5 mb-3 pb-3 border-bottom text-light"
          >
            NT{{ product.price | currency }}
          </div>
          <!-- 數量 -->
          <!-- 測試 -->

          <!-- 尾巴 -->
          <div class="d-flex justify-content-between align-items-center">
            <div id="ProductDetail-money">
              <p class="text-dark h5">Quantity:</p>
            </div>

            <div class="centerx">
              <vs-input-number color="#C49464" min="1" v-model="qty" />
            </div>
          </div>

          <!-- 嘗試 -->
          <!-- 皮克 -->
          <div id="ProductDetail-style" v-if="PickShow" class="mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div id="ProductDetail-money">
                <p class="text-dark h5">style:</p>
              </div  >

                      <select
                      required
                      v-model="product.feature"
                      class="custom-select w-50"
                      style="margin-right:10px"
                      
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
          </div>
          <!-- 吉他和弦 -->
          <div id="ProductDetail-style" v-if="GString" class="mt-2">
            <div class="d-flex justify-content-between align-items-center">
              <div id="ProductDetail-money">
                <p class="text-dark h5">style:</p>
              </div>

                 <select
                      required
                      v-model="product.feature"
                      class="custom-select w-50"
                           style="margin-right:10px"
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
          </div>

          <div id="ProductDetail-money" class="pt-3 h5 text-dark">Details:</div>
          <div
            class="pl-2 pr-3 mt-4 h4"
            style="letter-spacing: 0.5px;    line-height: 25px;　"
          >
            <p class="text-dark pr-2" style="font-size: 16px">
              {{ product.description }}
            </p>
            <p class="text-dark" style="font-size: 16px">
              {{ product.content }}
            </p>
          </div>
 
      
        </div>
    <div id="Product-money-Horizontal"
        class="col-12"
          >
            <div class="text-muted text-nowrap text-right h5 mr-2">
              小計
              <strong class="ml-2">
                {{ (product.price * (qty || 1)) | currency }}
              </strong>
            </div>
            <div>
              <button
                type="button"
                class="
                  btn btn-info
                  text-white
                  btn-sm btn-block
                  mt-3
                  mm
                  modalClick
                "
                @click.prevent="addToCart(product.id, qty, product.feature)"
              >
                ADD TO BAG <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <!-- RWD -->
          <!-- <div id="ProductDetail-bottom-RWD" class="d-none">
            <div class="text-muted text-nowrap text-right h5 mr-2">
              小計
              <strong class="ml-2">
                {{ (product.price * (qty || 1)) | currency }}
              </strong>
            </div>
            <div class="text-center d-flex justify-content-center">
              <button
                type="button "
                class="
                  btn btn-info
                  text-white
                  btn-sm btn-block
                  mt-3
                  mm
                  modalClick
                  mb-5
                  w-75
                "
                @click.prevent="addToCart(product.id, qty, product.feature)"
              >
                ADD TO BAG <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div> -->

      </div>
    </div>

    <!-- container的部分 -->
    <!-- 尾巴 -->
  </div>
</template>

<script>
import $ from "jquery";
import ProductImg1 from "../../../assets/img/ProductImages/ProductDetail/ProductImg1.jpg";
import ProductImg2 from "../../../assets/img/ProductImages/ProductDetail/ProductImg2.jpg";
import ProductImg3 from "../../../assets/img/ProductImages/ProductDetail/ProductImg3.jpg";
import ProductImg4 from "../../../assets/img/ProductImages/ProductDetail/ProductImg4.jpg";

export default {
  data() {
    return {
      productId: "",
      qty: 1,
      feature: "Please Select",
      // 這裡
      Product: {},
      ProductCategory: [],
      ProductImages: {
        ProductImg1: ProductImg1,
        ProductImg2: ProductImg2,
        ProductImg3: ProductImg3,
        ProductImg4: ProductImg4,
      },

      total: 0,

      getNowPage: "Capo",

      PickShow: false,
      GString: false,
      // number1:21,
      product: [],
      isShow: false,
      optionsPick: [
        { text: "0.5mm-紅色", value: "0.5mm-紅色" },
        { text: "0.6mm-橘色", value: "0.6mm-橘色" },
        { text: "0.88mm-綠色", value: "0.88mm-綠色" },
        { text: "1.0mm-藍色", value: "1.0mm-藍色" },
        { text: "1.14mm-紫色", value: "1.14mm-紫色" },
      ],
      optionsStrings: [
        { text: "11002(9~42)", value: "11002(9~42)" },
        { text: "11000(10~50)", value: "11000(10~50)" },

        { text: "11027(11~52)", value: "11027(11~52)" },

        { text: "11052(12~54)", value: "11052(12~54)" },
      ],
    };
  },

  methods: {
    getParam() {
      if (this.$route.params.productId) {
        this.productId = this.$route.params.productId;
        this.qty = this.$route.query.qty;
        if (this.$route.query.feature) {
          this.feature = this.$route.query.feature;
        }
      }
      console.log(this.productId, this.qty, this.feature);
      this.getProduct(this.productId, this.qty, this.feature);
    },

    getProduct(id, qty, feature) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.productId}`;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product;
          // ProductCategory
          console.log(vm.product.category.split(','))
         vm.ProductCategory= vm.product.category.split(',')
          qty = vm.product.qty;

                this.PickShow = false;
      this.GString = false;
          if (typeof qty !== "number") {
            parseInt(vm.product.qty);
            parseInt(qty);
          }
          if (vm.product.category == "AC,GString") {
            vm.product.feature="Please Select"
            feature=vm.product.feature
            vm.GString = true;
            vm.PickShow = false;
          } else {
            vm.GString = false;
          }
          if (vm.product.category == "AC,Pick") {
             vm.product.feature="Please Select"
                   feature=vm.product.feature
            vm.PickShow = true;
            vm.GString = false;
          } else {
            vm.PickShow = false;
          }

        }
      });
    },

    onClickSubCategory(id1, id2) {
      const vm = this;

      vm.getNowPage = id2;
      let genderStr = `/${id1}`;
      vm.$router
        .push({ path: genderStr, query: { id: id2 } })
        .catch((err) => {});
    },

    // 抓單一產品細節 麵包屑

    addToCart(id, qty = 1, feature, num = 1) {
      const vm = this;

      if (vm.GString || vm.PickShow) {
        if (feature == "Please Select") {
          vm.$bus.$emit("message:push", "請選擇款式", "danger");
        } else {
          vm.$store.dispatch("addToCart", { id, qty, feature, num });

          vm.$bus.$emit("message:push", "已加入購物車", "success");
        }
      } else {
        vm.$store.dispatch("addToCart", { id, qty, feature, num });

        vm.$bus.$emit("message:push", "已加入購物車", "success");
      }
    },
  },
  created() {
    this.getParam();
    // this.getProduct();
    $("html,body").animate({ scrollTop: 0 }, 0);
    //  this.selected=this.product.feature
  },
};
</script>
<style lang="scss" scoped>
// @import "../../../assets/all.scss";

@import "../../../assets/helpers/RWD.scss";

.modalImgframe {
  min-width: 500px;
  position: relative;
  min-height: 600px;
  border-radius: 20px;
}
.imgSetting {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.lingallery figure {
  height: 500px;
  // @media (max-width: 576px) {
  //   height: 400px !important;
  // }
  img {
    min-height: 500px;
    max-height: 500px !important;
    object-fit: cover;
    // @media (max-width: 576px) {
    //   min-height: 400px;
    //   max-height: 400px !important;
    // }
  }
}
.lingallery_thumbnails_content {
  text-align: center;
  margin-top: 20px !important;
}
.lingallery figure {
  height: 500px;
  // @media (max-width: 576px) {
  //   height: 400px !important;
  // }
  // img {
  //   min-height: 500px;
  //   max-height: 500px !important;
  //   object-fit: cover;

  //   @media (max-width: 576px) {
  //     min-height: 400px;
  //     max-height: 400px !important;
  //   }
  // }
}

.lingallery_thumbnails_content {
  text-align: center;
  margin-top: 20px !important;
}

.lingalleryContainer[data-v-40681078]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem
  img {
  margin-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  border: 1px solid gray;
}
img {
  vertical-align: middle;
  border-style: none;
  margin-top: 50px;
}

.mm:hover {
  color: white !important;
}

.lingallery_thumbnails {
  margin-top: 30px !important;
  padding-left: 50px !important;
}

.lingalleryContainer[data-v-40681078] .lingallery figure img {
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
  margin-top: 40px !important;
}

.lingalleryContainer[data-v-40681078]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem
  img {
  border: 2px solid #fff;
  cursor: pointer;
  width: 100% !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
}
#Picture-RWD {
  display: none;
}
.lingalleryContainer[data-v-40681078]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem
  img {
  border: 2px solid #fff;
  cursor: pointer;
  width: 100%;
  padding: 5px;
  padding-left: 20px;
  max-width: 100% !important;
  margin-left: 0;
  padding-right: 20px;
}
element.style {
  touch-action: pan-y;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding-top: 30px;
}

.lingalleryContainer[data-v-40681078]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem
  img {
  border: 2px solid #fff;
  cursor: pointer;
  width: 100%;
  padding: 5px;
  padding-left: 20px;
  max-width: 100% !important;
  margin-left: 0;
  padding-right: 30px;
}
.lingalleryContainer[data-v-40681078]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem
  img {
  border: 2px solid #fff;
  cursor: pointer;
  width: 100%;
  padding: 5px;
  padding-left: 10px;
  max-width: 100% !important;
  margin-left: 0;
  padding-right: 10px;
}
.lingalleryContainer[data-v-40681078] .lingallery .lingallery_thumbnails {
  overflow-x: auto;
  width: 100%;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  padding-left: 80px;
}

// new
.lingalleryContainer[data-v-6b553218] .lingallery .lingallery_thumbnails {
  overflow-x: auto;
  width: 100%;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
}
.lingalleryContainer[data-v-6b553218]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content {
  margin-top: 2px;
  width: auto;
  white-space: nowrap;
}
.lingalleryContainer[data-v-6b553218]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem {
  display: inline-block;
  scroll-snap-align: start;
}
.lingalleryContainer[data-v-40681078]
  .lingallery
  .lingallery_thumbnails
  .lingallery_thumbnails_content
  .lingallery_thumbnails_content_elem
  img {
  border: 2px solid #fff;
  cursor: pointer;
  /* height: 50px; */
  /* max-height: 64px; */
  /* max-width: 64px !important; */
  // width: auto !important;
  /* height: auto; */
  /* max-width: 100%; */
  /* max-height: 50%; */
}
img {
  vertical-align: middle;
  border-style: none;
  width: auto !important;
}

@media screen and (max-width: 576px) {
  .lingalleryContainer[data-v-6b553218] .lingallery .lingallery_thumbnails {
    overflow-x: auto;
    width: 100%;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
  }
  .lingalleryContainer[data-v-6b553218]
    .lingallery
    .lingallery_thumbnails
    .lingallery_thumbnails_content {
    margin-top: 2px;
    width: auto;
    white-space: nowrap;
  }
  .lingalleryContainer[data-v-6b553218]
    .lingallery
    .lingallery_thumbnails
    .lingallery_thumbnails_content
    .lingallery_thumbnails_content_elem {
    display: inline-block;
    scroll-snap-align: start;
  }

  .lingalleryContainer[data-v-40681078]
    .lingallery
    .lingallery_thumbnails
    .lingallery_thumbnails_content
    .lingallery_thumbnails_content_elem
    img {
    border: 2px solid #fff;
    cursor: pointer;
    /* height: 50px; */
    /* max-height: 64px; */
    /* max-width: 64px !important; */
    // width: auto !important;
    /* height: auto; */
    /* max-width: 100%; */
    /* max-height: 50%; */
  }
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  button {
    margin-left: 10px;
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    border: 0px solid rgba(0, 0, 0, 0) !important ;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important ;
    border-radius: 0px !important;
  }
}

</style>
