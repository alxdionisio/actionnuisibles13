import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// DATA_DIR configurable via env : sur Railway, monter un volume sur /data
export const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '../.data');
fs.mkdirSync(DATA_DIR, { recursive: true });

export const db = new Database(path.join(DATA_DIR, 'cms.db'));
db.pragma('journal_mode = WAL');

const SCHEMA = `
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  token_hash TEXT UNIQUE NOT NULL,
  expires_at TEXT NOT NULL,
  used_at TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES admin_users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_reset_tokens_hash ON password_reset_tokens(token_hash);
CREATE INDEX IF NOT EXISTS idx_reset_tokens_user ON password_reset_tokens(user_id);

CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  date TEXT DEFAULT '',
  category TEXT DEFAULT '',
  read_minutes INTEGER DEFAULT 4,
  image TEXT DEFAULT '',
  content TEXT NOT NULL DEFAULT '{}',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  image TEXT DEFAULT '',
  hero_subtitle TEXT DEFAULT '',
  content TEXT NOT NULL DEFAULT '{}',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS faq (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  position INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`;

function migrateAdminUsers() {
  const cols = db.prepare("PRAGMA table_info(admin_users)").all().map((c) => c.name);
  // SQLite ALTER TABLE ADD COLUMN n'accepte que des DEFAULT constants (pas CURRENT_TIMESTAMP).
  // On ajoute sans DEFAULT puis on backfill avec datetime('now').
  if (!cols.includes('email')) {
    db.exec("ALTER TABLE admin_users ADD COLUMN email TEXT");
  }
  if (!cols.includes('created_at')) {
    db.exec("ALTER TABLE admin_users ADD COLUMN created_at TEXT");
    db.exec("UPDATE admin_users SET created_at = datetime('now') WHERE created_at IS NULL");
  }
  if (!cols.includes('updated_at')) {
    db.exec("ALTER TABLE admin_users ADD COLUMN updated_at TEXT");
    db.exec("UPDATE admin_users SET updated_at = datetime('now') WHERE updated_at IS NULL");
  }
}

function seedAdminUser() {
  if (db.prepare('SELECT 1 FROM admin_users LIMIT 1').get()) return;

  const username = process.env.ADMIN_USERNAME?.trim();
  const password = process.env.ADMIN_PASSWORD;
  const email = process.env.ADMIN_EMAIL?.trim() || null;

  if (username && password) {
    const hash = bcrypt.hashSync(password, 12);
    db.prepare('INSERT INTO admin_users (username, password_hash, email) VALUES (?,?,?)')
      .run(username, hash, email);
    console.log(`✓ Compte admin créé depuis ADMIN_USERNAME/ADMIN_PASSWORD : ${username}`);
    return;
  }

  // Pas d'admin, pas d'env : générer un mot de passe aléatoire et logguer une fois.
  const fallbackUsername = 'admin';
  const generated = crypto.randomBytes(18).toString('base64url');
  const hash = bcrypt.hashSync(generated, 12);
  db.prepare('INSERT INTO admin_users (username, password_hash, email) VALUES (?,?,?)')
    .run(fallbackUsername, hash, email);

  const banner = '='.repeat(72);
  console.warn(`\n${banner}`);
  console.warn('  COMPTE ADMIN INITIAL GÉNÉRÉ — À NOTER MAINTENANT (non rejoué) :');
  console.warn(`    username : ${fallbackUsername}`);
  console.warn(`    password : ${generated}`);
  console.warn('  Définissez ADMIN_USERNAME/ADMIN_PASSWORD pour fixer ce compte,');
  console.warn('  ou changez-le après login via /auth/forgot-password.');
  console.warn(`${banner}\n`);
}

export function initDb() {
  db.exec(SCHEMA);
  migrateAdminUsers();
  seedAdminUser();

  const needArticles = !db.prepare('SELECT 1 FROM articles LIMIT 1').get();
  const needServices = !db.prepare('SELECT 1 FROM services LIMIT 1').get();
  const needFaq = !db.prepare('SELECT 1 FROM faq LIMIT 1').get();

  if (needArticles || needServices || needFaq) {
    seedContent(needArticles, needServices, needFaq);
  }
}

async function seedContent(doArticles, doServices, doFaq) {
  try {
    const { seedArticles, seedServices, seedFaq } = await import('./seedData.js');

    if (doArticles) {
      const stmt = db.prepare(
        'INSERT OR IGNORE INTO articles (slug,title,date,category,read_minutes,image,content) VALUES (?,?,?,?,?,?,?)'
      );
      for (const a of seedArticles) {
        stmt.run(a.slug, a.title, a.date || '', a.category || '', a.readMinutes || 4, a.image || '', JSON.stringify(a.content || {}));
      }
      console.log(`✓ ${seedArticles.length} articles importés`);
    }

    if (doServices) {
      const stmt = db.prepare(
        'INSERT OR IGNORE INTO services (slug,title,description,image,hero_subtitle,content) VALUES (?,?,?,?,?,?)'
      );
      for (const s of seedServices) {
        stmt.run(s.slug, s.title, s.description || '', s.image || '', s.heroSubtitle || '', JSON.stringify(s.content || {}));
      }
      console.log(`✓ ${seedServices.length} services importés`);
    }

    if (doFaq) {
      const stmt = db.prepare('INSERT OR IGNORE INTO faq (question,answer,position) VALUES (?,?,?)');
      seedFaq.forEach((f, i) => stmt.run(f.question, f.answer, i));
      console.log(`✓ ${seedFaq.length} questions FAQ importées`);
    }
  } catch (e) {
    console.warn('Avertissement seeding :', e.message);
  }
}
