import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    // Direct email delivery to mimisha1513@gmail.com via FormSubmit service
    try {
      await fetch("https://formsubmit.co/ajax/mimisha1513@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "http://localhost:3000",
          Referer: "http://localhost:3000/",
        },
        body: JSON.stringify({
          name,
          email,
          subject: subject || "General Discussion",
          _replyto: email,
          _subject: subject ? `Portfolio [${subject}]: from ${name}` : `New Portfolio Inquiry from ${name}`,
          _captcha: "false",
          message: subject
            ? `[Topic / Subject: ${subject}]\n\n${message}`
            : message,
        }),
      });
    } catch (forwardErr) {
      console.warn("Direct email delivery note:", forwardErr);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    recipient: "Mahlet Nigussie",
    service: "Secure Contact Message Gateway",
  });
}

