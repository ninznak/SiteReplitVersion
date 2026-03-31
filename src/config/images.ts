/**
 * Local Images Configuration
 *
 * Этот файл содержит пути к локальным изображениям.
 * Раскомментируй USE_LOCAL_IMAGES = true для использования локальных изображений.
 *
 * Для загрузки изображений запусти: node scripts/download-images.js
 */

// =============================================================================
// НАСТРОЙКИ
// =============================================================================

// Переключатель между локальными и сетевыми изображениями
export const USE_LOCAL_IMAGES = true; // Используем локальные изображения

// =============================================================================
// ПУТИ К ЛОКАЛЬНЫМ ИЗОБРАЖЕНИЯМ
// =============================================================================

// Все пути относительно папки /public/images/

export const localImages = {
  // ===========================================================================
  // HERO SECTION - Главный баннер
  // ===========================================================================
  hero: {
    // AI контент
    aiContent: '/images/hero/ai-content-1920x1080.png',
    // Заказная работа (медаль)
    commission: '/images/hero/commission-1920x1080.jpg',
    //3D модели
    models3d: '/images/hero/3d-models-1920x1080.png',
  },

  // ===========================================================================
  // FEATURED WORKS - Избранные работы
  // ===========================================================================
  featured: {
    // Bronze Victory Relief
    bronzeVictory: '/images/featured/bronze-victory-relief-1920x2400.jpg',
    // Cosmic Weave (AI)
    cosmicWeave: '/images/featured/cosmic-weave-1920x1080.png',
    // Numismatic Heritage Set
    numismaticHeritage: '/images/featured/numismatic-heritage-1920x1280.jpg',
    // Verdant Machine (AI)
    verdantMachine: '/images/featured/verdant-machine-1920x2400.png',
  },

  // ===========================================================================
  // NEWS ARTICLES - Новости
  // ===========================================================================
  news: {
    // Bas Relief Depth
    basRelief: '/images/news/bas-relief-depth-1920x1200.png',
    // Midjourney v7
    midjourney: '/images/news/midjourney-1920x1200.png',
    // Commemorative Medals
    medalsVelvet: '/images/news/medals-velvet-1920x1200.jpg',
    // AI Video
    aiVideo: '/images/news/ai-video-1920x1200.png',
  },

  // ===========================================================================
  // SHOP PREVIEW - Магазин
  // ===========================================================================
  shop: {
    // Eagle Relief STL
    eagleRelief: '/images/shop/eagle-relief-stl-1920x1440.png',
    // Heritage Coin Pack
    heritageCoin: '/images/shop/heritage-coin-pack-1920x1440.png',
    // Verdant Dreamscape Print
    verdantDreamscape: '/images/shop/verdant-dreamscape-print-1920x1440.png',
    // Medal Base Template
    medalTemplate: '/images/shop/medal-base-template-1920x1440.png',
  },
};

// =============================================================================
// СЕТЕВЫЕ URL (исходные) - используются когда USE_LOCAL_IMAGES = false
// =============================================================================

export const networkImages = {
  hero: {
    aiContent: 'https://img.rocket.new/generatedImages/rocket_gen_img_106584dfb-1764689812608.png',
    commission: 'https://images.unsplash.com/photo-1691317836447-2710cac29f1e',
    models3d: 'https://img.rocket.new/generatedImages/rocket_gen_img_16e57863a-1768351656360.png',
  },
  featured: {
    bronzeVictory: 'https://images.unsplash.com/photo-1634721648359-679131f453f0',
    cosmicWeave:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1e9abf01c-1773829118252.png',
    numismaticHeritage: 'https://images.unsplash.com/photo-1643393670617-0915d3f6d1b8',
    verdantMachine:
      'https://img.rocket.new/generatedImages/rocket_gen_img_113c53f41-1769368443405.png',
  },
  news: {
    basRelief: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bceaf767-1772139672744.png',
    midjourney: 'https://img.rocket.new/generatedImages/rocket_gen_img_1114f5871-1773829115154.png',
    medalsVelvet: 'https://images.unsplash.com/photo-1658093656611-0c6efe7f5ffd',
    aiVideo: 'https://img.rocket.new/generatedImages/rocket_gen_img_185c526bb-1772183031822.png',
  },
  shop: {
    eagleRelief:
      'https://img.rocket.new/generatedImages/rocket_gen_img_18ba47f53-1773829115449.png',
    heritageCoin:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1f8ad6ef0-1773829116997.png',
    verdantDreamscape:
      'https://img.rocket.new/generatedImages/rocket_gen_img_14fb4b444-1773829115289.png',
    medalTemplate:
      'https://img.rocket.new/generatedImages/rocket_gen_img_12d229f67-1773829115280.png',
  },
};

// =============================================================================
// ФУНКЦИЯ ПОЛУЧЕНИЯ ПУТИ К ИЗОБРАЖЕНИЮ
// =============================================================================

/**
 * Возвращает путь к изображению (локальный или сетевой)
 * @param category - категория (hero, featured, news, shop)
 * @param key - ключ изображения в категории
 * @returns строка с URL изображения
 */
export function getImage(category: keyof typeof localImages, key: string): string {
  if (USE_LOCAL_IMAGES) {
    return localImages[category]?.[key as keyof (typeof localImages)[typeof category]] || '';
  }
  return networkImages[category]?.[key as keyof (typeof networkImages)[typeof category]] || '';
}
