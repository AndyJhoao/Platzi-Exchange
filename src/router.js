import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import about from '@/views/about'
import error from '@/views/error'
import CoinDetail from '@/views/CoinDetail'

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
      path: '/coin/:id',
      name: 'Coin-Detail',
      component: CoinDetail
    },
    {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
