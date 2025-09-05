import { createRouter, createWebHistory } from 'vue-router'
import Home2 from '../views/Home2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home2
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/MediaView.vue'),
      children: [
        {
          path: 'videos',
          name: 'videos',
          component: () => import('../views/VideoView.vue')
        },
        {
          path: 'gallery',
          name: 'gallery',
          component: () => import('../views/GalleryView.vue'),
        },
      ]
    },
    {
      path: '/uploadimage',
      name: 'uploadimage',
      component: () => import('../views/UploadImage.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('../views/LiveView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
