"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
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
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
          >
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@pegty.com"
                required
                className="w-full bg-white pl-12 pr-4 py-3 rounded-full border border-charcoal/10 focus:outline-hidden focus:border-sage focus:ring-1 focus:ring-sage transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-terracotta text-white px-8 py-3 rounded-full hover:bg-terracotta/90 transition-colors font-medium whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
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
