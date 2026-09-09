<template>
  <div class="container mt-4">
    <h1 class="mb-4">Главная</h1>
    <p class="lead">Добро пожаловать на наш сайт!</p>
    
    <h2 class="mt-5 mb-3">Подключения к базам данных</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="conn in connections" :key="conn.id" class="col">
        <ConnectionCard :connection="conn" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ConnectionCard from '../components/ConnectionCard.vue'

const connections = [
  {
    id: 1,
    name: 'Основная БД',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'secret123',
    dbType: 'PostgreSQL'
  },
  {
    id: 2,
    name: 'Тестовая БД',
    host: 'test-db.example.com',
    port: 3306,
    username: 'testuser',
    password: 'testpass',
    dbType: 'MySQL'
  },
  {
    id: 3,
    name: 'Продакшн БД',
    host: 'prod-db.example.com',
    port: 1521,
    username: 'prodadmin',
    password: 'prodsecret',
    dbType: 'Oracle'
  }
]
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
