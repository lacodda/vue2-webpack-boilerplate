export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('components/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('components/About.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('components/Info.vue')
  }
];