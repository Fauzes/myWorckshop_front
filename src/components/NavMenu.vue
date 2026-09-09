<template>
  <nav class="nav-menu">
    <ul>
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li v-if="isAuthenticated">
        <span>{{ userName }}</span>
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

const isAuthenticated = computed(() => authStore.isAuthenticated)
const userName = computed(() => authStore.user?.name || 'Пользователь')

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
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
}
.nav-menu a, .nav-menu span {
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
  margin-left: 10px;
}
</style>
