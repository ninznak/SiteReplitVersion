# Deployment Guide: Next.js на VPS

## Требования к серверу

| Компонент | Версия | Команда установки (Ubuntu) |
|-----------|--------|---------------------------|
| **Node.js** | 20.x+ | `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -` |
| **Nginx** | — | `sudo apt install nginx` |
| **PM2** | — | `sudo npm install -g pm2` |

**База данных:** Не используется в этом проекте (статический Next.js)

---

## 1. Подготовка сервера

```bash
# Обновление
sudo apt update && sudo apt upgrade -y

# Установка Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Установка Nginx
sudo apt install -y nginx

# Установка PM2 глобально
sudo npm install -g pm2
```

---

## 2. Загрузка проекта на сервер

Вариант А: Git
```bash
cd /var/www/
git clone https://твой-репозиторий/rocketSite2.git
cd SiteReplitVersion
```

Вариант Б: SFTP
- Загрузи папку `SiteReplitVersion` в `/var/www/`

---

## 3. Установка зависимостей и сборка

```bash
cd /var/www/SiteReplitVersion
npm install
npm run build
```

---

## 4. Создание конфига Nginx

```bash
sudo nano /etc/nginx/sites-available/rocketsite
```

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name твой-домен.com www.твой-домен.com;

    # Redirect to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name твой-домен.com www.твой-домен.com;

    # SSL сертификаты (получить через certbot)
    ssl_certificate /etc/letsencrypt/live/твой-домен.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/твой-домен.com/privkey.pem;

    # Next.js статика и прокси
    root /var/www/SiteReplitVersion;
    index index.html;

    # Статика Next.js
    location /_next/static {
        proxy_pass http://localhost:5000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, immutable";
    }

    # Публичные файлы
    location /public {
        proxy_pass http://localhost:5000;
    }

    # Основной прокси на Next.js
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

```bash
# Активация
sudo ln -s /etc/nginx/sites-available/rocketsite /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. Получение SSL

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d твой-домен.com -d www.твой-домен.com
```

---

## 6. Запуск через PM2

```bash
cd /var/www/SiteReplitVersion

# Запуск Next.js
pm2 start npm --name rocketsite -- run start

# Автозапуск
pm2 startup
pm2 save
```

---

## Альтернатива: Vercel (проще)

Этот проект уже настроен для Vercel (`@netlify/plugin-nextjs`).

1. Загрузи код на GitHub
2. Зайди на vercel.com
3. Импортируй репозиторий
4. Деплой автоматический

---

## Проверка

```bash
pm2 status
pm2 logs rocketsite
```

---

## Структура проекта

```
SiteReplitVersion/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React компоненты
│   └── styles/        # CSS стили
├── public/            # Статика
├── next.config.mjs    # Конфиг Next.js
└── package.json
```

---

## Команды PM2

| Команда | Действие |
|---------|----------|
| `pm2 status` | Статус |
| `pm2 logs` | Логи |
| `pm2 restart` | Перезапуск |
| `pm2 stop` | Остановка |

---

## Возможные проблемы

### Ошибка порта
```bash
sudo lsof -i :5000
sudo kill -9 PID
```

### Ошибка сборки
```bash
npm run build
# Смотри ошибки
```
