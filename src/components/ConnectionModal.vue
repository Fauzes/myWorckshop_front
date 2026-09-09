<template>
  <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">{{ isEditMode ? 'Редактировать подключение' : 'Новое подключение' }}</h5>
          <button @click="$emit('close')" type="button" class="btn-close btn-close-white"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label class="form-label">Название</label>
              <input v-model="formData.name" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Сервер (хост)</label>
              <input v-model="formData.host" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Порт</label>
              <input v-model.number="formData.port" type="number" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Пользователь</label>
              <input v-model="formData.username" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Пароль</label>
              <input v-model="formData.password" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Тип БД</label>
              <select v-model="formData.dbType" class="form-select" required>
                <option value="" disabled>Выберите тип БД</option>
                <option value="PostgreSQL">PostgreSQL</option>
                <option value="MySQL">MySQL</option>
                <option value="Oracle">Oracle</option>
                <option value="MSSQL">MSSQL</option>
                <option value="SQLite">SQLite</option>
                <option value="MongoDB">MongoDB</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button @click="$emit('close')" type="button" class="btn btn-secondary">Отмена</button>
          <button @click="handleSubmit" type="button" class="btn btn-primary">
            {{ isEditMode ? 'Сохранить' : 'Добавить' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  connection: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'save'])

const isEditMode = ref(!!props.connection)

const formData = ref({
  name: '',
  host: '',
  port: 5432,
  username: '',
  password: '',
  dbType: 'PostgreSQL',
  lastAccess: ''
})

watch(() => props.connection, (newConn) => {
  if (newConn) {
    formData.value = { ...newConn }
    isEditMode.value = true
  }
}, { immediate: true })

const handleSubmit = () => {
  emit('save', { ...formData.value })
}
</script>

<style scoped>
.modal-dialog {
  max-width: 500px;
}
</style>
