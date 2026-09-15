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
  
  const username = ref('')
  const password = ref('')
  const error = ref('')
  const isLoading = ref(false)
  const router = useRouter()
  
  const handleLogin = async () => {
    error.value = ''
    isLoading.value = true

    // Формируем запрос в требуемом формате
    const payload = {
      user: {
        login: username.value,
        password: password.value
      }
    }

    try {
      // Отправляем POST запрос на сервер
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Ошибка сети или неверные данные')
      }

      const data = await response.json()

      // Обрабатываем ответ в формате: { "status_authorize": { "user": "", "status": "" } }
      if (data.status_authorize && data.status_authorize.status === 'success') {
        // Сохраняем имя пользователя и статус авторизации
        localStorage.setItem('user', data.status_authorize.user)
        localStorage.setItem('isAuthenticated', 'true')
        
        // Перенаправляем на главную страницу
        router.push('/')
      } else {
        error.value = data.status_authorize?.status || 'Ошибка авторизации'
      }
    } catch (err) {
      console.error('Login error:', err)
      error.value = 'Не удалось подключиться к серверу'
    } finally {
      isLoading.value = false
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