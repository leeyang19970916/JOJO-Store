<template>
  <div>
    <div class="text-right mr-2 mt-5">
      <button class="btn btn-success mt-4" @click="OpenCouponModal('New')">
        建立新優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>優惠券名稱</th>
          <th>折扣碼code</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ item.due_date }}</td>
          <td>
            <div v-if="item.is_enabled" class="text-success font-weight-bold">
              啟用
            </div>
            <div v-else>未啟用</div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click.prevent="OpenCouponModal('Edit', item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="OpendelCouponModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 編輯跟新增的modal -->
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div
      class="modal fade"
      id="AddCouponModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
              優惠券
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-2">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                placeholder="優惠券標題"
                id="title"
                class="form-control"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="form-group">
              <label for="couponcode">折扣碼code</label>
              <input
                type="text"
                placeholder="輸入折扣碼"
                id="couponcode"
                class="form-control"
                v-model="tempCoupon.code"
              />
            </div>
            <div class="form-group">
              <label for="percent">折扣百分比(%)</label>
              <input
                type="number"
                placeholder="65%"
                id="percent"
                class="form-control"
                v-model="tempCoupon.percent"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input
                type="date"
                id="due_date"
                class="form-control"
                v-model="tempCoupon.due_date"
              />
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click.prevent="updateCoupon()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除modal -->
    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5
              class="modal-title font-weight-bold text-white"
              id="exampleModalLabel"
            >
              刪除優惠券
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mt-3">
            <p>
              確定要刪除
              <strong class="text-danger">{{ tempCoupon.title }} </strong>
              (刪除後將無法復原)
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delCoupon()">
              確定
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 不可以超過 -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      isNew: false, //區分是新增還是編輯
    };
  },
  methods: {
    getCoupon(page = 1) {
      //桌面上取得優惠券列表 呈現的部分
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons?page=${page}`;
  
      vm.$store.dispatch("updateLoading", true);
      vm.$http.get(api).then((response) => {
        console.log(response.data); //裡面有coupons[]也有頁碼
        if (response.data.success) {
          vm.$store.dispatch("updateLoading", false);
          vm.coupons = response.data.coupons;
        }
      });
    },
    OpenCouponModal(type, item) {
      const vm = this;
      if (type == "New") {
        vm.tempCoupon = {};
        vm.isNew = true;
      } else {
        vm.tempCoupon = { ...item };
        vm.isNew = false;
      }
      $("#AddCouponModal").modal("show");
    },
    updateCoupon() {
      //編輯或新增
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
      let httpMethod = "post";
      if (!vm.isNew) {
        //編輯
        httpMethod = "put";
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      }

      vm.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $("#AddCouponModal").modal("hide");
          vm.getCoupon();
          console.log(vm.tempCoupon.is_enabled);
        }
      });
    },

    OpendelCouponModal(item) {
      $("#delCouponModal").modal("show");
      this.tempCoupon = { ...item };
    },
    delCoupon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;

      vm.$http.delete(api).then((response) => {
        console.log(response.data); //裡面有coupons[]也有頁碼
        if (response.data.success) {
          $("#delCouponModal").modal("hide");
          vm.getCoupon();
        }
      });
    },
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token !== "") {
      this.axios.defaults.headers.common["Authorization"] = token;
      this.getCoupon();
    }
  },
};
</script>