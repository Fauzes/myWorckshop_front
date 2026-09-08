<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.path">
        <router-link :to="item.path">{{ item.label }}</router-link>
        <ul v-if="item.children">
          <li v-for="child in item.children" :key="child.path">
            <router-link :to="child.path">{{ child.label }}</router-link>
          </li>
        </ul>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="/profile">Профиль</router-link>
        <button @click="handleLogout">Выйти</button>
      </li>
      <li v-else>
        <router-link to="/login">Войти</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const menuItems = [
  { 
    label: 'Главная', 
    path: '/', 
    children: [
      { label: 'О компании', path: '/about' },
      { label: 'Команда', path: '/team' },
      { label: 'Вакансии', path: '/careers' }
    ]
  },
  { 
    label: 'Услуги', 
    path: '/services', 
    children: [
      { label: 'Дизайн', path: '/services/design' },
      { label: 'Разработка', path: '/services/development' },
      { label: 'Маркетинг', path: '/services/marketing' }
    ]
  },
  { 
    label: 'Портфолио', 
    path: '/portfolio'
  },
  { 
    label: 'Контакты', 
    path: '/contacts'
  },
  { 
    label: 'Профиль', 
    path: '/profile'
  }
]

const isAuthenticated = computed(() => authStore.isAuthenticated)

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
.nav-menu {
  background-color: #333;
  padding: 10px;
}
.nav-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}
.nav-menu a {
  color: white;
  text-decoration: none;
}
.nav-menu a:hover {
  text-decoration: underline;
}
.nav-menu button {
  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
}
</style>
