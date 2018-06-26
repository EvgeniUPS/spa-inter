import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wardoors from '@/components/Wardoors'
import Sofas from '@/components/Sofas'
import Temp from '@/components/Temp'

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
    }
    ,
    {
      path: '/',
      name: 'Sofas',
      component: Sofas
    }, {
      path: '/temp',
      name: 'Temp',
      component: Temp
    }
  ],
  mode: 'history'
})