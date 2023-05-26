import { createRouter, createWebHistory } from 'vue-router'

import UserProfile from '../components/UserProfile.vue';
import AddressForm from '../components/AddressForm.vue';
import EmailForm from '../components/EmailForm.vue';
import PasswordForm from '../components/PasswordForm.vue';
import HomeView from '../components/Home.vue'
import ContactPage from '../components/ContactPage.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import search from '../components/search.vue'
import men from '../components/men.vue'
import kids from '../components/kids.vue'
import women from '../components/woman.vue'
import beauty from '../components/beauty.vue'
import one from '../components/oneone.vue'
import HelpPage from '../components/HelpPage.vue'
import HelpDeatils from '../components//HelpDetails.vue'
const routes = [
  {
    path: '/help',
    name: 'Help',
    component: HelpPage
  },
  {
    path: '/HelpDeatils',
    name: 'HelpDeatils',
    component: HelpDeatils
  },
  {
    path: '/login',
    name: 'login',
    component: login
  } , {
    path: '/signup',
    name: 'signup',
    component: signup
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
    component: search,
  },
  {
    path: "/men",
    name: 'men',
    component : men,
  },
  {
    path: "/kids",
    name: 'kids',
    component: kids,
  },
  {
    path:"/women",
    name: 'women',
    component:women,
  },
  {
    path:"/beauty",
    name: 'beauty',
    component:beauty,
  },
  {
     path:'/one',
     name: 'one',
     component:one
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
