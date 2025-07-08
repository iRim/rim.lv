import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/vue/views/Home.vue'
import Framework from '@/vue/views/Framework.vue'
import NotFound from './vue/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/framework',
    name: 'framework',
    component: Framework,
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
