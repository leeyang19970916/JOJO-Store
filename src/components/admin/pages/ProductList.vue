<template>
  <div>
    <div class="text-right mr-2 mt-5">
      <button class="btn btn-success mt-4" @click="OpenModal('OpenNew')">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="200">分類</th>
          <th width="600">產品名稱</th>
          <th width="200">原價</th>
          <th width="200">售價</th>
          <th width="150">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="pl-3">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right pr-5">
            {{ item.origin_price || 0 | currency }}
          </td>

          <td class="text-right pr-5">{{ item.price || 0 | currency }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success font-weight-bold"
              >啟用</span
            >
            <span v-else>未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="OpenModal('Edit', item)"
            >
              編輯
            </button>

            <button
              class="btn btn-outline-danger btn-sm"
              @click.prevent="openDelModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!--Modal-->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span class="font-weight-bold">新增產品</span>
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
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址(imageUrl)</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="tempProduct.imageUrl"
                    id="image"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-pulse"
                      v-if="status.fileUpLoading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    @change="uploadFile"
                    ref="files"
                  />
                </div>
                <img :src="tempProduct.imageUrl" class="img-fluid" alt="" />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題(title)</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="tempProduct.title"
                    id="title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類(category)</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="tempProduct.category"
                      id="category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位(unit)</label>
                    <input
                      type="unit"
                      class="form-control"
                      v-model="tempProduct.unit"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價(origin_price)</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="tempProduct.origin_price"
                      id="origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價(price)</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="tempProduct.price"
                      id="price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述(description)</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="tempProduct.description"
                    id="description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容(content)</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="tempProduct.content"
                    id="content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-primary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click.prevent="updateProduct()"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除 -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger font-weight-bold text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
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
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="delProduct()"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



      


<script>
import $ from "jquery";
export default {
  data() {
    return {
      products: [], //item抓的
      tempProduct: {},
      isNew: false,

      status: {
        fileUpLoading: false,
      },
    };
  },
  methods: {
    OpenModal(type, item) {
      if (type == "OpenNew") {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        //編輯
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      $("#productModal").modal("show");
    },
    updateProduct() {
      //確定新增or 編輯後更改原本內容
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      let httpmethod = "post"; //新增

      if (!vm.isNew) {
        httpmethod = "put";
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      }
      this.$http[httpmethod](api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getproduct();
        }
      });
    },
    getproduct() {
      //表現在畫面上
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products/all`;
      vm.$store.dispatch("updateLoading", true);
      vm.$http.get(api).then((response) => {
        console.log(response.data);
        vm.$store.dispatch("updateLoading", false);
        vm.products = response.data.products;
      });
    },
    openDelModal(item) {
      $("#delProductModal").modal("show");
      this.tempProduct = { ...item };
    },
    delProduct() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $("#delProductModal").modal("hide");
          vm.getproduct();
        } else {
          alert("不可以色色");
        }
      });
    },
    uploadFile() {
      console.log(this);
      const vm = this;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData(); // Currently empty
      formData.append("file-to-upload", uploadedFile); // (name的值,檔案的位子).
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`; //戴上API 戴上傳送內容formdata 戴上物件
      vm.status.fileUpLoading = true;
      vm.$http
        .post(url, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          vm.status.fileUpLoading = false;
          if (response.data.success) {
            // vm.tempProduct.imageUrl=response.data.imageUrl
            //  console.log(vm.tempProduct)
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
          } else {
            this.$bus.$emit("message:push", response.data.message, "danger");
          }
        });
    },
  }, //methods尾巴

  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token !== "") {
      this.axios.defaults.headers.common["Authorization"] = token;
      this.getproduct();
    }
    console.log( this.products)
      
 
  },
};
</script>