import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import GovTech from "./pages/GovTech.vue";
import SASE from "./pages/Sase.vue";
import Portfolio from "./pages/Portfolio.vue";
import RadioK from "./pages/RadioK.vue";
import WTL from "./pages/Wtl.vue";
import Resume from "./pages/Resume.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/govtech',
    name: 'GovTech',
    component: GovTech
  },
  {
    path: '/sase',
    name: 'SASE',
    component: SASE
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/radioK',
    name: 'RadioK',
    component: RadioK
  },
  {
    path: '/wtl',
    name: 'WTL',
    component: WTL
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'Invalid',
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }; // Smooth scrolling to top
  }
})

export default router;