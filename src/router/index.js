import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wardoors from '@/components/Wardoors'
import Sofas from '@/components/Sofas'
import Editions from '@/components/Editions'
import Temp from '@/components/Temp'
import Tables from '@/components/Tables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ward',
      name: 'Wardoors',
      component: Wardoors
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editions',
      name: 'Editions',
      component: Editions
    },
    {
      path: '/sofas',
      name: 'Sofas',
      component: Sofas
    }, 
    {
      path: '/temp',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/',
      name: 'Tables',
      component: Tables
    }
  ],
  mode: 'history'
})
