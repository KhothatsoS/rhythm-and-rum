// This is a mock API endpoint that simulates form submission
// In a real Next.js application, this would be /app/api/book/route.ts
// 
// To integrate with Resend:
// 1. Install: npm install resend
// 2. Add RESEND_API_KEY to your environment variables
// 3. Replace the mock implementation below with:

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, eventType, eventDate, location, budget, message } = body;

    if (!fullName || !email || !eventType || !eventDate || !location) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Rhythm & Rum Co. <onboarding@resend.dev>", // use this until domain is verified
      to: ["bookings@rhythmandrumco.co.za"],
      subject: `New Event Booking Request from ${fullName}`,
      replyTo: email,
      html: `
        <h2>New Event Booking Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No additional message"}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request." },
      { status: 500 }
    );
  }
}