import rateLimit from 'express-rate-limit';

// Limiteurs in-memory (gratuit) — suffisant pour 1 instance.
// Pour multi-instance, brancher un store Redis/SQLite via express-rate-limit.

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Trop de tentatives de connexion. Réessayez dans 15 minutes.' },
});

export const forgotLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Trop de demandes de réinitialisation. Réessayez dans 1 heure.' },
});

export const resetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Trop de tentatives de réinitialisation. Réessayez plus tard.' },
});
