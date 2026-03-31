/**
 * Скрипт для загрузки изображений с удалённых серверов
 * 
 * Запуск: node scripts/download-images.js
 * 
 * Изображения будут сохранены в папку public/images/
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const rootDir = path.resolve(__dirname, '..');

// Конфигурация изображений для загрузки
const imagesToDownload = [
 // ===========================================================================
 // HERO SECTION
 // ===========================================================================
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_106584dfb-1764689812608.png',
 path: 'public/images/hero/ai-content-1920x1080.png',
 desc: 'AI-generated surreal landscape'
 },
 {
 url: 'https://images.unsplash.com/photo-1691317836447-2710cac29f1e',
 path: 'public/images/hero/commission-1920x1080.jpg',
 desc: 'Gold commemorative medal'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_16e57863a-1768351656360.png',
 path: 'public/images/hero/3d-models-1920x1080.png',
 desc: '3D commemorative coin'
 },

 // ===========================================================================
 // FEATURED WORKS
 // ===========================================================================
 {
 url: 'https://images.unsplash.com/photo-1634721648359-679131f453f0',
 path: 'public/images/featured/bronze-victory-relief-1920x2400.jpg',
 desc: 'Bronze victory goddess bas relief'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e9abf01c-1773829118252.png',
 path: 'public/images/featured/cosmic-weave-1920x1080.png',
 desc: 'AI-generated cosmic weave'
 },
 {
 url: 'https://images.unsplash.com/photo-1643393670617-0915d3f6d1b8',
 path: 'public/images/featured/numismatic-heritage-1920x1280.jpg',
 desc: 'Heritage coin set'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_113c53f41-1769368443405.png',
 path: 'public/images/featured/verdant-machine-1920x2400.png',
 desc: 'AI-generated verdant machine'
 },

 // ===========================================================================
 // NEWS ARTICLES
 // ===========================================================================
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bceaf767-1772139672744.png',
 path: 'public/images/news/bas-relief-depth-1920x1200.png',
 desc: 'ZBrush bas relief interface'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1114f5871-1773829115154.png',
 path: 'public/images/news/midjourney-1920x1200.png',
 desc: 'AI-generated coin concept art'
 },
 {
 url: 'https://images.unsplash.com/photo-1658093656611-0c6efe7f5ffd',
 path: 'public/images/news/medals-velvet-1920x1200.jpg',
 desc: 'Commemorative medals on velvet'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_185c526bb-1772183031822.png',
 path: 'public/images/news/ai-video-1920x1200.png',
 desc: 'AI video generation interface'
 },

 // ===========================================================================
 // SHOP PREVIEW
 // ===========================================================================
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_18ba47f53-1773829115449.png',
 path: 'public/images/shop/eagle-relief-stl-1920x1440.png',
 desc: 'Eagle bas relief STL'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f8ad6ef0-1773829116997.png',
 path: 'public/images/shop/heritage-coin-pack-1920x1440.png',
 desc: 'Heritage coin pack'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_14fb4b444-1773829115289.png',
 path: 'public/images/shop/verdant-dreamscape-print-1920x1440.png',
 desc: 'Verdant dreamscape print'
 },
 {
 url: 'https://img.rocket.new/generatedImages/rocket_gen_img_12d229f67-1773829115280.png',
 path: 'public/images/shop/medal-base-template-1920x1440.png',
 desc: 'Medal base template'
 },
];

// Создаём директории
function ensureDir(dirPath) {
 const fullPath = path.join(rootDir, dirPath);
 if (!fs.existsSync(fullPath)) {
 fs.mkdirSync(fullPath, { recursive: true });
 console.log(`📁 Created: ${dirPath}`);
 }
}

// Скачиваем файл
function downloadFile(url, destPath) {
 return new Promise((resolve, reject) => {
 const fullPath = path.join(rootDir, destPath);
 const dir = path.dirname(fullPath);
   
 // Определяем протокол
 const client = url.startsWith('https') ? https : http;

 console.log(`⬇️ Downloading: ${url}`);
 console.log(` → ${destPath}`);

 // Для Unsplash добавляем параметры для полного изображения
 let downloadUrl = url;
 if (url.includes('unsplash.com')) {
 // Добавляем параметры для получения большого изображения
 const separator = url.includes('?') ? '&' : '?';
 downloadUrl = `${url}${separator}q=80&w=1920&auto=format&fit=crop`;
 }

 const file = fs.createWriteStream(fullPath);

 client.get(downloadUrl, (response) => {
 // Редирект
 if (response.statusCode ===301 || response.statusCode ===302) {
 file.close();
 downloadFile(response.headers.location, destPath)
 .then(resolve)
 .catch(reject);
 return;
 }

 if (response.statusCode !==200) {
 file.close();
 fs.unlinkSync(fullPath);
 reject(new Error(`Failed to download: ${response.statusCode}`));
 return;
 }

 response.pipe(file);

 file.on('finish', () => {
 file.close();
 const stats = fs.statSync(fullPath);
 console.log(` ✅ Saved (${(stats.size /1024).toFixed(1)} KB)\n`);
 resolve();
 });
 }).on('error', (err) => {
 file.close();
 if (fs.existsSync(fullPath)) {
 fs.unlinkSync(fullPath);
 }
 reject(err);
 });
 });
}

// Основная функция
async function main() {
 console.log('='.repeat(60));
 console.log('🖼️ Image Downloader for CreativeSphere');
 console.log('='.repeat(60));
 console.log();

 // Создаём все необходимые директории
 const dirs = new Set(imagesToDownload.map(img => path.dirname(img.path)));
 dirs.forEach(dir => ensureDir(dir));

 console.log();
 console.log(`📥 Ready to download ${imagesToDownload.length} images`);
 console.log();

 let success =0;
 let failed =0;

 for (const img of imagesToDownload) {
 try {
 await downloadFile(img.url, img.path);
 success++;
 } catch (err) {
 console.error(`❌ Failed: ${err.message}\n`);
 failed++;
 }
 }

 console.log('='.repeat(60));
 console.log(`✅ Download complete: ${success} images`);
 if (failed >0) {
 console.log(`❌ Failed: ${failed} images`);
 }
 console.log('='.repeat(60));

 if (success >0) {
 console.log();
 console.log('📝 Next steps:');
 console.log('1. Открой src/config/images.ts');
 console.log('2. Измени: USE_LOCAL_IMAGES = true');
 console.log('3. Пересобери проект: npm run build');
 }
}

main().catch(console.error);
