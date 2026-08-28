import { NextResponse } from "next/server";
import { sendAdminEmail } from "@/lib/mail";
import { renderAdminEmailHtml, renderTextRows } from "@/lib/emailTemplate";

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const rows = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Message", value: message },
  ];

  try {
    await sendAdminEmail({
      subject: `Message from ${name}`,
      html: renderAdminEmailHtml({
        heading: "New message from the contact page",
        intro: `${name} sent a message through the Trine contact page.`,
        rows,
      }),
      text: renderTextRows(rows),
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
