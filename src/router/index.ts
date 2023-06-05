import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import CodeView from '../components/code/CodeIndex.vue'
import JsonView from '../components/code/Json.vue'
import TextView from '../components/code/text/TextIndex.vue'
import TestLandView from '../components/test-land/TestLandIndex.vue'
import CKEditorView from '../components/test-land/ckeditorView.vue'
import EditorJSView from '../components/test-land/editorjsView.vue'

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
          component: JsonView
        },
        {
          path: 'text',
          name: 'text',
          component: TextView
        }
      ]
    },
    {
      path: '/test-land/rich-text',
      name: 'test-land/rich-text',
      component: TestLandView,
      redirect: '/test-land/rich-text/ckeditor',
      children: [
        {
          path: 'ckeditor',
          name: 'ckeditor',
          component: CKEditorView
        },
        {
          path: 'editorjs',
          name: 'editorjs',
          component: EditorJSView
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router