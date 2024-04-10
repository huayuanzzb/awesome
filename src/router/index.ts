import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import CodeView from '../components/code/CodeIndex.vue'
import JsonView from '../components/code/Json.vue'
import MyToolView from '../components/code/my-tools/MyTools.vue'
import TextView from '../components/code/text/TextIndex.vue'
import TimeView from '../components/code/time/Time.vue'
import TestLandView from '../components/test-land/TestLandIndex.vue'
import CKEditorView from '../components/test-land/ckeditorView.vue'
import EditorJSView from '../components/test-land/editorjsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/tool-box',
      name: 'tool-box',
      component: CodeView,
      meta: {
        title: 'Tool Box'
      },
      redirect: '/tool-box/my-tools',
      children: [
        {
          path: 'my-tools',
          name: 'my-tools',
          component: MyToolView,
          meta: {
            title: 'My Tools'
          }
        },
        {
          path: 'json',
          name: 'json',
          component: JsonView,
          meta: {
            title: 'JSON'
          }
        },
        {
          path: 'text',
          name: 'text',
          component: TextView,
          meta: {
            title: 'Text'
          }
        },
        {
          path: 'time',
          name: 'time',
          component: TimeView,
          meta: {
            title: 'Time'
          }
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

router.beforeEach((to, from, next) => {
  document.title = <string>to.meta.title || 'Awesome'
  next();
})

export default router