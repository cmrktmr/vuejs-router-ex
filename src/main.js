import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history", // hash default olan
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return {};
  },
});

router.beforeEach( (to,from,next)=>{
  console.log("global kontolke")
  next();
})

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
