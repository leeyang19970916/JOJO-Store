<template>
  <div
    id="FrontPage"
    style="background: rgba(248, 248, 248); margin-top: 50px !important"
  >
    <div id="CouponAD" class="text-center py-1">
      <strong class="h4 text-monospace" style="font-size: 22px">
        <span
          style="
            color: darkslategray;
            letter-spacing: 2.5px;
            font-weight: bolder;
          "
          >開幕好禮<i class="fas fa-gifts ml-1"></i
        ></span>
        <br />
        <span class="my-2">
          輸入優惠券代碼 <i class="fas fa-angle-double-left"></i>
          <span class="font-weight-bolder" style="color: darkcyan">JOJO </span>
          <i class="fas fa-angle-double-right"></i>
        </span>
        <br />

        <span>即可享 <span style="color: darkcyan">6</span> 折優惠</span>
      </strong>
    </div>
    <!-- 開始 -->
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <swiper :options="swiperOption" class="h-100">
          <swiper-slide
            id="backgroundImage1"
            class="BackgroundIndex w-100"
            :style="{ backgroundImage: 'url(' + fenderOcean + ')' }"
            style="background-position: center; min-height: 690px"
          >
            <div class="title-position1">
              <div id="BackgroundIndex-title">
                <div class="text-white">
                  <div><h3 class="h1">A NEW KIND OF PLAYER</h3></div>
                  <div class="text-left"><h2 class="h2">PLAYER PLUS</h2></div>
                  <div class="text-left">
                    <a
                      class="
                        btn btn-danger btn-lg
                        px-3
                        py-2
                        mt-1
                        fa-2x
                        font-weight-bolder
                      "
                      @click.prevent="goToProduct('EG', 'Squier')"
                    >
                      SHOP NOW</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="title-position1-RWD">
              <div id="BackgroundIndex-title-RWD" class="d-none">
                <div class="text-white">
                  <div><h3 class="h6">A NEW KIND OF PLAYER</h3></div>
                  <div class="text-left"><h2 class="h6">PLAYER PLUS</h2></div>
                  <div class="text-left">
                    <a
                      class="btn btn-danger btn-lg px-2 mt-1 font-weight-bolder"
                      style="font-size: 14px"
                      @click.prevent="goToProduct('EG', 'Squier')"
                    >
                      SHOP NOW</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            id="backgroundImage1"
            class="BackgroundIndex w-100"
            :style="{ backgroundImage: 'url(' + AGbackGround + ')' }"
            style="background-position: center; min-height: 690px"
          >
            <div class="title-position2">
              <div id="BackgroundIndex-title">
                <div class="text-dark">
                  <div><h3 class="h2">COMPACT AND READY TO PLAY</h3></div>
                  <div class="text-left">
                    <h2 class="h1">CALIFORNIA MINI</h2>
                  </div>
                  <div class="text-left">
                    <a
                      class="
                        btn btn-danger btn-lg
                        px-3
                        py-2
                        mt-1
                        fa-2x
                        font-weight-bolder
                      "
                      @click.prevent="goToProduct('AG', 'Martin')"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="title-position2-RWD">
              <div id="BackgroundIndex-title-RWD" class="d-none">
                <div class="text-dark">
                  <div><h3 class="h6">COMPACT AND READY</h3></div>
                  <div class="text-left">
                    <h2 class="h6">CALIFORNIA MINI</h2>
                  </div>
                  <div class="text-left">
                    <a
                      class="btn btn-danger btn-lg px-2 mt-1 font-weight-bolder"
                      style="font-size: 14px"
                      @click.prevent="goToProduct('AG', 'Martin')"
                    >
                      SHOP NOW</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- 完成 -->
    <!-- RWD開始 -->
    <div id="carouselExampleFade-RWD" class="carousel slide d-none">
      <div class="carousel-inner">
        <swiper :options="swiperOption" class="h-100">
          <swiper-slide
            id="backgroundImage1"
            class="BackgroundIndex w-100"
            :style="{ backgroundImage: 'url(' + fenderOceanRWD + ')' }"
            style="background-position: center top; min-height: 250px"
          >
            <div
              class="RWD-Click-position btn text-primary"
              @click.stop="goToProduct('EG', 'Squier')"
            >
              <i class="fas fa-external-link-alt"></i>
            </div>
          </swiper-slide>
          <swiper-slide
            id="backgroundImage1"
            class="BackgroundIndex w-100"
            :style="{ backgroundImage: 'url(' + AGbackGroundRWD + ')' }"
            style="background-position: center top; min-height: 250px"
          >
            <div
              class="RWD-Click-position btn text-primary"
              @click="goToProduct('AG', 'Taylor')"
            >
              <i class="fas fa-external-link-alt"></i>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- 圖片下面內容開始 -->
    <div id="fontpage-content" class="container-fluid py-5">
      <h2 class="text-center mb-5">DISCOVER YOUR STYLE</h2>
      <div class="row d-flex justify-content-center">
        <div id="ThreeCards" class="col-xl-3 col-12 border bg-white">
          <div class="row">
            <div
              class="col-md-12 squarePicture"
              :style="{ backgroundImage: 'url(' + fenderpicture + ')' }"
            ></div>
            <div class="col-md-12 ml-3 mt-3 text-dark">
              <h6 class="h3">ElectricGuitar-Fender</h6>
              <p class="h6 mt-2 pr-3">
                Rarities. Exclusives. Demos. Customized one-off <br> guitar mods.
              </p>
              <p class="text-right mr-4 mt-3">
                <button
                  class="btn btn-deepgreen"
                  @click.prevent="goToProduct('EG', 'Fender')"
                >
                  SHOP EG
                </button>
              </p>
            </div>
          </div>
        </div>
        <div id="ThreeCards" class="col-xl-3 col-12 border mx-5 bg-white">
          <div class="row">
            <div
              class="col-md-12 squarePicture"
              :style="{ backgroundImage: 'url(' + epiphoneguitar + ')' }"
              style="background-position: center right 5%"
            ></div>
            <div class="col-md-12 ml-3 mt-3 text-dark">
              <h6 class="h3">AcousticGuitar-Gibson</h6>
              <p class="h6 mt-2">
                Uncommon colors. Distinctive builds. Limited availability. You
                won’t find these anywhere but here.
              </p>
              <p class="text-right mr-4 mt-3">
                <button
                  class="btn btn-deepgreen"
                  @click.prevent="goToProduct('AG', 'Gibson')"
                >
                  SHOP AG
                </button>
              </p>
            </div>
          </div>
        </div>
        <div id="ThreeCards" class="col-xl-3 col-12 border bg-white">
          <div class="row">
            <div
              class="col-md-12 squarePicture"
              :style="{ backgroundImage: 'url(' + indeximg3accessories + ')' }"
              style="background-position: bottom"
            ></div>
            <div class="col-md-12 ml-3 mt-3 text-dark">
              <h6 class="h3">Accessories-Capo</h6>
              <p class="h6 mt-2">
                The double-radius design conforms to the flat and <br> curved
                fingerboard to ensure the sound of the guitar.
              </p>

              <p class="text-right mr-4 mt-3">
                <button
                  class="btn btn-deepgreen text-white"
                  @click.prevent="goToProduct('AC', 'Capo')"
                >
                  SHOP AC
                </button>
              </p>
            </div>
          </div>
        </div>

        <!-- row的結尾 -->
      </div>

      <!-- 全新區域  -->

      <div id="index-bg-2" class="my-5">
        <div
          class="wrap"
          :style="{ backgroundImage: 'url(' + indexbackground1 + ')' }"
        >
          <div class="row">
            <div class="col-md-3 d-flex align-items-center index-BackgroundSet">
              <!-- style="opacity:0.75;min-height:480px;" bg-black text-white -->
              <div class="bg-context">
                <h5 class="h3 text-start pl-4">Music Is Life</h5>
                <p class="px-4">
                  From the expanded Builder’s Edition Collection to the compact
                  GT body shape and the American Dream Series, there are plenty
                  of fresh faces at YAMAHA this year.
                </p>
                <div class="text-center mx-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-white bg-white btn-block btn-sm"
                    @click.prevent="goToProduct('AG', 'YAMAHA')"
                  >
                    SHOP AG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="index-bg-2-RWD" class="my-5 d-none">
        <div
          class="wrap wrap-RWD"
          :style="{ backgroundImage: 'url(' + indexbackground1 + ')' }"
        >
          <div class="row pt-4">
            <div
              class="col-md-3 d-flex align-items-center index-BackgroundSet-RWD"
            >
              <div class="bg-context">
                <h5 class="h3 text-start pl-4">Music Is Life</h5>
                <p class="px-4">
                  From the expanded Builder’s Edition Collection to the compact
                  GT body shape and the American Dream Series, there are plenty
                  of fresh faces at YAMAHA this year.
                </p>
                <div class="text-center mx-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-white bg-white btn-block btn-sm"
                    @click.prevent="goToProduct('AG', 'YAMAHA')"
                  >
                    SHOP AG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 全新領域瑋八 -->

      <!-- 再來一個card2 -->
      <div class="">
        <div class="row d-flex justify-content-around">
          <!-- 1 -->
          <div class="col-lg-6 col-12">
            <div
              id="TwoCards"
              class="card mb-3 text-light"
              style="max-width: 1100px; border: solid 3px #30415d"
            >
              <div class="row no-gutters">
                <div class="col-sm-6 col-12">
                  <img
                    src="../../../assets/img/indexCard1.png"
                    width="100%"
                    alt="..."
                  />
                </div>
                <div class="col-sm-6 col-12">
                  <div class="card-body d-flex align-items-center h-100">
                    <div>
                      <h5 class="card-title h2 text-center">ACOUSTIC</h5>
                      <p class="card-text my-4 px-2">
                        classic sound and portability , don’t need anything else
                        to make them sing. Just pick one up and start.
                      </p>
                      <button
                        type="button"
                        class="btn btn-light btn-block btn-lg"
                        @click.prevent="goToProduct('AG', 'Taylor')"
                      >
                        SHOP ACOUSTIC
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2 -->
          <div class="col-lg-6 col-12">
            <div
              id="TwoCards"
              class="card mb-3 text-light"
              style="max-width: 1100px; border: solid 3px #30415d"
            >
              <div class="row no-gutters">
                <div class="col-sm-6 col-12">
                  <img
                    src="../../../assets/img/indexCard2.png"
                    width="100%"
                    alt="..."
                  />
                </div>
                <div class="col-sm-6 col-12">
                  <div class="card-body d-flex align-items-center h-100">
                    <div>
                      <h5 class="card-title h2 text-center">ACCESSORIES</h5>
                      <p class="card-text my-4 px-2">
                        Clean up your sound with a fresh set of Elixir Spec
                        Strings — electric, acoustic.
                      </p>
                      <button
                        type="button"
                        class="btn btn-light btn-block btn-lg"
                        @click.prevent="goToProduct('AC', 'GString')"
                      >
                        SHOP ACCESSORIES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- card2結尾 -->

      <!-- 背景視差2 -->

      <div id="index-bg-2" class="mt-5">
        <div
          class="wrap"
          :style="{ backgroundImage: 'url(' + indexbackground2 + ')' }"
          style="background-position: center"
        >
          <div class="row justify-content-end">
            <div class="col-md-3 d-flex align-items-center index-BackgroundSet">
              <div>
                <h5 class="h3 text-start pl-4">Music Is Life</h5>
                <p class="px-4 mt-2">
                  Play it in your room, on the beach and everywhere in between.
                  Acoustic guitars are loved for their classic sound and
                  portability — plus you don’t need anything else to make them
                  sing. Just pick one up and start strumming.
                </p>
                <div class="text-center mx-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-white bg-white btn-block btn-sm"
                    @click.prevent="goToProduct('EG', 'Epiphone')"
                  >
                    SHOP EG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="index-bg-2-RWD" class="mt-5 d-none">
        <div
          class="wrap wrap-RWD"
          :style="{ backgroundImage: 'url(' + indexbackground2 + ')' }"
          style="background-position: bottom left 5%"
        >
          <div class="row pt-5 justify-content-end">
            <div
              class="col-md-3 d-flex align-items-center index-BackgroundSet-RWD"
            >
              <div>
                <h5 class="h3 text-start pl-4">Music Is Life</h5>
                <p class="px-4 mt-2">
                  Play it in your room, on the beach and everywhere in between.
                  Acoustic guitars are loved for their classic sound and
                  portability — plus you don’t need anything else to make them
                  sing. Just pick one up and start strumming.
                </p>
                <div class="text-center mx-4 mt-5">
                  <button
                    type="button"
                    class="btn btn-white bg-white btn-block btn-sm"
                    @click.prevent="goToProduct('EG', 'Epiphone')"
                  >
                    SHOP EG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import fenderOcean from "../../../assets/img/fenderc海洋.jpg";
