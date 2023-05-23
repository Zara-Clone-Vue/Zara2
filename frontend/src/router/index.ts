import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '../components/UserProfile.vue';
import AddressForm from '../components/AddressForm.vue';
import EmailForm from '../components/EmailForm.vue';
import PasswordForm from '../components/PasswordForm.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
  } ,
  {
    path: '/user-profile/address',
    name: 'Address',
    component: AddressForm,
  },
  {
    path: '/user-profile/email',
    name: 'Email',
    component: EmailForm,
  },
  {
    path: '/user-profile/password',
    name: 'Password',
    component: PasswordForm,
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
