import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Music = () => import('../views/Music.vue')
const Recommended = () => import('../views/Recommended.vue')
const Dynamic = () => import('../views/Dynamic.vue')
const Mine = () => import('../views/Mine.vue')

Vue.use(VueRouter)

// vue-router的动态路由以及如何获取传过来的动态参数
// router = > index.js  path:/:id
// 使用router对象的params.id

// route:路由信息对象 path params（post,name） query（get） name
// router 路由实例对象 路由的跳转方法 钩子函数
const routes = [
  {
    path: '/',
    name: 'Music',
    component: Music
  },
  {
    path: '/recommended',
    name: 'Recommended',
    component: Recommended
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: Dynamic
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