import AGbackGround from "../../../assets/img/indexAG.jpg";
import fenderpicture from "../../../assets/img/tele&stro.jpg";
import epiphoneguitar from "../../../assets/img/epiphone_promo-1_frontier.png";
import accessories from "../../../assets/img/AnyConv.com__indeximg3accessories.jpg";
import indexbackground1 from "../../../assets/img/indexBackground/backgroundFixed1.jpg";
import indexbackground2 from "../../../assets/img/indexBackground/backgroundFixed2.jpg";
import fenderOceanRWD from "../../../assets/img/FontBage-RWD/fenderc海洋1288630.jpg";
import AGbackGroundRWD from "../../../assets/img/FontBage-RWD/indexAG11288630.jpg";
// let vm = null;
export default {
  data() {
    return {
      swiperOption: {
        autoplay: 5500,
        speed: 1000,
        // loop: false,
        effect: "fade",
        grabCursor: false,
      },
      fenderOcean: fenderOcean,
      AGbackGround: AGbackGround,
      fenderpicture: fenderpicture,
      epiphoneguitar: epiphoneguitar,
      indeximg3accessories: accessories,
      indexbackground1: indexbackground1,
      indexbackground2: indexbackground2,
      fenderOceanRWD: fenderOceanRWD,
      AGbackGroundRWD: AGbackGroundRWD,
      // getNowPage:""
    };
  },
  methods: {
    goToProduct(id1, id2) {
      const vm = this;

      // vm.getNowPage = id;
      let genderStr = `/${id1}`;
      vm.$router
        .push({ path: genderStr, query: { id: id2 } })
      //   .catch((err) => {});
      // $("html,body").animate({ scrollTop: 0 }, 333);
    },
  },

  created() {
    $("html,body").animate({ scrollTop: 0 }, 0);
   
  },
};
</script>

