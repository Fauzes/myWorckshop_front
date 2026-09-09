<template>
  <div class="card h-100 shadow-sm">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title mb-0">{{ connection.name }}</h5>
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
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  connection: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
