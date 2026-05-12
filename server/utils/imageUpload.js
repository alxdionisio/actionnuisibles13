import fs from 'fs';
import path from 'path';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const UPLOAD_DIR = path.join(__dirname, '../../public/uploads');
const MAX_BYTES = 5 * 1024 * 1024;

function slugifyBaseName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80) || 'image';
}

export function ensureUploadDir() {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export async function saveUploadedImage(buffer, originalName = 'image') {
  if (!buffer?.length) throw new Error('Fichier image manquant');
  if (buffer.length > MAX_BYTES) throw new Error('Image trop volumineuse (5 Mo max)');

  const meta = await sharp(buffer).metadata();
  const allowedFormats = new Set(['jpeg', 'png', 'webp', 'avif', 'gif']);
  if (!meta.format || !allowedFormats.has(meta.format)) {
    throw new Error('Format image non pris en charge');
  }

  ensureUploadDir();
  const base = slugifyBaseName(path.parse(originalName).name);
  const filename = `${base}-${randomBytes(4).toString('hex')}.webp`;
  const outPath = path.join(UPLOAD_DIR, filename);

  await sharp(buffer)
    .rotate()
    .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);

  return {
    path: `/uploads/${filename}`,
    filename,
    size: fs.statSync(outPath).size,
  };
}

export function listUploadedImages() {
  ensureUploadDir();
  return fs.readdirSync(UPLOAD_DIR)
    .filter((name) => /\.(webp|png|jpe?g|avif|gif)$/i.test(name))
    .map((name) => {
      const fullPath = path.join(UPLOAD_DIR, name);
      const stat = fs.statSync(fullPath);
      return {
        path: `/uploads/${name}`,
        filename: name,
        updatedAt: stat.mtime.toISOString(),
        size: stat.size,
      };
    })
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}
