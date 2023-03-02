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
import DecoPage from '../views/DecoPage.vue'
import PaperPage from '../views/PaperPage.vue'
import ToolPage from '../views/ToolPage.vue'
import WritingPage from '../views/WritingPage.vue'
import EditItem from '../views/EditItem.vue'
import EditUser from '../views/EditUser.vue'
import HistoryPage from '../views/HistoryView.vue'
import UserView from '../views/UserView.vue'
import EditProfile from '../views/EditProfile.vue'


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
    path: '/SelectedItems/:id',
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
  },
  {
    path: '/deco',
    name: 'Decorate',
    component: DecoPage
  },
  {
    path: '/paper',
    name: 'Paper',
    component: PaperPage
  },
  {
    path: '/tool',
    name: 'Tool',
    component: ToolPage
  },
  {
    path: '/write',
    name: 'Writing',
    component: WritingPage
  },
  {
    path: '/edititem',
    name: 'EditItem',
    component: EditItem
  },
  {
    path: '/edituser',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryPage
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: EditProfile
  }
  



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
