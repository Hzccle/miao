import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const _import_ = file => ()=> import('@/views/'+file+'.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: _import_('Home/index')
  },
  // {
   
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
