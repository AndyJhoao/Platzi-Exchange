import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import about from '@/views/about'
import error from '@/views/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
