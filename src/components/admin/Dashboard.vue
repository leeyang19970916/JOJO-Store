<template>
  <div>
    <loading :active.sync="isLoading" ></loading>
    <Navbar />
    <Alert />

    <div class="container-fluid">
      <div class="row">
        <Sidebar  />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>




<script>
import Sidebar from "@/components/admin/pages/Sidebar";
import Navbar from "@/components/admin/pages/Navbar";
import Alert from "@/components/AlertMessage";
export default {
  data() {
    return {};
  },
  components: {
    Alert,
    Sidebar,
    Navbar,
  },
  computed:{
isLoading(){
  return this.$store.state.isLoading
}

  },

  created() {

  },
};
</script>
<style lang="scss">
  @import "../../assets/all.scss";
    @import "../../assets/helpers/dashboard.scss";
</style>