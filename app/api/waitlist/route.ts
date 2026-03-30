import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, platform, mau, message } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const isCompact = !name && !company;

    const htmlBody = isCompact
      ? `
        <h2 style="color:#C9A84C;">New EloDtx Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p style="color:#888;">Submitted via compact form (home page)</p>
      `
      : `
        <h2 style="color:#C9A84C;">New EloDtx Waitlist Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Platform</td><td style="padding:8px;border-bottom:1px solid #eee;">${platform || "Not specified"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">MAU Range</td><td style="padding:8px;border-bottom:1px solid #eee;">${mau || "Not specified"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${message || "—"}</td></tr>
        </table>
      `;

    await transporter.sendMail({
      from: `"EloDtx Waitlist" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: isCompact
        ? `New waitlist signup: ${email}`
        : `New waitlist application: ${name} (${company})`,
      html: htmlBody,
    });

    return NextResponse.json({
      success: true,
      message: "Application received",
    });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
