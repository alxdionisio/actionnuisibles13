import { Router } from 'express';
import { db } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const parse = (row) => row
  ? { ...row, readMinutes: row.read_minutes, content: JSON.parse(row.content) }
  : null;

// GET public — lecture du contenu sans authentification
router.get('/', (_, res) => {
  res.json(db.prepare('SELECT * FROM articles ORDER BY id DESC').all().map(parse));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Article introuvable' });
  res.json(parse(row));
});

router.post('/', requireAuth, (req, res) => {
  const { slug, title, date, category, readMinutes, image, content } = req.body;
  if (!slug || !title) return res.status(400).json({ error: 'slug et title requis' });
  try {
    const r = db.prepare(
      'INSERT INTO articles (slug,title,date,category,read_minutes,image,content) VALUES (?,?,?,?,?,?,?)'
    ).run(slug, title, date || '', category || '', readMinutes || 4, image || '', JSON.stringify(content || {}));
    res.status(201).json(parse(db.prepare('SELECT * FROM articles WHERE id=?').get(r.lastInsertRowid)));
  } catch (e) {
    if (e.message.includes('UNIQUE')) return res.status(409).json({ error: 'Ce slug existe déjà' });
    throw e;
  }
});

router.put('/:id', requireAuth, (req, res) => {
  const { slug, title, date, category, readMinutes, image, content } = req.body;
  if (!slug || !title) return res.status(400).json({ error: 'slug et title requis' });
  try {
    db.prepare(
      'UPDATE articles SET slug=?,title=?,date=?,category=?,read_minutes=?,image=?,content=?,updated_at=CURRENT_TIMESTAMP WHERE id=?'
    ).run(slug, title, date || '', category || '', readMinutes || 4, image || '', JSON.stringify(content || {}), req.params.id);
    const row = db.prepare('SELECT * FROM articles WHERE id=?').get(req.params.id);
    if (!row) return res.status(404).json({ error: 'Article introuvable' });
    res.json(parse(row));
  } catch (e) {
    if (e.message.includes('UNIQUE')) return res.status(409).json({ error: 'Ce slug existe déjà' });
    throw e;
  }
});

router.delete('/:id', requireAuth, (req, res) => {
  if (!db.prepare('DELETE FROM articles WHERE id=?').run(req.params.id).changes)
    return res.status(404).json({ error: 'Article introuvable' });
  res.json({ ok: true });
});

export default router;
