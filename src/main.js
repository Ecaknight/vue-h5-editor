import Vue from "vue";
import "modern-css-reset";
import App from "./App.vue";
import "@/common/element";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
