import { createRouter, createWebHistory } from 'vue-router'
import Resume from '@/vue/views/Resume.vue'
import Vacancies from './vue/views/Vacancies.vue'
import NotFound from './vue/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/vacancies',
    name: 'vacancies',
    component: Vacancies,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

// Fix for GitHub Pages
const redirect = sessionStorage.redirect
if (redirect) {
  sessionStorage.removeItem('redirect')
  history.replaceState(null, '', redirect)
}

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})
