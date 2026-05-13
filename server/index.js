import express from 'express';
import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDb, DATA_DIR } from './db.js';
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

const PLACEHOLDER_SECRETS = new Set(['an13-admin-secret-change-me-in-prod', 'change-me', '']);
const SESSION_SECRET = process.env.SESSION_SECRET?.trim();

if (!SESSION_SECRET || PLACEHOLDER_SECRETS.has(SESSION_SECRET)) {
  if (IS_PROD) {
    console.error('FATAL : SESSION_SECRET doit être défini en production (>= 32 caractères aléatoires).');
    process.exit(1);
  }
  console.warn('⚠️  SESSION_SECRET non défini : utilisation d\'un secret éphémère (DEV uniquement).');
}
const RUNTIME_SESSION_SECRET = SESSION_SECRET && !PLACEHOLDER_SECRETS.has(SESSION_SECRET)
  ? SESSION_SECRET
  : `dev-${Math.random().toString(36).slice(2)}-${Date.now()}`;

const app = express();
app.set('trust proxy', 1);

// Redirection HTTP → HTTPS en production (Railway passe X-Forwarded-Proto)
app.use((req, res, next) => {
  if (IS_PROD && req.headers['x-forwarded-proto'] === 'http') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

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

// Session store SQLite (gratuit, persistant, fichier dans DATA_DIR)
const SQLiteStore = connectSqlite3(session);
app.use(session({
  store: new SQLiteStore({ db: 'sessions.db', dir: DATA_DIR, concurrentDB: true }),
  name: 'an13.sid',
  secret: RUNTIME_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    sameSite: IS_PROD ? 'none' : 'lax',
    secure: IS_PROD,
    maxAge: 8 * 60 * 60 * 1000,
  },
}));

const ADMIN_DIR = path.join(__dirname, 'admin');

// Sert les assets de l'admin à la racine ET sous /admin (compatibilité)
app.use(express.static(ADMIN_DIR));
app.use('/admin', express.static(ADMIN_DIR));
// Sert les uploads (images du back-office)
app.use('/uploads', express.static(path.join(PUBLIC_DIR, 'uploads')));

// Route racine : sert directement login ou dashboard selon l'état de session
// (URL reste / dans la barre du navigateur, pas de redirect)
app.get('/', (req, res) => {
  const file = req.session.userId ? 'dashboard.html' : 'login.html';
  res.sendFile(path.join(ADMIN_DIR, file));
});

// Compatibilité ancienne URL /admin → redirige vers /
app.get('/admin', (req, res) => res.redirect('/'));

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
