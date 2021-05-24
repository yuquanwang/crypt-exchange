import Vue from 'vue'
import VueRouter from 'vue-router'
import Trade from '../views/Trade'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/trade',
    name: 'trade',
    component: Trade
  }
]

const router = new VueRouter({
  routes
})

export default router
