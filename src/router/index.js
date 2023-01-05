import { createRouter, createWebHistory } from "vue-router";
import GoodsListView from "../views/GoodsListView.vue";
import SignInView from "../views/SignInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "產品列表",
      component: GoodsListView,
    },
    {
      path: "/SignIn",
      name: "登入頁面",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignInView,
    },
  ],
});

export default router;
