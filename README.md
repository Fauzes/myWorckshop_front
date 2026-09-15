# MyWorkshop Frontend

Vue.js 3 приложение для MyWorkshop с использованием Vite, Pinia и Vue Router.

## 📦 Технологии

- **Vue 3** - прогрессивный JavaScript фреймворк
- **Vite** - современный инструмент сборки
- **Pinia** - официальное хранилище состояний для Vue
- **Vue Router** - официальный маршрутизатор для Vue
- **Bootstrap 5** - CSS фреймворк для стилизации

## 🚀 Установка

```bash
cd src
npm install
```

## 💻 Запуск

### Режим разработки
```bash
npm run dev
```

### Сборка для продакшена
```bash
npm run build
```

### Предварительный просмотр сборки
```bash
npm run preview
```

## 📁 Структура проекта

```
src/
├── components/       # Переиспользуемые Vue компоненты
│   ├── ConnectionCard.vue
│   └── NavMenu.vue
├── views/           # Страницы приложения
│   ├── AboutView.vue
│   ├── ContactsView.vue
│   ├── HomeView.vue
│   ├── LoginView.vue
│   ├── PortfolioView.vue
│   └── ProfileView.vue
├── stores/          # Pinia хранилища состояний
│   └── auth.js
├── app.js           # Точка входа приложения
├── app.vue          # Корневой компонент
├── index.html       # HTML шаблон
├── index.js         # Главный JS файл
├── style.css        # Глобальные стили
└── vite.config.js   # Конфигурация Vite
```

## 🛠️ Требования

- Node.js (рекомендуется версия 16+)
- npm или yarn

## 📝 Лицензия

ISC
