import Home2 from '../views/Home2.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home2,
  },
  {
    path: '/hire',
    name: 'hire',
    component: () => import('../views/HireView.vue'),
  },
  {
    path: '/media',
    component: () => import('../views/MediaView.vue'),
    name: 'media',
    children: [
      {
        path: 'videos',
        name: 'videos',
        component: () => import('../views/VideoView.vue'),
      },
      {
        path: 'listen',
        name: 'listen',
        component: () => import('../views/ListenView.vue'),
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('../views/GalleryView.vue'),
      },
    ],
  },
  {
    path: '/christmas',
    name: 'christmas',
    component: () => import('../views/ChristmasView.vue'),
  },
  {
    path: '/uploadimage',
    name: 'uploadimage',
    component: () => import('../views/UploadImage.vue'),
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('../views/LiveView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
]
