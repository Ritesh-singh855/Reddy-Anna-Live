/*
  Generate .webp copies for PNG/JPG images in src/assets and public/images.
  Run as part of prebuild to ensure .webp exist for <picture> fallbacks.
*/

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const roots = [
  path.resolve(process.cwd(), 'src/assets'),
  path.resolve(process.cwd(), 'public/images'),
];

const exts = new Set(['.png', '.jpg', '.jpeg']);

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true }).catch(() => {});
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.has(ext)) return;
  const outPath = filePath.replace(ext, '.webp');
  try {
    // Skip if fresh
    const [srcStat, outStat] = await Promise.allSettled([
      fs.promises.stat(filePath),
      fs.promises.stat(outPath),
    ]);
    if (
      outStat.status === 'fulfilled' &&
      srcStat.status === 'fulfilled' &&
      outStat.value.mtimeMs >= srcStat.value.mtimeMs
    ) {
      return; // up-to-date
    }
    await sharp(filePath).webp({ quality: 80 }).toFile(outPath);
    console.log(`webp: ${path.relative(process.cwd(), outPath)}`);
  } catch (e) {
    console.warn('webp generation failed for', filePath, e?.message || e);
  }
}

async function walk(dir) {
  let entries;
  try {
    entries = await fs.promises.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(p);
    } else {
      await processFile(p);
    }
  }
}

(async () => {
  for (const root of roots) {
    await ensureDir(root);
    await walk(root);
  }
})();

