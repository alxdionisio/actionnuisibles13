import nodemailer from 'nodemailer';

// SMTP générique compatible avec tous les providers gratuits :
//   - Brevo (ex Sendinblue) : 300 emails/jour gratuits
//       SMTP_HOST=smtp-relay.brevo.com SMTP_PORT=587
//   - Resend : 3 000 emails/mois (100/jour) gratuits
//       SMTP_HOST=smtp.resend.com SMTP_PORT=465 SMTP_USER=resend
//   - Mailtrap (capture dev, jamais envoyé pour de vrai) : free tier illimité
//       SMTP_HOST=sandbox.smtp.mailtrap.io SMTP_PORT=2525
//   - Gmail (App Password) : 500 emails/jour gratuits
//       SMTP_HOST=smtp.gmail.com SMTP_PORT=465
//
// Si SMTP_HOST n'est pas défini, on log le contenu dans la console (mode dev).

const SMTP_HOST = process.env.SMTP_HOST?.trim();
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER?.trim();
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM?.trim() || 'no-reply@actionnuisibles13.com';
const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME?.trim() || 'Action Nuisibles 13';

let transporter = null;

function getTransporter() {
  if (transporter || !SMTP_HOST) return transporter;
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  return transporter;
}

export function isMailerConfigured() {
  return Boolean(SMTP_HOST);
}

export async function sendMail({ to, subject, text, html }) {
  const t = getTransporter();
  if (!t) {
    // Fallback console : utile en dev, et ne casse jamais la prod (anti-énumération).
    console.warn('\n[mailer] SMTP non configuré — email simulé :');
    console.warn(`  to:      ${to}`);
    console.warn(`  subject: ${subject}`);
    if (text) console.warn(`  text:    ${text}`);
    if (html) console.warn(`  html:    ${html.replace(/\s+/g, ' ').slice(0, 240)}…`);
    console.warn('');
    return { simulated: true };
  }

  const info = await t.sendMail({
    from: `"${SMTP_FROM_NAME}" <${SMTP_FROM}>`,
    to,
    subject,
    text,
    html,
  });
  return { messageId: info.messageId };
}

export function buildResetEmail({ resetUrl, username }) {
  const text = [
    `Bonjour ${username},`,
    '',
    'Vous avez demandé à réinitialiser votre mot de passe sur le back-office Action Nuisibles 13.',
    '',
    `Lien de réinitialisation (valide 1 heure) : ${resetUrl}`,
    '',
    'Si vous n\'êtes pas à l\'origine de cette demande, ignorez cet email.',
  ].join('\n');

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1f2937;max-width:520px;margin:0 auto;padding:24px;">
      <h2 style="color:#1a6b3c;margin:0 0 16px;">Réinitialisation de mot de passe</h2>
      <p>Bonjour <strong>${escapeHtml(username)}</strong>,</p>
      <p>Vous avez demandé à réinitialiser votre mot de passe sur le back-office <strong>Action Nuisibles 13</strong>.</p>
      <p style="margin:24px 0;">
        <a href="${resetUrl}" style="display:inline-block;background:#1a6b3c;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">
          Réinitialiser mon mot de passe
        </a>
      </p>
      <p style="font-size:.85rem;color:#6b7280;">Ce lien est valide pendant <strong>1 heure</strong>. S'il a expiré, faites une nouvelle demande.</p>
      <p style="font-size:.85rem;color:#6b7280;">Si vous n'êtes pas à l'origine de cette demande, ignorez simplement cet email.</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
      <p style="font-size:.75rem;color:#9ca3af;word-break:break-all;">Lien direct : ${resetUrl}</p>
    </div>
  `;

  return { text, html };
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}
