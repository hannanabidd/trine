function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderAdminEmailHtml({
  heading,
  intro,
  rows,
}: {
  heading: string;
  intro?: string;
  rows: { label: string; value: string }[];
}) {
  const rowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #DAEEE5;font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;color:#4F7661;text-transform:uppercase;letter-spacing:0.04em;vertical-align:top;white-space:nowrap;">${escapeHtml(r.label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #DAEEE5;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#101915;line-height:1.5;">${escapeHtml(r.value).replace(/\n/g, "<br/>")}</td>
      </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;background:#EFF6F4;padding:32px 16px;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #DAEEE5;">
      <div style="background:#1A2720;padding:20px 24px;">
        <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;color:#ffffff;font-size:20px;">Trine</span>
      </div>
      <div style="padding:26px 24px;">
        <h1 style="font-size:18px;margin:0 0 8px;color:#101915;">${escapeHtml(heading)}</h1>
        ${intro ? `<p style="font-size:14px;color:#687276;margin:0 0 18px;line-height:1.5;">${escapeHtml(intro)}</p>` : ""}
        <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
      </div>
      <div style="padding:16px 24px;background:#EFF6F4;font-size:11px;color:#687276;">
        Sent automatically from the Trine website.
      </div>
    </div>
  </body>
</html>`;
}

export function renderTextRows(rows: { label: string; value: string }[]) {
  return rows.map((r) => `${r.label}: ${r.value}`).join("\n\n");
}
