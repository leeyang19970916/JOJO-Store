// bus.js 中
import Vue from 'vue';
Vue.prototype.$bus = new Vue();
// 成功
// this.$bus.$emit('message:push',"這是一段訊息","success");

// 失敗
// this.$bus.$emit('message:push',"加入購物車","success");