import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../.data');
fs.mkdirSync(DATA_DIR, { recursive: true });

export const db = new Database(path.join(DATA_DIR, 'cms.db'));
db.pragma('journal_mode = WAL');

const SCHEMA = `
CREATE TABLE IF NOT EXISTS admin_users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

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

export function initDb() {
  db.exec(SCHEMA);

  if (!db.prepare('SELECT 1 FROM admin_users LIMIT 1').get()) {
    const hash = bcrypt.hashSync('admin123', 10);
    db.prepare('INSERT INTO admin_users (username, password_hash) VALUES (?,?)').run('admin', hash);
    console.log('Compte admin créé : admin / admin123');
  }

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
