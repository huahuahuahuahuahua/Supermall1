// import Vue from 'vue'
// import { createApp } from 'vue'
// import VueRouter from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

// Vue.use(VueRouter)
const Cart =()=>import('../views/cart/Cart')
const Category =()=>import('../views/category/Category')
const Home =()=>import('../views/home/Home')
const Profile =()=>import('../views/profile/Profile')
const Detail=()=>import('../views/detail/Detail')
const routes =[
  {
    path:'',
    redirect:'/home',
  },
  {
   path:'/home',
   component:Home
  },
  {
  path:'/category',
  component:Category,

  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

// const router = new VueRouter({
// routes,
// mode:"history"
// })

const router = createRouter({
  routes,
    history: routerHistory,
     /*
      *   在这里和vue2一样写路由配置
     */
})

export default router
