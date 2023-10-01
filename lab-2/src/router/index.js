import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/books/add',
      name: 'AddBookPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddBookPage.vue')
    },
    {
      path: '/books/:id',
      name: 'BookPage',
      component: () => import('../views/BookPage.vue')
    }
  ]
})

export default router
