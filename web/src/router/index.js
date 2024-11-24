import { createRouter, createWebHistory,createWebHashHistory  } from 'vue-router'
 
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  }, 
  {
    path: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes, 
  scrollBehavior: () => ({ left: 0, top: 0 }),
});  

router.beforeEach((to, from, next) => {
  
  next()
})
 
export default router
