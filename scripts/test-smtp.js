#!/usr/bin/env node
// Usage : SMTP_PASS=re_xxxxx node scripts/test-smtp.js [destinataire@example.com]
// Vérifie la chaîne SMTP Resend de bout en bout (auth + DKIM/SPF/DMARC).

import nodemailer from 'nodemailer';

const TO = process.argv[2] || process.env.ADMIN_EMAIL || 'heyarlow@gmail.com';
const FROM = process.env.SMTP_FROM || 'no-reply@actionnuisibles13.com';
const FROM_NAME = process.env.SMTP_FROM_NAME || 'Action Nuisibles 13';
const PASS = process.env.SMTP_PASS;

if (!PASS) {
  console.error('❌ SMTP_PASS manquant.');
  console.error('   Lance : SMTP_PASS=re_xxxxxxxx node scripts/test-smtp.js [destinataire]');
  console.error('   Ou  : set -a && source .env && set +a && node scripts/test-smtp.js');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.resend.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: true,
  auth: { user: process.env.SMTP_USER || 'resend', pass: PASS },
});

console.log(`→ Envoi de "${FROM}" vers "${TO}" via Resend…`);

try {
  const info = await transporter.sendMail({
    from: `"${FROM_NAME}" <${FROM}>`,
    to: TO,
    subject: 'Test SMTP Resend — Action Nuisibles 13',
    text: 'Si tu lis ceci, la chaîne SMTP Resend (auth + DKIM + SPF + DMARC) fonctionne ✅',
    html: '<p>Si tu lis ceci, la chaîne SMTP Resend (auth + DKIM + SPF + DMARC) fonctionne <strong>✅</strong></p>',
  });
  console.log(`✅ Email envoyé. messageId = ${info.messageId}`);
  console.log(`   Vérifie ta boîte (et le dossier spam) pour : ${TO}`);
  process.exit(0);
} catch (err) {
  console.error('❌ Échec envoi :', err.message);
  if (err.response) console.error('   Réponse SMTP :', err.response);
  process.exit(1);
}
