import { defineStore } from 'pinia'

export const useConnectionsStore = defineStore('connections', {
  state: () => ({
    connections: [
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
    ],
    nextId: 4
  }),
  getters: {
    allConnections: (state) => state.connections,
    getConnectionById: (state) => (id) => {
      return state.connections.find(conn => conn.id === id)
    }
  },
  actions: {
    addConnection(connection) {
      const newConnection = {
        ...connection,
        id: this.nextId++
      }
      this.connections.push(newConnection)
      return newConnection
    },
    updateConnection(id, updatedData) {
      const index = this.connections.findIndex(conn => conn.id === id)
      if (index !== -1) {
        this.connections[index] = {
          ...this.connections[index],
          ...updatedData,
          id: id
        }
        return true
      }
      return false
    },
    deleteConnection(id) {
      const index = this.connections.findIndex(conn => conn.id === id)
      if (index !== -1) {
        this.connections.splice(index, 1)
        return true
      }
      return false
    }
  }
})
