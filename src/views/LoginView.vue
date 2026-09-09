<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-header bg-primary text-white">
              <h2 class="h4 mb-0 text-center">Вход в систему</h2>
            </div>
            <div class="card-body p-4">
              <form @submit.prevent="handleLogin">
                <div class="mb-4">
                  <label class="form-label">Логин:</label>
                  <input v-model="username" type="text" class="form-control form-control-lg" required />
                </div>
                <div class="mb-4">
                  <label class="form-label">Пароль:</label>
                  <input v-model="password" type="password" class="form-control form-control-lg" required />
                </div>
                <button type="submit" class="btn btn-primary btn-lg w-100">Войти</button>
                <p v-if="error" class="text-danger mt-3 mb-0 text-center">{{ error }}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../stores/auth'
  
  const username = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  const authStore = useAuthStore()
  
  const handleLogin = () => {
    const success = authStore.login(username.value, password.value)
    if (success) {
      router.push('/')
    } else {
      error.value = 'Неверный логин или пароль (подсказка: admin / 123)'
    }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  .card-header {
    border-radius: 10px 10px 0 0 !important;
  }
  </style>