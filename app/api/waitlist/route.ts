import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, platformType, mauRange, message } = body;

    if (!name || !company || !email || !platformType || !mauRange) {
      return NextResponse.json(
        { error: "Missing required fields" },
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

    // In production, forward to email service, database, or CRM
    console.log("Waitlist submission:", {
      name,
      company,
      email,
      platformType,
      mauRange,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Application received",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
