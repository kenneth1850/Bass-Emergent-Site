/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Receives the website contact form and emails it to Bass Crane via Resend.
 *
 * Environment variables (Cloudflare Pages → Settings → Variables and Secrets):
 *   RESEND_API_KEY   (secret)  Resend API key
 *   CONTACT_TO                 Where leads go, e.g. info@basscrane.com
 *   CONTACT_FROM               Verified sender, e.g. "Bass Crane Website <website@basscrane.com>"
 *                              Until the domain is verified in Resend, use "onboarding@resend.dev"
 *                              (delivers only to the Resend account owner's address).
 *   CONTACT_AUTOREPLY          "true" to send the customer a confirmation email (optional)
 */

const MAX = { name: 80, email: 160, phone: 40, comment: 3000 };

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: "Invalid request." });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots move on.
  if (data.company) return json(200, { ok: true });

  const first = clean(data.first_name, MAX.name);
  const last = clean(data.last_name, MAX.name);
  const email = clean(data.email, MAX.email);
  const phone = clean(data.phone, MAX.phone);
  const comment = clean(data.comment, MAX.comment);

  if (!first || !last || !email) return json(400, { ok: false, error: "Name and email are required." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { ok: false, error: "Please enter a valid email." });

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return json(500, { ok: false, error: "Form is not configured yet." });
  }

  const name = `${first} ${last}`;
  const when = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" });
  const ip = request.headers.get("cf-connecting-ip") || "";
  const page = request.headers.get("referer") || "";

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Message", comment || "—"],
    ["Submitted", `${when} ET`],
    ["From page", page || "—"],
    ["IP", ip || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1A1A1A">
      <div style="background:#1C3172;color:#fff;padding:16px 20px;font-size:14px;letter-spacing:.12em;text-transform:uppercase">
        New website inquiry — Bass Crane Service
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:15px">
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:12px 20px;border-bottom:1px solid #E5E7EB;color:#5B6270;width:120px;vertical-align:top">${k}</td>
            <td style="padding:12px 20px;border-bottom:1px solid #E5E7EB;white-space:pre-wrap;vertical-align:top">${escapeHtml(v)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="padding:16px 20px;font-size:13px;color:#5B6270">
        Reply to this email to respond directly to ${escapeHtml(name)}.
      </p>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const send = (payload) =>
    fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

  const res = await send({
    from: env.CONTACT_FROM,
    to: env.CONTACT_TO.split(",").map((s) => s.trim()),
    reply_to: email,
    subject: `Website inquiry from ${name}${phone ? ` · ${phone}` : ""}`,
    html,
    text,
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return json(502, { ok: false, error: "Could not send your message right now." });
  }

  if (env.CONTACT_AUTOREPLY === "true") {
    // Best effort; never fail the submission because the auto-reply failed.
    await send({
      from: env.CONTACT_FROM,
      to: [email],
      subject: "We received your message — Bass Crane Service",
      text: `Hi ${first},\n\nThanks for reaching out to Bass Crane Service. We've received your message and will be in touch shortly.\n\nFor urgent scheduling, call us anytime, 24/7, at 804-233-0113.\n\nBass Crane Service, LLC\n1004 Holly Spring Ave., Richmond, VA 23224\nbasscrane.com`,
    }).catch(() => {});
  }

  return json(200, { ok: true });
}
