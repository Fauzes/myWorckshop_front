<template>
  <div class="container mt-4">
    <h1>Журнал событий (Логи)</h1>
    <p class="text-muted">Доступно только для авторизованных пользователей</p>
    
    <div class="card shadow-sm">
      <div class="card-header bg-light">
        <h5 class="mb-0">Системные логи</h5>
      </div>
      <div class="card-body">
        <div v-if="logs.length === 0" class="text-center text-muted py-4">
          <p>Нет записей в журнале</p>
        </div>
        <div v-else class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th style="width: 180px;">Дата и время</th>
                <th style="width: 100px;">Уровень</th>
                <th>Сообщение</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(log, index) in logs" :key="index">
                <td>{{ log.timestamp }}</td>
                <td>
                  <span :class="getLevelClass(log.level)">{{ log.level }}</span>
                </td>
                <td>{{ log.message }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

// Пример данных логов (в реальном приложении загружается с сервера)
const logs = ref([
  { timestamp: '2025-01-15 10:23:45', level: 'INFO', message: 'Пользователь admin успешно вошёл в систему' },
  { timestamp: '2025-01-15 10:25:12', level: 'WARNING', message: 'Попытка доступа к защищённому ресурсу без авторизации' },
  { timestamp: '2025-01-15 10:30:00', level: 'INFO', message: 'Обновление конфигурации выполнено успешно' },
  { timestamp: '2025-01-15 11:15:33', level: 'ERROR', message: 'Ошибка подключения к базе данных' },
  { timestamp: '2025-01-15 11:20:45', level: 'INFO', message: 'Резервное копирование завершено' },
])

const getLevelClass = (level) => {
  switch (level) {
    case 'ERROR':
      return 'badge bg-danger'
    case 'WARNING':
      return 'badge bg-warning text-dark'
    case 'INFO':
      return 'badge bg-info text-dark'
    default:
      return 'badge bg-secondary'
  }
}
</script>

<style scoped>
h1 {
  color: #333;
  margin-bottom: 10px;
}
.card {
  border-radius: 10px;
}
.card-header {
  border-radius: 10px 10px 0 0 !important;
}
.table {
  margin-top: 15px;
}
.badge {
  min-width: 70px;
}
</style>
