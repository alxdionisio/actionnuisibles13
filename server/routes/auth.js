import { Router } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { db } from '../db.js';
import { loginLimiter, forgotLimiter, resetLimiter } from '../middleware/rateLimit.js';
import { sendMail, buildResetEmail } from '../utils/mailer.js';

const router = Router();

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 heure
const PASSWORD_MIN_LENGTH = 10;

function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function regenerateSession(req) {
  return new Promise((resolve, reject) => {
    req.session.regenerate((err) => (err ? reject(err) : resolve()));
  });
}

function destroySession(req) {
  return new Promise((resolve) => {
    if (!req.session) return resolve();
    req.session.destroy(() => resolve());
  });
}

router.post('/login', loginLimiter, async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: 'Identifiants requis' });
  }

  const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);
  // Hash bidon pour égaliser le temps de réponse user-existe-pas vs mauvais-mdp
  const fakeHash = '$2a$12$invalidsaltinvalidsaltinvalidsaltinvalidsaltinvalidsaltinvalidsalt';
  const ok = bcrypt.compareSync(password, user?.password_hash || fakeHash);

  if (!user || !ok) {
    return res.status(401).json({ error: 'Identifiants incorrects' });
  }

  try {
    await regenerateSession(req);
  } catch (err) {
    console.error('session.regenerate:', err);
    return res.status(500).json({ error: 'Erreur de session' });
  }
  req.session.userId = user.id;
  req.session.username = user.username;
  res.json({ ok: true, username: user.username });
});

router.post('/logout', async (req, res) => {
  await destroySession(req);
  res.clearCookie('an13.sid');
  res.json({ ok: true });
});

router.get('/me', (req, res) => {
  if (!req.session.userId) return res.status(401).json({ error: 'Non authentifié' });
  res.json({ username: req.session.username });
});

// --- Mot de passe oublié ---------------------------------------------------

router.post('/forgot-password', forgotLimiter, async (req, res) => {
  const identifier = String(req.body?.identifier || '').trim();
  // Réponse générique systématique pour bloquer l'énumération de comptes.
  const genericResponse = {
    ok: true,
    message: 'Si un compte correspond, un email de réinitialisation a été envoyé.',
  };

  if (!identifier) return res.json(genericResponse);

  const user = db.prepare(
    'SELECT id, username, email FROM admin_users WHERE username = ? OR (email IS NOT NULL AND email = ?)'
  ).get(identifier, identifier);

  if (!user || !user.email) {
    // Pas de leak : on répond pareil même si pas d'email associé
    return res.json(genericResponse);
  }

  // Token aléatoire 32 bytes → URL-safe base64. On ne stocke que le hash.
  const rawToken = crypto.randomBytes(32).toString('base64url');
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS).toISOString();

  // Invalide les tokens précédents non utilisés pour ce user
  db.prepare(
    "UPDATE password_reset_tokens SET used_at = CURRENT_TIMESTAMP WHERE user_id = ? AND used_at IS NULL"
  ).run(user.id);

  db.prepare(
    'INSERT INTO password_reset_tokens (user_id, token_hash, expires_at) VALUES (?,?,?)'
  ).run(user.id, tokenHash, expiresAt);

  const baseUrl = (process.env.PUBLIC_URL || `${req.protocol}://${req.get('host')}`).replace(/\/+$/, '');
  const resetUrl = `${baseUrl}/reset-password.html?token=${encodeURIComponent(rawToken)}`;
  const { text, html } = buildResetEmail({ resetUrl, username: user.username });

  try {
    await sendMail({
      to: user.email,
      subject: 'Réinitialisation de votre mot de passe — Action Nuisibles 13',
      text,
      html,
    });
  } catch (err) {
    console.error('sendMail forgot-password:', err);
    // On répond quand même OK pour ne pas révéler l'existence du compte.
  }

  res.json(genericResponse);
});

router.post('/reset-password', resetLimiter, async (req, res) => {
  const token = String(req.body?.token || '').trim();
  const newPassword = String(req.body?.password || '');

  if (!token || !newPassword) {
    return res.status(400).json({ error: 'Token et nouveau mot de passe requis' });
  }
  if (newPassword.length < PASSWORD_MIN_LENGTH) {
    return res.status(400).json({ error: `Mot de passe trop court (min ${PASSWORD_MIN_LENGTH} caractères)` });
  }

  const tokenHash = hashToken(token);
  const row = db.prepare(
    'SELECT id, user_id, expires_at, used_at FROM password_reset_tokens WHERE token_hash = ?'
  ).get(tokenHash);

  if (!row || row.used_at || new Date(row.expires_at).getTime() < Date.now()) {
    return res.status(400).json({ error: 'Lien invalide ou expiré' });
  }

  const hash = bcrypt.hashSync(newPassword, 12);
  const tx = db.transaction(() => {
    db.prepare("UPDATE admin_users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?")
      .run(hash, row.user_id);
    db.prepare("UPDATE password_reset_tokens SET used_at = CURRENT_TIMESTAMP WHERE id = ?")
      .run(row.id);
    // Invalider les autres tokens pendants de ce user
    db.prepare("UPDATE password_reset_tokens SET used_at = CURRENT_TIMESTAMP WHERE user_id = ? AND used_at IS NULL")
      .run(row.user_id);
  });
  tx();

  // Détruire toute session active de ce user (déconnexion forcée partout)
  await destroySession(req);
  res.clearCookie('an13.sid');

  res.json({ ok: true, message: 'Mot de passe réinitialisé. Reconnectez-vous.' });
});

export default router;
