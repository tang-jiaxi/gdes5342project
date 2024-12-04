import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/Home.vue";
import GovTech from "./components/GovTech.vue";
import SASE from "./components/Sase.vue";
import Resume from "./components/resume.vue";

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
})

export default router;