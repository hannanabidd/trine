import { Resend } from "resend";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "katrinagcoaching@gmail.com";

let client: Resend | null = null;

function getClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Email is not configured yet. Set RESEND_API_KEY in .env.local (see .env.local.example)."
    );
  }

  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

export async function sendAdminEmail({
  subject,
  html,
  text,
  replyTo,
}: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const resend = getClient();
  const from = process.env.RESEND_FROM_EMAIL || "Trine Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: ADMIN_EMAIL,
    replyTo,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message || "Resend failed to send the email.");
  }
}
