import { NextResponse } from "next/server";
import { sendAdminEmail } from "@/lib/mail";
import { renderAdminEmailHtml, renderTextRows } from "@/lib/emailTemplate";

type Row = { label: string; value: string };

export async function POST(req: Request) {
  let body: { name?: string; email?: string; rows?: Row[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const rows = Array.isArray(body.rows) ? body.rows : [];

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const allRows = [{ label: "Name", value: name }, { label: "Email", value: email }, ...rows];

  try {
    await sendAdminEmail({
      subject: `8-Week Program Application · ${name}`,
      html: renderAdminEmailHtml({
        heading: "New 8-Week Program application",
        intro: `${name} just applied for the 8-Week Program.`,
        rows: allRows,
      }),
      text: renderTextRows(allRows),
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/apply]", err);
    return NextResponse.json(
      { error: "Something went wrong sending your application. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
