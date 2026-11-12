'use server';

import nodemailer from 'nodemailer';

export type ContactState = {
  success?: string;
  error?: string;
  fieldErrors?: { fullname?: string; email?: string; message?: string };
} | null;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real people never fill this hidden field.
  if (formData.get('website')) return { success: 'Message sent. Thank you!' };

  const fullname = String(formData.get('fullname') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const fieldErrors: NonNullable<ContactState>['fieldErrors'] = {};
  if (fullname.length < 2) fieldErrors.fullname = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = 'Please enter a valid email address.';
  if (message.length < 10) fieldErrors.message = 'Please write at least a sentence or two.';
  if (Object.keys(fieldErrors).length) return { fieldErrors };

  const { NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_USER, NODEMAILER_PASS, USER_MAILER, USER_TO } = process.env;
  if (!NODEMAILER_HOST || !NODEMAILER_USER || !NODEMAILER_PASS || !USER_TO) {
    return { error: 'The contact form is not configured yet. Please email me directly instead.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: NODEMAILER_HOST,
      port: Number(NODEMAILER_PORT) || 587,
      auth: { user: NODEMAILER_USER, pass: NODEMAILER_PASS },
    });
    await transporter.sendMail({
      from: USER_MAILER || NODEMAILER_USER,
      to: USER_TO,
      replyTo: email,
      subject: `New message from ${fullname.slice(0, 80)}`,
      html: `<p><strong>${escapeHtml(fullname)}</strong> (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`,
    });
    return { success: 'Message sent. I will get back to you soon.' };
  } catch {
    return { error: 'Something went wrong sending your message. Please try again or email me directly.' };
  }
}
