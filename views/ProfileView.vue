<template>
  <div>
    <h1>Профиль</h1>
    <p v-if="authStore.user">Пользователь: {{ authStore.user.name }} ({{ authStore.user.role }})</p>
  </div>
</template>

<script setup>
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
