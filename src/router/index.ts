import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import CodeView from '../components/code/CodeIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/code',
      name: 'code',
      component: CodeView
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('../components/text/TextIndex.vue')
    }
  ]
})

export default router