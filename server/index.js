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
const PORT = parseInt(process.env.ADMIN_PORT || '3001', 10);
const PUBLIC_DIR = path.join(__dirname, '../public');

const app = express();
app.use(express.json({ limit: '10mb' }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'an13-admin-secret-change-me-in-prod',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', maxAge: 8 * 60 * 60 * 1000 },
}));

app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use(express.static(PUBLIC_DIR));

app.get('/admin', (req, res) => {
  if (req.session.userId) return res.redirect('/admin/dashboard.html');
  res.redirect('/admin/login.html');
});

app.use('/auth', authRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/uploads', uploadsRoutes);
app.get('/api/health', (_, res) => res.json({ ok: true }));

initDb();

app.listen(PORT, () => {
  console.log(`\n✅  Back-office : http://localhost:${PORT}/admin`);
  console.log(`    Identifiants : admin / admin123\n`);
});
