import type { NextRequest } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      requirement,
      offering,
    } = body || {};

    const to = process.env.TO_EMAIL || "chike@plangenie.com";
    const from = process.env.RESEND_FROM || "Plan Genie <noreply@help.plangenie.com>";
    const resend = new Resend(process.env.RESEND_KEY);

    const subject = `New Demo Request${offering ? ` – ${offering}` : ""}`;
    const html = `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${name || ""}</p>
      <p><strong>Email:</strong> ${email || ""}</p>
      <p><strong>Phone:</strong> ${phone || ""}</p>
      <p><strong>Company:</strong> ${company || ""}</p>
      <p><strong>Offering:</strong> ${offering || ""}</p>
      <p><strong>Requirement:</strong></p>
      <p style="white-space:pre-line">${requirement || ""}</p>
    `;
    const text = `New Demo Request\n\nName: ${name || ""}\nEmail: ${email || ""}\nPhone: ${phone || ""}\nCompany: ${company || ""}\nOffering: ${offering || ""}\n\nRequirement:\n${requirement || ""}`;

    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      // reply_to: email || undefined,
    });

    if ((result as any)?.error) {
      throw new Error((result as any).error?.message || "Resend error");
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("/api/request-demo error", err);
    return new Response(JSON.stringify({ ok: false, error: err?.message || "Email failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
