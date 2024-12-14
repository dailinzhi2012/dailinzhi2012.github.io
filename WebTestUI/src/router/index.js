import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/user/login',
      name: 'login',
      component: () => import('../views/User/LoginView.vue'),
    },
    {
      path: '/user/register',
      name: 'register',
      component: () => import('../views/User/RegisterView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home/HomeView.vue'),
    },
  ],
})

// 前置路由导航守卫
router.beforeEach(async(to) => {
  NProgress.start()
  const uStore = UserStore()
  if(to.name ==='register'){
    return
  }
  
  if(!uStore.token && to.name!== 'login'){
    return { name: 'login' }
  }
})
// 后置路由导航守卫
router.afterEach(() => {
  NProgress.done()
})

export default router
