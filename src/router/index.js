import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CheatSheetView from '@/views/CheatSheetView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/projects',
      name: 'My Projects',
      component: ProjectsView
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
