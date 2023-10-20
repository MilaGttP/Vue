import {createRouter, createWebHistory} from 'vue-router'
import Home from './сomponents/homeComponent.vue'
import Ukraine from './сomponents/ukraineComponent.vue'
import Timers from './сomponents/otherComponent.vue'

const routes = [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/ukraine',
      component: Ukraine
    },
    {
        path: '/other',
        component: Timers
    }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router