<style lang="scss">
@import "../../../../src/assets/all.scss";
.wrap {
  background-position: center right;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  min-height: 480px;
  max-height: 480px;
}
.wrap-RWD {
  background-position: center right;
  background-size: cover;
  background-attachment: scroll;
  overflow: hidden;
  min-height: 480px;
  max-height: 480px;
}
.bg-context {
  z-index: 800 !important;
  opacity: 1;
}
.index-BackgroundSet {
  background: rgba(51, 50, 50, 0.5);
  color: white;
  // color: rgb(71, 70, 70);
  min-height: 480px;
  min-width: auto;
}
.index-BackgroundSet-RWD {
  // background: rgba(51, 50, 50, 0.5);
  color: white;
  // color: rgb(71, 70, 70);
  min-height: 480px;
  min-width: auto;
}
#ThreeCards:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#TwoCards {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
#TwoCards:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
#FrontPage .carousel .carousel-item {
  height: 600px;
}
.title-position1 {
  position: absolute;
  top: 40%;
  left: 10%;
}
.title-position1-RWD {
  position: absolute;
  top: 39%;
  left: 7%;
}

.title-position2 {
  position: absolute;
  top: 45%;
  left: 7%;
}
.title-position2-RWD {
  position: absolute;
  top: 35%;
  left: 8%;
}

#CouponAD {
  // background: (176, 196, 222,0.75);
  background-color: rgba(160, 176, 192, 0.507) !important;
  letter-spacing: 1.5px;
  color: dimgray;
}

.RWD-Click-position {
  position: absolute;
  bottom: 35%;
  right: -2%;
  font-size: 1.2rem !important;
}
</style>
