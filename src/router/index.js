import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hero from '../views/Hero.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Reset from '../views/Reset.vue'
import Loan from '../views/Loan.vue'
import AddProduct from '../views/AddProduct.vue'
import Products from '../views/Products.vue'
import Restaurants from '../views/Restaurants.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/orders',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/new-loan',
    name: 'Ticket',
    component: Loan
  },
  {
    path: '/new-product',
    name: 'newproduct',
    component: AddProduct
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/reset-password',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
