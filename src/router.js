import { createRouter, createWebHistory } from 'vue-router'
import Resume from '@/vue/views/Resume.vue'
import Cheatsheets from './vue/views/Cheatsheets.vue'
import Contact from './vue/views/Contact.vue'
import NotFound from './vue/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/cheatsheets',
    name: 'cheatsheets',
    component: Cheatsheets,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
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
