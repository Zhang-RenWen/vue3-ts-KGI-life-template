// Composables
import { createRouter, createWebHistory } from 'vue-router';
import { getPage } from '@/utils/glob';
console.log(getPage('Images'));

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      hidden: true,
      title: 'Home',
    },
    component: getPage('HomeView'),
  },
  {
    path: '/storyBook',
    name: 'storyBook',
    component: getPage('StoryBook'),
    children: [
      {
        path: '/icon',
        name: 'icon',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Icon',
        },
        component: getPage('Icon'),
      },
      {
        path: '/input',
        name: 'input',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Input',
        },
        component: getPage('Input'),
      },
      {
        path: '/table',
        name: 'table',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Table',
        },
        component: getPage('Table'),
      },

      {
        path: '/dialog',
        name: 'dialog',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Dialog',
        },
        component: getPage('Dialog'),
      },

      {
        path: '/images',
        name: 'images',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'Images',
        },
        component: getPage('Images'),
      },
      {
        path: '/dataFlow',
        name: 'dataFlow',
        meta: {
          hidden: true,
          icon: 'mdi-view-dashboard',
          title: 'DataFlow',
        },
        component: getPage('DataFlow'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
