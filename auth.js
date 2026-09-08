import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(username, password) {
      // Имитация запроса к серверу
      if (username === 'admin' && password === '123') {
        this.user = { name: 'Администратор', role: 'admin' }
        this.isAuthenticated = true
        localStorage.setItem('auth', 'true')
        return true
      }
      return false
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('auth')
    },
    checkAuth() {
      const auth = localStorage.getItem('auth') === 'true'
      if (auth) {
        this.isAuthenticated = true
        this.user = { name: 'Пользователь', role: 'user' }
      }
    }
  }
})