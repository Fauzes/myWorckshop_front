<template>
  <div class="card h-100 shadow-sm">
    <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">{{ connection.name }}</h5>
      <div v-if="isAuthenticated" class="btn-group btn-group-sm">
        <button @click="$emit('edit', connection)" class="btn btn-outline-light">
          <i class="bi bi-pencil"></i>
        </button>
        <button @click="$emit('delete', connection.id)" class="btn btn-outline-light">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Сервер:</strong>
          <span>{{ connection.host }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Порт:</strong>
          <span>{{ connection.port }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Пользователь:</strong>
          <span>{{ connection.username }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Пароль:</strong>
          <span class="text-muted">••••••••</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Тип БД:</strong>
          <span class="badge bg-secondary">{{ connection.dbType }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <strong>Последнее обращение:</strong>
          <span>{{ connection.lastAccess || '—' }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

defineProps({
  connection: {
    type: Object,
    required: true
  }
})

defineEmits(['edit', 'delete'])

const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
