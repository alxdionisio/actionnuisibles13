import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDb } from './db.js';
import authRoutes from './routes/auth.js';
import articlesRoutes from './routes/articles.js';
import servicesRoutes from './routes/services.js';
import faqRoutes from './routes/faq.js';
import uploadsRoutes from './routes/uploads.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Railway injecte PORT automatiquement, sinon ADMIN_PORT, sinon 3001 en local
const PORT = parseInt(process.env.PORT || process.env.ADMIN_PORT || '3001', 10);
const PUBLIC_DIR = path.join(__dirname, '../public');
const IS_PROD = process.env.NODE_ENV === 'production';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://www.actionnuisibles13.com,https://actionnuisibles13.com')
  .split(',')
  .map((s) => s.trim());

if (IS_PROD && (!process.env.SESSION_SECRET || process.env.SESSION_SECRET === 'an13-admin-secret-change-me-in-prod')) {
  console.error('FATAL : SESSION_SECRET doit être défini en production.');
  process.exit(1);
}

const app = express();
app.use(express.json({ limit: '10mb' }));

// CORS pour permettre au front-office (GitHub Pages) d'appeler /api
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Vary', 'Origin');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.set('trust proxy', 1);
app.use(session({
  secret: process.env.SESSION_SECRET || 'an13-admin-secret-change-me-in-prod',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: IS_PROD ? 'none' : 'lax',
    secure: IS_PROD,
    maxAge: 8 * 60 * 60 * 1000,
  },
}));

app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use(express.static(PUBLIC_DIR));

app.get('/admin', (req, res) => {
  if (req.session.userId) return res.redirect('/admin/dashboard.html');
  res.redirect('/admin/login.html');
});

// Healthcheck en premier, AVANT initDb, pour qu'il réponde même si la DB est lente à initialiser
app.get('/api/health', (_, res) => res.json({ ok: true }));

app.use('/auth', authRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/uploads', uploadsRoutes);

try {
  initDb();
} catch (err) {
  console.error('Erreur init DB :', err);
  process.exit(1);
}

// Important : binder explicitement sur 0.0.0.0 pour Railway/Docker
// (sinon Node bind sur ::1 IPv6 localhost et le healthcheck externe échoue).
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Back-office Express en écoute sur 0.0.0.0:${PORT}`);
  console.log(`   NODE_ENV=${process.env.NODE_ENV || 'development'}`);
  console.log(`   DATA_DIR=${process.env.DATA_DIR || '<default .data>'}`);
});

process.on('unhandledRejection', (err) => {
  console.error('UnhandledRejection :', err);
});
process.on('uncaughtException', (err) => {
  console.error('UncaughtException :', err);
  process.exit(1);
});
