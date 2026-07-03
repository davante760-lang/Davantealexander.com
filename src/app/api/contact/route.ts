import { NextResponse } from "next/server";

// TODO: before going live, wire this up to a real email/CRM destination
// (e.g. Resend, Nodemailer + SMTP, or a CRM webhook). Right now it only
// validates input and logs it server-side.

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    !body.name.trim() ||
    !body.email.trim()
  ) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  console.log("New contact form submission:", {
    name: body.name,
    email: body.email,
    phone: body.phone ?? "",
    interest: body.interest ?? "",
    message: body.message ?? "",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
