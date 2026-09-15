<template>
  <div class="container mt-4">
    <div v-if="isAuthenticated" class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Подключения к базам данных</h2>
      <button @click="showAddModal" class="btn btn-primary">
        <i class="bi bi-plus-lg"></i> Добавить подключение
      </button>
    </div>
    <h2 v-else class="mt-5 mb-3">Подключения к базам данных</h2>
    
    <div v-if="connections.length === 0" class="alert alert-info">
      Нет подключений. Добавьте первое подключение!
    </div>
    
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="conn in connections" :key="conn.id" class="col">
        <ConnectionCard 
          :connection="conn" 
          @edit="showEditModal"
          @delete="confirmDelete"
        />
      </div>
    </div>

    <!-- Модальное окно добавления/редактирования -->
    <ConnectionModal
      v-if="showModal"
      :connection="editingConnection"
      @close="closeModal"
      @save="handleSave"
    />

    <!-- Модальное окно подтверждения удаления -->
    <div v-if="showDeleteModal" class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">Подтверждение удаления</h5>
            <button @click="closeDeleteModal" type="button" class="btn-close btn-close-white"></button>
          </div>
          <div class="modal-body">
            <p>Вы уверены, что хотите удалить подключение "<strong>{{ connectionToDelete?.name }}</strong>"?</p>
            <p class="text-muted mb-0">Это действие нельзя отменить.</p>
          </div>
          <div class="modal-footer">
            <button @click="closeDeleteModal" type="button" class="btn btn-secondary">Отмена</button>
            <button @click="handleDelete" type="button" class="btn btn-danger">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ConnectionCard from '../components/ConnectionCard.vue'
import ConnectionModal from '../components/ConnectionModal.vue'
import { useConnectionsStore } from '../stores/connections'
import { useAuthStore } from '../stores/auth'

const connectionsStore = useConnectionsStore()
const authStore = useAuthStore()

const connections = computed(() => connectionsStore.allConnections)
const isAuthenticated = computed(() => authStore.isAuthenticated)

const showModal = ref(false)
const editingConnection = ref(null)
const showDeleteModal = ref(false)
const connectionToDelete = ref(null)

const showAddModal = () => {
  editingConnection.value = null
  showModal.value = true
}

const showEditModal = (connection) => {
  editingConnection.value = connection
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingConnection.value = null
}

const handleSave = (connectionData) => {
  if (editingConnection.value) {
    // Редактирование
    connectionsStore.updateConnection(editingConnection.value.id, connectionData)
  } else {
    // Добавление
    connectionsStore.addConnection(connectionData)
  }
  closeModal()
}

const confirmDelete = (id) => {
  connectionToDelete.value = connectionsStore.getConnectionById(id)
  showDeleteModal.value = true
}

const closeDeleteModal = () => {
  showDeleteModal.value = false
  connectionToDelete.value = null
}

const handleDelete = () => {
  if (connectionToDelete.value) {
    connectionsStore.deleteConnection(connectionToDelete.value.id)
    closeDeleteModal()
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
