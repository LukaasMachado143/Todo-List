import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'task',
    component: () => import('../views/TaskView/TaskView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
