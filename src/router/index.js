import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/:noteId',
    name: 'NoteView',
    component: () => import('../views/NoteView.vue')
  },
  {
    path: '/new',
    name: 'NoteView',
    component: () => import('../views/NoteView.vue')
  }
  // 404 
]

const router = new VueRouter({
  routes
})

export default router
