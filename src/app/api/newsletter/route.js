import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const formId = process.env.FORMSPREE_ID;

    if (!formId) {
      return NextResponse.json(
        { error: "Formspree ID is not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Formspree submission failed" },
      { status: response.status },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 },
    );
  }
}
