<template>
    <div class="login-container">
      <h2>Вход в систему</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label>Логин:</label>
          <input v-model="username" type="text" required />
        </div>
        <div>
          <label>Пароль:</label>
          <input v-model="password" type="password" required />
        </div>
        <button type="submit">Войти</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
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
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .login-container div {
    margin-bottom: 25px;
  }
  .login-container label {
    display: block;
    margin-bottom: 10px;
  }
  .login-container input {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
  }
  .login-container button {
    width: 100%;
    padding: 14px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }
  .login-container button:hover {
    background-color: #555;
  }
  .error {
    color: red;
    margin-top: 15px;
  }
  </style>