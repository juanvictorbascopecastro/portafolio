import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/features/home/pages/HomeView.vue"),
  },
  {
    path: "/politicas-de-privacidad",
    name: "PrivacyPolicy",
    component: () => import("@/features/privacy/pages/PrivacyPolicyView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: () => import("@/features/errors/pages/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Activar NProgress en navegación
router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
