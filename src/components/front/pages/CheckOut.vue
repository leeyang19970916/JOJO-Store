<template>
  <div id="CheckOut" style="margin-top: 50px !important;">
    <loading :active.sync="isLoading"></loading>
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb py-2 pl-4">
      <ol class="breadcrumb"
       style="font-size: 16px; background: #edd6b2">
        <li class="breadcrumb-item text-primary">
          <router-link to="/">Home</router-link>
        </li>

        <li class="breadcrumb-item active text-light" aria-current="page">Bag</li>
      </ol>
    </nav>

    <!-- line -->

    <div id="CheckOut-View" class="container my-5">
      <div id="CheckOut-StepList" class="row  pr-3">
        <div
          class="
            col-12
            d-flex
            justify-content-center
            align-items-center
            mt-2
            h5
          "
        >
          <div
            class="Step-borderset text-center text-warning py-3"
 style="background:#E4E6CF;"
            :class="{ 'checkOut-active': step == 1 }"
          >
            1.確認購物清單
          </div>
          <div class="mx-1">
            <i class="fas fa-long-arrow-alt-right fa-2x"></i>
          </div>
          <div
            class="Step-borderset text-center text-warning py-3"
           style="background:#E4E6CF;"
            :class="{ 'checkOut-active': step == 2 }"
          >
            2. 填寫訂購資料
          </div>
          <div class="mx-1">
            <i class="fas fa-long-arrow-alt-right fa-2x"></i>
          </div>
          <div
            class="Step-borderset text-center text-warning py-3"
          style="background:#E4E6CF;"
            :class="{ 'checkOut-active': step == 3 }"
          >
            3. 完成訂購
          </div>
        </div>
      </div>

      <!-- RWD -->
      <div id="CheckOut-StepList-RWD" class="d-none">
        <div v-if="step == 1" class="d-flex justify-content-center">
          <div class="bg-info w-75 py-2 text-center text-white rounded">
            1.確認購物清單
          </div>
        </div>

        <div v-if="step == 2" class="d-flex justify-content-center">
          <div class="bg-info w-75 py-2 text-center text-white rounded">
            2.填寫訂購資料
          </div>
        </div>

        <div v-if="step == 3" class="d-flex justify-content-center">
          <div class="bg-info w-75 py-2 text-center text-white rounded">
            3.完成訂購
          </div>
        </div>
      </div>
      <!-- 完成訂購 -->
      <!-- step1 -->

      <div v-if="step == 1">
        <!-- 表單 -->

        <div>
          <div id="CheckOut-table" class="row d-flex justify-content-center">
            <div class="col-md-11 my-5">
              <table class="table table-image table-hover">
                <thead>
                  <tr class="font-weight-bolder">
                    <th scope="col" width="100"></th>
                    <th
                      scope="col"
                      width="350"
                      style="text-align: start !important"
                    >
                      Product
                    </th>
                    <th scope="col" width="150">Qty/Unit</th>
                    <th scope="col" width="150">Price</th>
                    <th scope="col" width="150">Total</th>
                    <th scope="col" width="100">Actions</th>
                  </tr>
                </thead>
                <tbody class="text-dark">
                  <tr v-for="item in Cart.carts" :key="item.id" class="">
                    <td>
                      <img
                        :src="item.product.imageUrl"
                        style="max-height: 100px"
                        class="img-fluid img-thumbnail border-none"
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
                      <span> {{ item.product.title }}</span> 

                <div>    <span class="mt-3" v-if="item.feature">{{
                        item.feature
                      }}</span> </div>  
                     
                      <span
                        v-if="item.coupon"
                        class="text-secondary mt-2"
                        style="font-size: 10px"
                      >
                        <i class="fas fa-check"></i> {{ item.coupon.title }}
                      </span>
                    </td>
                    <td style="vertical-align: middle">
                      {{ item.qty || 1 }}/{{ item.product.unit || "個" }}
                    </td>
                    <!-- 價格 -->
                    <td style="vertical-align: middle" v-if="!item.coupon">
                      <span> {{ item.product.price | currency }}</span>
                    </td>
                    <td style="vertical-align: middle" v-else>
                      <span style="text-decoration: line-through" >
                        {{ item.product.price | currency }}</span
                      >
                      <div class="mt-2 text-secondary">
                        <span>
                          {{ (item.product.price * 0.6) | currency }}</span
                        >
                      </div>
                    </td>
                    <!-- 總計 -->
                    <td
                      style="vertical-align: middle"
                      :class="{
                        'text-secondary':
                          item.final_total !== item.product.price,
                      }"
                    >
                      {{ item.final_total | currency }}
                    </td>
                    <!-- 刪除 -->
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
            </div>
          </div>

          <!-- RWD -->
          <div id="CheckOut-table-RWD" class="my-5 d-none">
            <table class="table table-sm table-hover">
              <thead>
                <tr class="font-weight-bold">
            <th class="text-start"></th>
                  <th scope="col"  colspan="1" class="text-start">Product</th>
                  <th scope="col"  class="text-center" width="30">Qty</th>
                  <th scope="col" class="text-center" >Total</th>
                  <th  class="text-right">Del</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in Cart.carts"
                  :key="item.id"
                  class="border-bottom"
                >
                  <th class="text-center">
                    <img
                      :src="item.product.imageUrl"
                      style="max-height: 70px; min-height: 20px !important; vertical-align: middle"
                      class="img-fluid img-thumbnail border-none"
                      alt="Sheep"
                    />
                  </th>
                  <th scope="row" class="text-dark" style="vertical-align: middle">
                    <span
                      v-if="item.product.category[1] == 'C'"
                      style="font-size: 10px; max-width: 90px"
                      class="font-weight-bold d-inline-block text-truncate"
                    >
                      {{ item.product.title }}</span
                    >

                    <span
                      v-else
                      style="font-size: 10px; max-width: 110px"
                      class="font-weight-bold d-inline-block text-truncate"
                    >
                      {{ item.product.title }}</span
                    >

              <div>
                    <span style="font-size: 10px" v-if="item.feature">{{
                      item.feature
                    }}</span>
            
           
                </div>  
     
                  
                    <span
                      v-if="item.coupon"
                      class="text-secondary"
                      style="font-size:10px"
                    >
                      <i class="fas fa-check"></i> {{ item.coupon.title }}
                    </span>
                  </th>
                  <td
                    class="text-center"
                    style="font-size: 12px; vertical-align: middle"
                  >
                    {{ item.qty || 1 }}
                  </td>
                  <td
                    style="font-size: 12px; vertical-align: middle"
                    class="text-center"
                    :class="{
                      'text-secondary':
                        item.final_total !==
                        item.product.price * (item.qty || 1),
                    }"
                  >
                    {{ item.final_total | currency }}
                  </td>
                  <td
                    class="text-right"
                    style="font-size: 15px; vertical-align: middle"
                  >
                    <a class="text-dark" href="#" @click.prevent="deleteCartProduct(item.id)">
                      <i class="far fa-trash-alt "></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 表單尾巴 -->
          <div>
            <div class="row d-flex justify-content-around pb-5">
              <div class="col-md-4">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="優惠券代碼"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model="Coupon_code"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary text-white px-4 py-1"
                      type="button"
                      id="button-addon2"
                      @click.prevent="AddCoupon()"
                    >
                      確認
                    </button>
                  </div>
                </div>
                <!-- 套用成功 -->

            
                
                <p
                  v-if="Cart.total !== Cart.final_total"
                  class="mt-3 text-secondary"
                  style="font-size: 15px"
                >
                  <i class="fas fa-check-circle"></i> 已套用優惠券
                </p>
                <!-- <p v-else class="mt-3 text-danger" style="font-size:8px"> <i class="fas fa-check-circle"></i>  輸入錯誤</p> -->
              </div>
              <!-- 金額計算區 -->
              <div class="col-md-4 col-10 Money-border h6 py-3">
                <div class="d-flex justify-content-between mt-2">
                  <div pl-3><p class="text-dark">商品金額</p></div>
                  <div>
                    <p>{{ Cart.total | currency }}</p>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between"
                  v-if="Cart.total !== Cart.final_total"
                >
                  <div><p class="text-dark">折價券</p></div>
                  <div>
                    <p class="text-secondary">
                      <span style="font-size: 22px">-</span>
                      {{ (Cart.total - Cart.final_total) | currency }}
                    </p>
                  </div>
                </div>

                <div class="d-flex justify-content-between border-bottom">
                  <div><p class="text-dark">運費</p></div>
                  <div v-if="Cart.final_total < 2000"><p>$120</p></div>
                  <div v-else class="text-right">
                    <p class="text-secondary">Free</p>
                    <p style="font-size: 10px" class="text-secondary">
                      (2000免運<i class="fas fa-check-double"></i>)
                    </p>
                  </div>
                </div>

                <div class="d-flex justify-content-between mt-3">
                  <div><p class="text-dark">應付金額</p></div>
                  <div>
                    <p class="text-secondary">{{ finalMoney | currency }}</p>
                  </div>

                  <!-- useCouponFinalTotal -->
                </div>
              </div>
            </div>
            <!-- 下盤尾八 -->
            <div class="d-flex justify-content-end stepBtn mt-3">
              <button
                class="btn btn-outline-primary"
                @click.prevent="stepChange(2)"
              >
                下一步<i class="fas fa-hand-point-right pl-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 下一步 -->
      <!-- step2 -->
      <div v-if="step == 2">
        <div class="row d-flex justify-content-center">
          <div class="col-12">
            <div class="my-5 row justify-content-center">
              <form class="col-md-8">
                <div class="py-3 px-5  text-light text-center h4 mb-4" style="background:#DCDCD9">
                  訂購人資訊
                </div>
                <div class="row">
                  <div class="col-sm-6 col-12">
                    <div class="form-group text-start ">
                   <label for="username" class="text-start text-light">訂購人姓名</label>

                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="username"
                        :class="{ 'is-invalid': errors.has('name') }"
                        v-model="form.user.name"
                        placeholder="輸入姓名"
                        v-validate="'required'"
                      />

                      <span class="text-danger" v-if="errors.has('name')"
                        >姓名必須輸入
                      </span>
                    </div>
                  </div>

                  <div class="col-sm-6 col-12">
                    <div class="form-group">
                      <label for="usertel" class="text-light">訂購人電話</label>
                      <input
                        type="number"
                        class="form-control"
                        id="usertel"
                        name="tel"
                        :class="{ 'is-invalid': errors.has('tel') }"
                        v-model="form.user.tel"
                        placeholder="請輸入電話"
                        v-validate="'required'"
                      />
                      <span class="text-danger" v-if="errors.has('tel')"
                        >請輸入電話</span
                      >
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="useremail" class="text-light">訂購人Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="useremail"
                    :class="{ 'is-invalid': errors.has('email') }"
                    v-model="form.user.email"
                    placeholder="請輸入 Email"
                    v-validate="'required|email'"
                  />
                  <span class="text-danger" v-if="errors.has('email')">{{
                    errors.first("email")
                  }}</span>
                </div>

                <div class="form-group">
                  <label for="useraddress" class="text-light">訂購人地址</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    id="useraddress"
                    :class="{ 'is-invalid': errors.has('address') }"
                    v-model="form.user.address"
                    placeholder="請輸入地址"
                    v-validate="'required'"
                  />
                  <span class="text-danger" v-if="errors.has('address')"
                    >地址欄位不得留空</span
                  >
                </div>

                <div class="form-group">
                  <label for="comment" class="text-light">留言</label>
                  <textarea
                    name=""
                    id="comment"
                    class="form-control"
                    cols="10"
                    rows="5"
                    v-model="form.message"
                  ></textarea>
                </div>

                <div class="d-flex justify-content-between stepBtn mt-3">
                  <button class="btn btn-outline-dark" @click="stepChange(1)">
                    <i class="fas fa-hand-point-left"></i> 上一步
                  </button>
                  <button
                    class="btn btn-primary"
                    @click.prevent="createOrder()"
                  >
                    送出訂單<i class="fas fa-hand-point-right pl-2"></i>
                  </button>
                </div>
              </form>
            </div>
            <!-- 填資料尾八 -->
          </div>
        </div>
        <!-- 下盤尾八 -->
      </div>

      <!-- step3 -->

      <div v-if="step == 3">
        <div class="my-5 row justify-content-center">
          <form class="col-sm-12 col-12">
            <table id="CheckOut-table" class="table table-image table-hover">
              <thead>
                <tr class="font-weight-bolder">
                  <th scope="col" width="150">Product</th>
                  <th style="text-align: start !important"></th>
                  <th scope="col" width="200">Qty/Unit</th>
                  <th scope="col" width="200">Price</th>
                  <th scope="col" width="200">Total</th>
                </tr>
              </thead>
              <tbody class="text-dark">
                <tr v-for="item in Cart.carts" :key="item.id" class="mt-3">
                  <td>
                    <img
                      :src="item.product.imageUrl"
                      style="max-height: 100px"
                      class="img-fluid"
                      alt="Sheep"
                    />
                  </td>
                  <td
                    class="h6"
                    style="text-align: start !important; vertical-align: middle"
                  >
                    <span>{{ item.product.title }}</span> 

                  <div>  <span v-if="item.feature">{{ item.feature }}</span> </div>

                    <span
                      v-if="item.coupon"
                      class="text-secondary mt-2"
                      style="font-size: 8px"
                    >
                      <i class="fas fa-check"></i> {{ item.coupon.title }}
                    </span>
                  </td>
                  <td style="vertical-align: middle">
                    {{ item.qty || 1 }}/{{ item.product.unit || "個" }}
                  </td>
                  <!-- 價格 -->
                  <td v-if="!item.coupon" style="vertical-align: middle">
                    <span> {{ item.product.price | currency }}</span>
                  </td>
                  <td v-else style="vertical-align: middle">
                    <span style="text-decoration: line-through">
                      {{ item.product.price | currency }}</span
                    >
                    <div class="mt-2 text-secondary">
                      <span> {{ (item.product.price * 0.6) | currency }}</span>
                    </div>
                  </td>
                  <!-- 總計 -->
                  <td
                    style="vertical-align: middle"
                    :class="{
                      'text-secondary':
                        item.final_total !== item.product.price,
                    }"
                  >
                    {{ item.final_total | currency }}
                  </td>
                </tr>

                <tr class="border-top h5 text-primary font-weight-bolder">
                  <td class="text-right d-none d-sm-table-cell"></td>
                  <td colspan="3" class="text-right">
                    應付金額<span v-if="order.total < 2000">(含運費)</span>
                  </td>
                  <td class="text-right">
                    {{ useCouponFinalMoney | currency }}
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 這裡 -->
            <div id="CheckOut-table-RWD" class="d-none">
              <table class="table table-sm table-hover">
                <thead>
                  <tr class="font-weight-bold">
                   
                    <th scope="col" colspan="2" width="100">Product</th>
                    <th scope="col" class="text-center" >Qty</th>
                    <th scope="col" class="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in Cart.carts"
                    :key="item.id"
                    class="border-bottom"
                  >
                    <th class="text-center">
                      <img
                        :src="item.product.imageUrl"
                        style="max-height: 60px; min-height: 20px !important"
                        class="img-fluid img-thumbnail border-none"
                        alt="Sheep"
                      />
                    </th>
                    <th scope="row" style="vertical-align: middle">
                      <span
                        v-if="item.product.category[1] == 'C'"
                        style="font-size: 10px; max-width: 90px"
                        class="font-weight-bold d-inline-block text-truncate"
                      >
                        {{ item.product.title }}</span
                      >

                      <span
                        v-else
                        style="font-size: 10px; max-width: 110px"
                        class="font-weight-bold d-inline-block text-truncate"
                      >
                        {{ item.product.title }}</span
                      >

                  
                       <div> <span style="font-size: 10px" v-if="item.feature">{{
                          item.feature
                        }}</span>
                         </div> 
              
                      <span
                        v-if="item.coupon"
                        class="text-secondary"
                        style="font-size: 10px"
                      >
                        <i class="fas fa-check"></i> {{ item.coupon.title }}
                      </span>
                    </th>
                    <td
                      class="text-center"
                      style="font-size: 12px; vertical-align: middle"
                    >
                      {{ item.qty || 1 }}
                    </td>
                    <td
                      style="font-size: 15px; vertical-align: middle"
                      class="text-right text-secondary"
                      :class="{
                        'text-secondary':
                          item.final_total !==
                          item.product.price * (item.qty || 1),
                      }"
                    >
                      {{ item.final_total | currency }}
                    </td>
                  </tr>
                </tbody>
                <tfoot >
                  <!-- 這裡ACCESSORIES -->
                  <tr
                    class="border-top h5 text-primary font-weight-bolder"
                    style="font-size: 18px"
                  >
                    <td class="text-right   "></td>
                     <td class="text-right "></td>
                      <!-- <td class="text-right  "></td> -->
                    <td colspan="1" class="text-right" >
                      應付金額<span v-if="order.total < 2000">(含運費)</span>
                    </td>
                    <td class="text-right">
                      {{ useCouponFinalMoney | currency }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- 資料總結 -->
            <div class="row justify-content-center mt-5">
              <div class="col-sm-12 col-md-7 col-lg-6 col-12">
                <table
                  class="table table-borderless pt-5"
                  style="border: 3px solid #e9ecef"
                >
                  <tbody>
                    <tr>
                      <th class="text-primary font-weight-bold">姓名</th>
                      <td class="text-start text-dark">
                        {{ form.user.name }}
                      </td>
                    </tr>
                    <tr>
                      <th class="text-primary font-weight-bold">
                        訂購人電話
                      </th>
                      <td class="text-start">
                        {{ form.user.tel }}
                      </td>
                    </tr>
                    <tr>
                      <th width="200" class="text-primary font-weight-bold">
                        訂購人Email
                      </th>
                      <td class="text-start">
                        {{ form.user.email }}
                      </td>
                    </tr>

                    <tr>
                      <th class="text-primary font-weight-bold">
                        訂購人地址
                      </th>
                      <td class="text-start">
                        {{ form.user.address }}
                      </td>
                    </tr>
                    <tr>
                      <th class="text-primary font-weight-bold">付款狀態</th>
                      <td class="text-start">
                        <span
                          class="text-danger font-weight-bold"
                          v-if="!order.is_paid"
                          >尚未付款</span
                        >
                        <span v-else class="text-success font-weight-bold"
                          >付款完成</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="text-center mt-4">
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    v-if="!order.is_paid"
                    @click="payOrder()"
                  >
                    確認付款<i class="ml-2 fab fa-cc-visa"></i>
                  </button>
                  <button
                    v-else
                    @click="onClickHome()"
                    type="button"
                    class="btn btn-outline-primary "
                  >
                    回首頁<i class="fas fa-home"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- 下盤尾八 -->
      </div>
      <!-- 第三尾巴 -->
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      Cart: {},

      form: {
        message: "",
        user: {
          name: "",
          email: "",
          address: "",
          tel: "",
          // is_paid: true,
        },
      },
      order: {
        total: "",
        is_paid: "",
      },
      orderId: "",
      step: 1,
      Coupon_code: "",
      isLoading: false,
    };
  },
  methods: {
    getCartAllProduct() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        //裡面有coupons[]也有頁碼
        if (response.data.success) {
          vm.isLoading = false;
          vm.$store.dispatch("getCartAllProduct");
          vm.Cart = response.data.data;
          console.log(vm.Cart.carts);
          // (vm.IsShow = false), (vm.Forkfork = false);
        }
      });
    },

    deleteCartProduct(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          // console.log("成功刪除")
          //  console.log(vm.Cart.carts.length);
          vm.$store.dispatch("deleteCartProduct", id);
          this.$bus.$emit("message:push", "成功刪除", "danger");
          vm.getCartAllProduct();
          vm.isLoading = false;
          if (vm.Cart.carts.length <= 1) {
            this.$router.push({ path: "/" });
          }
        }
      });
    },

    AddCoupon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      // 確認
      const coupon = vm.Coupon_code;
      this.$http.post(api, { data: { code: coupon } }).then((response) => {
        if (response.data.success) {
          vm.getCartAllProduct();
        } else {
          this.$bus.$emit("message:push", "找不到優惠碼", "danger");
        }
      });
    },

    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const orderSend = vm.form;

      vm.$validator.validate().then((valid) => {
        if (valid) {
          this.$http.post(api, { data: orderSend }).then((response) => {
            //console.log('訂單建立', response.data)
            if (response.data.success) {
              vm.orderId = response.data.orderId;
              vm.step = 3;

              vm.getOrder();
              $("html,body").animate({ scrollTop: 0 }, 0);
            } else {
              this.$bus.$emit("message:push", "輸入錯誤", "danger");
            }
          });
        }
      });
    },

    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          this.$bus.$emit("message:push", "付款完成", "success");
          vm.$store.dispatch("getCartAllProduct");
          vm.getOrder();
        }
      });
    },
    onClickHome() {
      this.$router.push({ path: "/" });
      $("html,body").animate({ scrollTop: 0 }, 0);
    },

    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;

      this.$http.get(url).then((response) => {
        console.log(response.data);
        vm.order = response.data.order;
      });
    },

    stepChange(number) {
      const vm = this;
      vm.step = number;
      $("html,body").animate({ scrollTop: 0 }, 0);
    },
    // methods尾巴
  },

  computed: {
    // 沒有套用優惠券
    finalMoney() {
      if (this.Cart.final_total < 2000) {
        return Number(this.Cart.final_total) + 120;
      } else {
        return Number(this.Cart.final_total);
      }
    },

    useCouponFinalMoney() {
      if (this.order.total) {
        if (this.order.total < 2000) {
          return Number(this.order.total) + 120;
        } else {
          return this.order.total;
        }
      }
    },
  },

  created() {
    const vm = this;
    vm.getCartAllProduct();
    $("html,body").animate({ scrollTop: 0 }, 0);
  },
};
</script>
<style lang="scss">
@import "../../../assets/all.scss";

.Step-borderset {
  border-radius: 10px;
  //   border: 2px solid black;
  padding-left: 100px;
  padding-right: 100px;
}
.iconSet {
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
}
.borderSet {
  border: 2px solid slategray;
}
.Money-border {
  border: 3px solid #8496A4;
}
.checkOut-active {
  background:#B6B87F  !important;
  color: white !important;
  font-weight: bolder;
  letter-spacing: 0.5px;
}
.border-none {
  border: none !important;
}
.form-border {
  border-bottom: none !important;
}
</style>
