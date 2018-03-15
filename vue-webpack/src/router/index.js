import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import newr from '@/components/newr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/newr',
      name: 'newr',
      component: newr
    }
  ]
})
