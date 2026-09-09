"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can connect a service like Formspree, Resend, or your custom API route
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-sage transition-colors group font-medium"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to home
      </Link>

      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-terracotta font-semibold uppercase tracking-wider text-xs md:text-sm">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
          We’d Love to Hear From You
        </h1>
        <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
          Have a question about a recipe, a suggestion for a post, or interested
          in collaborating? Drop us a message below.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-10 items-start">
        {/* Contact Form */}
        <div className="bg-white border border-sage/20 rounded-3xl p-8 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-sage mx-auto" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Message Sent!
              </h2>
              <p className="text-charcoal/70 text-sm max-w-md mx-auto">
                Thank you for reaching out, {formData.name || "friend"}. We have
                received your message and will get back to you within 24-48
                hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="inline-block mt-4 text-xs font-semibold text-sage hover:text-terracotta transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-charcoal focus:outline-none focus:border-sage transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-charcoal focus:outline-none focus:border-sage transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Recipe inquiry, Partnership"
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-charcoal focus:outline-none focus:border-sage transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-charcoal focus:outline-none focus:border-sage transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sage text-white rounded-xl font-medium text-sm hover:bg-terracotta transition-colors shadow-xs group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info Cards */}
        <div className="space-y-6">
          <div className="bg-sage/10 rounded-2xl p-6 border border-sage/20 space-y-4">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-charcoal text-lg">
                Email Us
              </h3>
              <p className="text-xs text-charcoal/70 mt-1">
                Direct inquiries & collaborations
              </p>
              <a
                href="mailto:hello@pegtywellness.com"
                className="text-sage font-medium text-sm hover:text-terracotta transition-colors block mt-2"
              >
                contact@pegty.com
              </a>
            </div>
          </div>

          <div className="bg-sage/10 rounded-2xl p-6 border border-sage/20 space-y-4">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-charcoal text-lg">
                Response Time
              </h3>
              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                We review reader emails Monday through Friday. Expect a reply
                within 24 to 48 hours.
              </p>
            </div>
          </div>

          <div className="bg-sage/10 rounded-2xl p-6 border border-sage/20 space-y-4">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-charcoal text-lg">
                Community
              </h3>
              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                Looking to comment on an article? Leave a message directly at
                the bottom of any blog post!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
