import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home }
];

const router = new VueRouter({ routes });

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
