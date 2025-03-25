import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/vue/views/Home.vue'
import AboutView from '@/vue/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
