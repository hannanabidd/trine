import { NextResponse } from "next/server";
import { sendAdminEmail } from "@/lib/mail";
import { renderAdminEmailHtml, renderTextRows } from "@/lib/emailTemplate";

export async function POST(req: Request) {
  let body: { tag?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const tag = (body.tag || "").toString().trim();
  const email = (body.email || "").toString().trim();

  if (!tag || !email) {
    return NextResponse.json({ error: "Missing email address." }, { status: 400 });
  }

  const rows = [
    { label: "List", value: tag },
    { label: "Email", value: email },
  ];

  try {
    await sendAdminEmail({
      subject: `${tag} · notify me`,
      html: renderAdminEmailHtml({
        heading: `New waitlist signup — ${tag}`,
        intro: `Someone joined the ${tag} list.`,
        rows,
      }),
      text: renderTextRows(rows),
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/waitlist]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
