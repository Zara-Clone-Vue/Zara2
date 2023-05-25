import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import UserProfile from '../components/UserProfile.vue';
import AddressForm from '../components/AddressForm.vue';
import EmailForm from '../components/EmailForm.vue';
import PasswordForm from '../components/PasswordForm.vue';
import HomeView from '../components/Home.vue'
import ContactPage from '../components/ContactPage.vue'
import login from '../components/login.vue'
import search from '../components/search.vue'
import HelpPage from '../components/HelpPage.vue'


const routes = [
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  },
  {
    path: '/login',
    name: 'login',
    component: login
  } ,
  {
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
    path: '/search',
    name: 'search',
    component: search
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
