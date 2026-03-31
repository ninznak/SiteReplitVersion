# KODA Project Documentation

## Project Overview

- **Name**: CreativeSphere (rocketSite2)
- **Type**: Next.js15 Web Application
- **Framework**: Next.js15 с App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Tech Stack

| Component | Version |
|-----------|---------|
| Next.js |15.1.11 |
| React |19.0.3 |
| TypeScript |5.9.3 |
| Tailwind CSS |3.4.6 |
| Node.js |20.x+ |

## Project Structure

```
SiteReplitVersion/
├── src/
│ ├── app/ # Next.js App Router страницы
│ ├── components/ # React компоненты
│ └── styles/ # CSS стили
├── public/ # Статические файлы
├── next.config.mjs # Конфигурация Next.js
├── tailwind.config.js # Конфигурация Tailwind
├── tsconfig.json # Конфигурация TypeScript
└── package.json # Зависимости
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Запуск dev сервера (порт5000) |
| `npm run build` | Сборка production версии |
| `npm run start` | Запуск production сервера |
| `npm run lint` | Проверка линтером |
| `npm run type-check` | Проверка типов |

## Key Features

- Next.js15 App Router
- Server Side Rendering (SSR)
- Tailwind CSS с кастомными компонентами
- Recharts для графиков
- Image optimization с настраиваемыми хостами

## Configuration

### Redirects (next.config.mjs)
- `/` → `/homepage` (temporary redirect)

### Image Hosts
Настроены удалённые паттерны для оптимизации изображений (см. `image-hosts.config.mjs`)

### Build Settings
- `ignoreBuildErrors: true` - игнорировать ошибки TypeScript при сборке
- `ignoreDuringBuilds: true` - игнорировать ошибки ESLint при сборке

## Deployment

### VPS
- Node.js20.x
- Nginx для проксирования
- PM2 для управления процессами
- Порт по умолчанию:5000

### Vercel
Проект совместим с Vercel (есть @netlify/plugin-nextjs)

## Development Notes

- Использует @dhiwise/component-tagger для оптимизации компонентов
- Требует Node.js20+ для корректной работы
- ESLint и Prettier настроены для кодстайла
