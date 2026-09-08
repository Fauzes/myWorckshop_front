const menuItems = [
  { 
    label: 'Главная', 
    path: '/', 
    children: [
      { label: 'О компании', path: '/about' },
      { label: 'Команда', path: '/team' },
      { label: 'Вакансии', path: '/careers' }
    ]
  },
  { 
    label: 'Услуги', 
    path: '/services', 
    children: [
      { label: 'Дизайн', path: '/services/design' },
      { label: 'Разработка', path: '/services/development' },
      { label: 'Маркетинг', path: '/services/marketing' }
    ]
  },
  // и так далее для 5 пунктов
]