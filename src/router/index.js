import Vue from "vue";
import Router from "vue-router";
// test
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/pages/Login/index.vue";

Vue.use(Router);

// https://v3.router.vuejs.org/zh/installation.html
const router = new Router({
  mode: "hash", // 本地不用history
  routes: [
    {
      path: "/index",
      redirect: { name: "home" },
    },
    {
      path: "/",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
