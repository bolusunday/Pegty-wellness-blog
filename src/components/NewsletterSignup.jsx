"use client";

import { useState } from "react";

export default function Newsletter() {
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
    } catch (err) {
      console.error("Newsletter error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="px-4 py-2 rounded-full border border-sage/30 focus:outline-none focus:border-sage text-sm w-full"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-sage text-white px-6 py-2 rounded-full hover:bg-sage/90 transition-colors text-sm font-medium disabled:opacity-50 cursor-pointer"
        >
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      {status === "success" && (
        <p className="text-xs text-emerald-600 font-medium">
          Thanks for subscribing!
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-rose-600 font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
