# Reddit App 🤖

Клиент для Reddit с серверным рендерингом (SSR), написанный на **TypeScript** с использованием **React**, **Redux** и **Express**.

🔗 **Demo**: [my-reddit-five.vercel.app](https://my-reddit-five.vercel.app)

## 📋 Описание

Учебный проект, демонстрирующий навыки разработки современных веб-приложений с использованием TypeScript, React и серверного рендеринга. Приложение позволяет просматривать посты из Reddit, работать с подреддитами и взаимодействовать с Reddit API.

## 🛠 Технологический стек

### Frontend
- **React 16** + **TypeScript 5** — типизированный UI
- **Redux** + **Redux Thunk** — управление состоянием
- **React Router DOM** — навигация и роутинг
- **React Hook Form** — работа с формами
- **Axios** — HTTP-запросы к API
- **SSR (Server-Side Rendering)** — серверный рендеринг для улучшения SEO и производительности

### Backend
- **Express** — веб-сервер
- **Node.js 18+** — серверная среда выполнения

### Build & DevOps
- **Webpack 5** — сборка проекта
- **Jest** + **Enzyme** — тестирование
- **Cross-env** — кроссплатформенные переменные окружения

### Styling
- **CSS3** (Flexbox, Grid)
- **Normalize.css** — сброс стилей

## 🚀 Возможности

- ✅ Просмотр ленты постов из Reddit
- ✅ Навигация по подреддитам
- ✅ Пагинация и подгрузка постов (Load More)
- ✅ Поиск по Reddit
- ✅ Адаптивный дизайн
- ✅ Серверный рендеринг (SSR)
- ✅ Покрытие тестами (Unit tests)
- ✅ Типизация всех компонентов на TypeScript

## 📦 Установка и запуск

### Требования
- Node.js >= 18
- npm или yarn

### Локальный запуск

1. **Клонируйте репозиторий**
```bash
git clone https://github.com/MrPerec/my_react_create_app.git
cd my_react_create_app
```

2. **Установите зависимости**
```bash
npm install
```

3. **Запустите development-сервер**
```bash
npm run dev
```

4. **Откройте браузер**
```
http://localhost:3000
```

### Сборка для production

```bash
npm run build
npm start
```

## 🧪 Тестирование

```bash
# Запустить все тесты
npm test

# Запустить тесты в режиме watch
npm run test-watch
```

## 📁 Структура проекта

```
my_react_create_app/
├── src/
│   ├── actions/          # Redux actions
│   ├── client/           # Клиентская часть приложения
│   ├── context/          # React Context
│   ├── hooks/            # Кастомные React hooks
│   ├── pages/            # Страницы приложения
│   ├── reducers/         # Redux reducers
│   ├── server/           # Серверная часть (Express + SSR)
│   ├── shared/           # Общие компоненты и утилиты
│   ├── utils/            # Вспомогательные функции
│   ├── App.tsx           # Корневой компонент
│   ├── enum.ts           # TypeScript enum
│   └── main.global.css   # Глобальные стили
├── cfg/                  # Конфигурационные файлы
├── types/                # TypeScript type definitions
├── webpack.config.js     # Конфигурация Webpack
├── tsconfig.json         # Конфигурация TypeScript
├── jest.config.js        # Конфигурация Jest
└── package.json
```

## 🔑 Ключевые особенности реализации

### TypeScript
- Полная типизация компонентов, props, state
- Использование interfaces и types
- Строгая проверка типов

### SSR (Server-Side Rendering)
- Рендеринг на сервере для улучшения SEO
- Быстрая первая отрисовка (FCP)
- Гидратация на клиенте

### Redux Architecture
- Нормализованное состояние
- Асинхронные actions с Redux Thunk
- Разделение логики на actions/reducers

### Testing
- Unit-тесты на Jest + Enzyme
- Покрытие критического функционала
- Snapshot testing

## 🎓 Чему посвящен проект

Этот проект демонстрирует:
- ✅ Уверенное владение **TypeScript** в React-приложениях
- ✅ Понимание **SSR** и работы с серверной частью
- ✅ Навыки работы с **Redux** и управления состоянием
- ✅ Умение настраивать **Webpack** и сборку проекта
- ✅ Покрытие кода **тестами** (Jest)
- ✅ Работу с **внешними API** (Reddit API)
- ✅ Создание **адаптивных** интерфейсов

## 👨‍💻 Автор

**Макшанов Илья**
- GitHub: [@MrPerec](https://github.com/MrPerec)
- Telegram: [@mrperec](https://t.me/mrperec)
- Email: [ilia.makshanov@mail.ru](mailto:ilia.makshanov@mail.ru)

## 📝 Лицензия

ISC

---

## 🔗 Полезные ссылки

- [Reddit API Documentation](https://www.reddit.com/dev/api/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Redux Documentation](https://redux.js.org/)
```

