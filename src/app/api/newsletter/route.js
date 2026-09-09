import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Optional: Send lead data to Formspree
    if (process.env.FORMSPREE_ID) {
      await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });
    }

    // Send customized thank-you email
    await resend.emails.send({
      from: "Pegty Wellness <onboarding@resend.dev>", // Replace with custom domain when ready
      to: email,
      subject: "Welcome to Pegty Wellness! 🌿 Your Daily Wellness Guide",
      html: `
        <div style="font-family: Georgia, serif; color: #2D3748; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #6B8E23; font-size: 28px;">Welcome to Pegty Wellness!</h1>
          <p style="font-size: 16px; line-height: 1.6;">
            Thank you for joining our community! We are thrilled to have you with us.
          </p>
          <p style="font-size: 16px; line-height: 1.6;">
            Periodically, we share actionable insights on holistic health, ergonomics, mindful routines, and natural living.
          </p>
          <div style="margin: 30px 0; text-align: center;">
            <a href="https://pegtywellness.vercel.app/#latest-posts" 
               style="background-color: #6B8E23; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: bold; font-family: sans-serif;">
              Explore Latest Musings
            </a>
          </div>
          <p style="font-size: 14px; color: #718096; margin-top: 40px; border-t: 1px solid #E2E8F0; padding-top: 20px;">
            With peace & clarity,<br/>
            <strong>The Pegty Wellness Team</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to process subscription" },
      { status: 500 },
    );
  }
}
