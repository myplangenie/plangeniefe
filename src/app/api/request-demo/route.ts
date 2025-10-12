import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

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
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@plangenie.com";

    // Create transporter from env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === "true" || false,
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

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

    await transporter.sendMail({ from, to, subject, html, text });

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

