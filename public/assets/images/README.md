# Изображения для сайта KurilenkoArt

## Структура папок

```
public/assets/images/
├── app_logo.svg          # Логотип сайта (отображается в Header и Footer)
├── no_image.svg          # Placeholder для отсутствующих изображений
├── hero_1.svg            # Изображение для карусели на главной (AI Content)
├── hero_2.svg            # Изображение для карусели на главной (Medal)
├── hero_3.svg            # Изображение для карусели на главной (3D Models)
├── portfolio_3d_1.svg    # Превью 3D работ (Bas Relief)
├── portfolio_3d_2.svg    # Превью 3D работ (Medal)
├── portfolio_3d_3.svg    # Превью 3D работ (Coins)
├── portfolio_ai_1.svg    # Превью AI работ (Neural/Generative)
├── portfolio_ai_2.svg    # Превью AI работ (Video)
├── shop_product_1.svg    # Превью товара в магазине
└── news_article.svg      # Превью статьи
```

## Рекомендуемые размеры изображений

| Файл | Рекомендуемый размер | Формат | Описание |
|------|---------------------|--------|----------|
| `app_logo.svg` | 64×64 px | SVG/PNG | Логотип, лучше SVG для масштабируемости |
| `hero_*.svg` | 800×600 px | PNG/WebP | Изображения для Hero-карусели на главной |
| `portfolio_3d_*.svg` | 600×450 px | PNG/WebP | Превью работ для портфолио и главной |
| `portfolio_ai_*.svg` | 600×450 px | PNG/WebP | Превью AI-работ |
| `shop_product_*.svg` | 400×300 px | PNG/WebP | Изображения товаров в магазине |
| `news_article.svg` | 400×250 px | PNG/WebP | Превью статей |

## Как заменить placeholder-изображения

1. Подготовьте свои изображения в рекомендуемых размерах
2. Сохраните их в папку `public/assets/images/`
3. Используйте те же имена файлов или обновите пути в компонентах

### Примеры обновления путей в компонентах:

**HeroSection.tsx** (главная страница, карусель):
```typescript
const CAROUSEL_SLIDES = [
  {
    id: 'ai-content',
    src: '/assets/images/hero_1.svg', // Замените на свой файл
    alt: 'AI-generated surreal landscape',
    tag: 'AI Content',
    title: 'Generative Art Series',
    subtitle: 'Neural Landscapes Vol.3'
  },
  // ...
];
```

**PortfolioPreview.tsx** (превью портфолио на главной):
```typescript
const works3D = [
  {
    id: 1,
    title: 'Roman Eagle Relief',
    category: 'Bas Relief',
    img: '/assets/images/portfolio_3d_1.svg', // Замените на свой файл
    alt: 'Ancient Roman eagle bas relief sculpture',
    size: 'large'
  },
  // ...
];
```

**ShopPageContent.tsx** (страница магазина):
```typescript
const products = [
  {
    id: 1,
    title: 'Eagle Relief — STL File',
    img: '/assets/images/shop_product_1.svg', // Замените на свой файл
    // ...
  },
];
```

## Использование внешних изображений

Вы также можете использовать внешние URL для изображений. Для этого добавьте домен в файл `imaje-hosts.config.mjs`:

```javascript
export const imageHosts = [
  // Существующие домены...
  {
    protocol: 'https',
    hostname: 'your-image-host.com',
  },
];
```

## Оптимизация изображений

- Используйте **WebP** для фотографий (лучшее сжатие)
- Используйте **SVG** для иконок и логотипов
- Сжимайте изображения перед загрузкой (TinyPNG, Squoosh)
- Для Hero-изображений используйте качество 80-85%

## Текущие placeholder-изображения

Все текущие SVG-файлы являются placeholder-изображениями с простым дизайном. Они показывают:
- Общую структуру изображения
- Тип контента (3D, AI, Medal, etc.)
- Подсказку "Замените на своё изображение"

Замените их на реальные изображения вашего портфолио!
