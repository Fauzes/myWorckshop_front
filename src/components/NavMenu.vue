<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- Левый край: Главная и Журнал -->
      <div class="d-flex">
        <router-link class="navbar-brand me-3" to="/">Главная</router-link>
        <ul class="navbar-nav" v-if="isAuthenticated">
          <li class="nav-item">
            <router-link class="nav-link" to="/logs">Журнал</router-link>
          </li>
        </ul>
      </div>
      
      <!-- Правый край: меню -->
      <div class="d-flex ms-auto">
        <ul class="navbar-nav">
          <li v-if="isAuthenticated" class="nav-item me-3">
            <span class="navbar-text text-white">{{ userName }}</span>
            <button @click="handleLogout" class="btn btn-outline-light btn-sm ms-2">Выйти</button>
          </li>
          <li v-else class="nav-item">
            <router-link class="nav-link" to="/login">Войти</router-link>
          </li>
        </ul>
      </div>
    </div>
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
.navbar-brand {
  font-weight: bold;
}
</style>
