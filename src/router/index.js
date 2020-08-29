import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children:[
      {
        path: '/',
        name: 'carte1',
        component: () => import('../components/carte1.vue'),
      },
      {
        path: '/carte2',
        name: 'carte2',
        component: () => import('../components/carte2.vue'),
      },
      {
        path: '/carte3',
        name: 'carte3',
        component: () => import('../components/carte3.vue'),
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
