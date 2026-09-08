import { createRouter, createWebHistory } from 'vue-router'

// Импортируйте компоненты страниц (позже создадим заглушки)
const routes = [
  { path: '/', name: 'home', component: () => import('app.vue') },
  // { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/services', name: 'services', component: () => import('ServicesView.vue') },
  // { path: '/portfolio', name: 'portfolio', component: () => import('../views/PortfolioView.vue') },
  // { path: '/contacts', name: 'contacts', component: () => import('../views/ContactsView.vue') },
  // Подпункты (можно сделать отдельные страницы)
  // { path: '/services/design', name: 'service-design', component: () => import('../views/services/DesignView.vue') },
  // { path: '/services/development', name: 'service-dev', component: () => import('../views/services/DevelopmentView.vue') },
  // { path: '/services/marketing', name: 'service-marketing', component: () => import('../views/services/MarketingView.vue') },
  // Аналогично для остальных пунктов...
  // Профиль (только для авторизованных)
  // { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue'), meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: () => import('login.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Глобальный guard для защиты маршрутов
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true' // простая проверка
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router