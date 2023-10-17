import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
      meta: {
        title: 'Auth Lab: About'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../pages/SignUpPage.vue'),
      meta: {
        title: 'Auth Lab: Sign up'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LogInPage.vue'),
      meta: {
        title: 'Auth Lab: Log in'
      }
    },
    {
      path: '/products/add',
      name: 'add',
      component: () => import('../pages/AddProductPage.vue'),
      meta: {
        title: 'Auth Lab: Add product'
      }
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../pages/ProductPage.vue')
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title ?? 'Auth Lab'
})

export default router
