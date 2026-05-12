import { Router } from 'express';
import { db } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

const parse = (row) => row
  ? { ...row, heroSubtitle: row.hero_subtitle, heroImage: row.image, content: JSON.parse(row.content) }
  : null;

// GET public — lecture sans authentification
router.get('/', (_, res) => {
  res.json(db.prepare('SELECT * FROM services ORDER BY id ASC').all().map(parse));
});

router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM services WHERE id=?').get(req.params.id);
  if (!row) return res.status(404).json({ error: 'Service introuvable' });
  res.json(parse(row));
});

router.post('/', requireAuth, (req, res) => {
  const { slug, title, description, image, heroSubtitle, content } = req.body;
  if (!slug || !title) return res.status(400).json({ error: 'slug et title requis' });
  try {
    const r = db.prepare(
      'INSERT INTO services (slug,title,description,image,hero_subtitle,content) VALUES (?,?,?,?,?,?)'
    ).run(slug, title, description || '', image || '', heroSubtitle || '', JSON.stringify(content || {}));
    res.status(201).json(parse(db.prepare('SELECT * FROM services WHERE id=?').get(r.lastInsertRowid)));
  } catch (e) {
    if (e.message.includes('UNIQUE')) return res.status(409).json({ error: 'Ce slug existe déjà' });
    throw e;
  }
});

router.put('/:id', requireAuth, (req, res) => {
  const { slug, title, description, image, heroSubtitle, content } = req.body;
  if (!slug || !title) return res.status(400).json({ error: 'slug et title requis' });
  try {
    db.prepare(
      'UPDATE services SET slug=?,title=?,description=?,image=?,hero_subtitle=?,content=?,updated_at=CURRENT_TIMESTAMP WHERE id=?'
    ).run(slug, title, description || '', image || '', heroSubtitle || '', JSON.stringify(content || {}), req.params.id);
    res.json(parse(db.prepare('SELECT * FROM services WHERE id=?').get(req.params.id)));
  } catch (e) {
    if (e.message.includes('UNIQUE')) return res.status(409).json({ error: 'Ce slug existe déjà' });
    throw e;
  }
});

router.delete('/:id', requireAuth, (req, res) => {
  if (!db.prepare('DELETE FROM services WHERE id=?').run(req.params.id).changes)
    return res.status(404).json({ error: 'Service introuvable' });
  res.json({ ok: true });
});

export default router;
