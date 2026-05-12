import { Router } from 'express';
import { db } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/', (_, res) => {
  res.json(db.prepare('SELECT * FROM faq ORDER BY position ASC, id ASC').all());
});

router.post('/', requireAuth, (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) return res.status(400).json({ error: 'question et answer requis' });
  const pos = db.prepare('SELECT COUNT(*) as c FROM faq').get().c;
  const r = db.prepare('INSERT INTO faq (question,answer,position) VALUES (?,?,?)').run(question, answer, pos);
  res.status(201).json(db.prepare('SELECT * FROM faq WHERE id=?').get(r.lastInsertRowid));
});

router.put('/:id', requireAuth, (req, res) => {
  const { question, answer, position } = req.body;
  if (!question || !answer) return res.status(400).json({ error: 'question et answer requis' });
  db.prepare('UPDATE faq SET question=?,answer=?,position=? WHERE id=?').run(
    question, answer, position ?? 0, req.params.id
  );
  res.json(db.prepare('SELECT * FROM faq WHERE id=?').get(req.params.id));
});

router.delete('/:id', requireAuth, (req, res) => {
  if (!db.prepare('DELETE FROM faq WHERE id=?').run(req.params.id).changes)
    return res.status(404).json({ error: 'FAQ introuvable' });
  res.json({ ok: true });
});

export default router;
