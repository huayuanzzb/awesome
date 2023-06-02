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
      path: '/tool-box',
      name: 'tool-box',
      component: CodeView,
      redirect: '/tool-box/json',
      children: [
        {
          path: 'json',
          name: 'json',
          component: () => import('../components/code/Json.vue')
        },
        {
          path: 'text',
          name: 'text',
          component: () => import('../components/code/text/TextIndex.vue')
        }
      ]
    },
    {
      path: '/test-land/rich-text',
      name: 'test-land/rich-text',
      component: () => import('../components/test-land/TestLandIndex.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router