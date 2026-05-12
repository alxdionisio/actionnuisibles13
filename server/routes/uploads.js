import { Router } from 'express';
import multer from 'multer';
import { requireAuth } from '../middleware/auth.js';
import { listUploadedImages, saveUploadedImage } from '../utils/imageUpload.js';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
});

router.get('/', requireAuth, (_, res) => {
  res.json({ items: listUploadedImages() });
});

router.post('/', requireAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Aucun fichier image reçu' });
    const saved = await saveUploadedImage(req.file.buffer, req.file.originalname);
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ error: e.message || 'Import image impossible' });
  }
});

export default router;
