import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../components/Home.vue'
import ContactPage from '../components/ContactPage.vue'
import login from '../components/login.vue'
import search from '../components/search.vue'
import HelpPage from '../components/HelpPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  } ,{
    path: '/ContactPage',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
