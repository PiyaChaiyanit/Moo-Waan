import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import AllShop from '../views/ShopPage.vue'
import Admin from '../views/AdminPage.vue'
import SelectedItems from '../views/SelectedItems.vue'
import BasketPage from '../views/BasketPage.vue'
import PaymentPage from '../views/PaymentView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
    
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: AllShop
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/SelectedItems',
    name: 'SelectedItems',
    component: SelectedItems
  },
  {
    path: '/BasketPage',
    name: 'BasketPage',
    component: BasketPage
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: PaymentPage
  }
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
