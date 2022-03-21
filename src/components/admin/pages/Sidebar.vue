<template >
  <div>
    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-12 d-md-block bg-white sidebar collapse pl-5 pr-5"
        >
          <div class="sidebar-sticky pt-3">
            <h6
              class="
                sidebar-heading
                d-flex
                justify-content-between
                align-items-center
                px-3
                mt-4
                mb-1
                text-muted
              "
            >
              <span>管理員</span>
              <a
                class="d-flex align-items-center text-muted"
                href="#"
                aria-label="Add a new report"
              >
                <span data-feather="plus-circle"></span>
              </a>
            </h6>

            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :class="{
                    'nav-link-active':
                      this.$route.path === '/admin/ProductList',
                  }"
                  to="/admin/ProductList"
                  ><i class="fas fa-shopping-cart mr-2"></i>產品列表</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/admin/Coupons"
                  :class="{
                    'nav-link-active': this.$route.path === '/admin/Coupons',
                  }"
                  ><i class="fas fa-money-bill mr-2"></i>優惠券</router-link
                >
              </li>
            </ul>

            <h6
              class="
                sidebar-heading
                d-flex
                justify-content-between
                align-items-center
                px-3
                mt-4
                mb-1
                text-muted
              "
            >
              <span>購物網站</span>
              <a
                class="d-flex align-items-center text-muted"
                href="#"
                aria-label="Add a new report"
              >
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/"
                  :class="{ 'nav-link-active': this.$route.path === '/' }"
                  ><i class="fas fa-home mr-2"></i> 回首頁</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  data() {
    return {};
  },
};
</script>
<style >
.nav-link-active {
  color: rgb(224, 65, 92) !important;
  font-weight: bolder;
  font-size: 18px;
}
</style>