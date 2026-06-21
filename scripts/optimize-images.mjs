/**
 * Build-time image optimisation (host-portable).
 *
 * Reads source images from image-src/ (NOT served) and writes optimised
 * AVIF + WebP + compressed fallbacks into public/assets/opt/ (served), plus the
 * favicon set, OG card, and PWA logos. Outputs are committed, so deployment needs
 * no image service — identical behaviour on Vercel, Cloudflare Pages, or any host.
 *
 * Keeping the large originals out of public/ means they never bloat the deploy.
 *
 * Re-run after adding/replacing a source image:  npm run images:optimize
 */
import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const SRC = join(ROOT, 'image-src');
const OUT_DIR = join(PUBLIC, 'assets/opt');
const OG_DIR = join(PUBLIC, 'assets/og');

// Each entry: path under image-src/, max render width (never enlarged), fallback format.
const TARGETS = [
  { src: 'team/jacqui-henderson.jpg', width: 256, fallback: 'jpeg' },
  { src: 'team/katherine-hunt.jpg',   width: 256, fallback: 'jpeg' },
  { src: 'team/ash-crick.png',        width: 256, fallback: 'png'  },
  { src: 'product/dashboard.png',     width: 1600, fallback: 'png' },
  { src: 'product/quiz-moneypattern.jpg', width: 800, fallback: 'jpeg' },
  { src: 'product/quiz-actionplan.jpg',   width: 800, fallback: 'jpeg' },
];

function outBase(src) {
  return join(OUT_DIR, src.replace(/\.[^.]+$/, ''));
}

async function optimizeTargets() {
  let total = 0;
  for (const t of TARGETS) {
    const srcPath = join(SRC, t.src);
    const outPath = outBase(t.src);
    await mkdir(dirname(outPath), { recursive: true });

    const pipeline = sharp(srcPath).resize({ width: t.width, withoutEnlargement: true });
    const meta = await pipeline.clone().metadata();
    const fallbackExt = t.fallback === 'jpeg' ? 'jpg' : t.fallback;

    await pipeline.clone().avif({ quality: 55 }).toFile(`${outPath}.avif`);
    await pipeline.clone().webp({ quality: 72 }).toFile(`${outPath}.webp`);
    if (t.fallback === 'jpeg') {
      await pipeline.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(`${outPath}.${fallbackExt}`);
    } else {
      await pipeline.clone().png({ compressionLevel: 9, palette: true }).toFile(`${outPath}.${fallbackExt}`);
    }

    const w = Math.min(t.width, meta.width);
    const h = Math.round((meta.height / meta.width) * w);
    const avifSize = (await stat(`${outPath}.avif`)).size;
    total += avifSize;
    console.log(`${t.src}  ->  assets/opt/${t.src.replace(/\.[^.]+$/, '')}.{avif,webp,${fallbackExt}}  (${w}x${h}, avif ${(avifSize / 1024).toFixed(1)}KB)`);
  }
  console.log(`Total AVIF payload: ${(total / 1024).toFixed(1)}KB`);
}

// Favicon / app icons (auto-detected by Next) + PWA logos, from the brand mark.
async function generateIcons() {
  const mark = join(SRC, 'mark-color.png');
  const appDir = join(ROOT, 'app');
  await mkdir(OG_DIR, { recursive: true });
  await sharp(mark).resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(join(appDir, 'icon.png'));
  await sharp(mark).resize(180, 180, { fit: 'contain', background: { r: 11, g: 11, b: 69, alpha: 1 } })
    .png().toFile(join(appDir, 'apple-icon.png'));
  await sharp(mark).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(join(OG_DIR, 'logo-512.png'));
  await sharp(mark).resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(join(OG_DIR, 'logo-192.png'));
  console.log('app/icon.png + app/apple-icon.png + assets/og/logo-{192,512}.png generated');
}

// 1200x630 social card.
async function generateOg() {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0B0B45"/>
        <stop offset="100%" stop-color="#1D4A75"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <text x="84" y="300" font-family="Helvetica, Arial, sans-serif" font-size="96" font-weight="800" fill="#ffffff" letter-spacing="-4">MoneyMind</text>
    <text x="88" y="372" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="600" fill="#5298BF">AI Behavioral Intelligence for Financial Advisors</text>
    <text x="88" y="436" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="400" fill="#c7cde0">A psychological blueprint of how your clients make financial decisions.</text>
  </svg>`;
  await mkdir(OG_DIR, { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(join(OG_DIR, 'og-image.png'));
  console.log('assets/og/og-image.png (1200x630) generated');
}

async function run() {
  await optimizeTargets();
  await generateIcons();
  await generateOg();
  console.log('Done.');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
