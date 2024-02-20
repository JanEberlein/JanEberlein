import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CheatSheetView from '@/views/CheatSheetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cheatsheet',
      name: 'Vue Project Setup Cheat Sheet',
      component: CheatSheetView
    },
    {
      path: '/about',
      name: 'about',
      // lazy loaded variant
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
