import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    login(username, password) {
      // Имитация запроса к серверу (оставлено для обратной совместимости, если fetch не используется)
      if (username === 'admin' && password === '123') {
        this.user = { name: 'Администратор', role: 'admin' }
        this.isAuthenticated = true
        localStorage.setItem('auth', 'true')
        return true
      }
      return false
    },
    setAuth(user) {
      this.user = user
      this.isAuthenticated = true
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      localStorage.removeItem('isAuthenticated')
    },
    checkAuth() {
      // Проверка авторизации через localStorage (для сохранения сессии после перезагрузки)
      const storedUser = localStorage.getItem('user')
      const isAuth = localStorage.getItem('isAuthenticated') === 'true' || localStorage.getItem('auth') === 'true'
      
      if (isAuth && storedUser) {
        this.isAuthenticated = true
        this.user = { name: storedUser, role: 'user' }
      } else if (isAuth) {
        this.isAuthenticated = true
        this.user = { name: 'Пользователь', role: 'user' }
      }
    }
  }
})
