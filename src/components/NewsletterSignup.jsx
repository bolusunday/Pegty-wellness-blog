"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-sage/10 py-16 px-6 rounded-3xl my-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif text-charcoal font-bold">
          Get Your Free Daily Wellness Guide
        </h2>
        <p className="text-charcoal/70">
          Join our community and receive weekly insights on holistic health,
          mindfulness, and natural living directly in your inbox.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-sage bg-white py-4 px-6 rounded-full max-w-md mx-auto shadow-xs font-medium">
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you for subscribing! Check your inbox soon.</span>
          </div>
        ) : (
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
          >
            {/* Netlify Form Bot-Field & Form-Name Inputs */}
            <input type="hidden" name="form-name" value="newsletter" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-white pl-12 pr-4 py-3 rounded-full border border-charcoal/10 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-terracotta text-white px-8 py-3 rounded-full hover:bg-terracotta/90 transition-colors font-medium whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-sm">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </section>
  );
}
