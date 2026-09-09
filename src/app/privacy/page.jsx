import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Pegty Wellness",
  description:
    "Read the Privacy Policy for Pegty Wellness to understand how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
      {/* Back Button */}
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
          Legal & Transparency
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
          Privacy Policy
        </h1>
        <p className="text-xs md:text-sm text-charcoal/60">
          Last Updated: September 2026
        </p>
      </div>

      {/* Policy Content */}
      <div className="prose prose-lg mx-auto text-charcoal/80 space-y-8 prose-headings:font-serif prose-headings:text-charcoal prose-a:text-sage hover:prose-a:text-terracotta">
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            Overview
          </h2>
          <p>
            At <strong>Pegty Wellness</strong> (accessible via
            pegtywellness.vercel.app), the privacy of our visitors is a top
            priority. This Privacy Policy outlines the types of information
            collected and recorded by Pegty Wellness and how it is used.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Comment Data:</strong> When you participate in discussions
              on our blog posts via our commenting system (Giscus/GitHub), we
              collect the public information you provide, including your
              username, avatar, and comment text.
            </li>
            <li>
              <strong>Log Files:</strong> Vercel automatically logs basic access
              data when you visit our site. This includes IP addresses, browser
              types, date/time stamps, and referring pages. This data is not
              linked to personally identifiable information.
            </li>
            <li>
              <strong>Cookies & Local Storage:</strong> We use essential cookies
              and browser local storage to preserve user site preferences and
              ensure comment components load smoothly.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              To maintain, operate, and optimize site speed and functionality.
            </li>
            <li>
              To display reader comments and foster community discussions.
            </li>
            <li>
              To monitor site activity and prevent automated spam or security
              threats.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            Third-Party Services
          </h2>
          <p>
            Pegty Wellness relies on trusted third-party providers for
            infrastructure:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Vercel:</strong> Site hosting, edge deployment, and web
              logs.
            </li>
            <li>
              <strong>Giscus / GitHub:</strong> Comment engine and user
              authentication.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or wish to request
            data removal, please contact us at{" "}
            <a href="mailto:privacy@pegtywellness.com" className="underline">
              privacy@pegtywellness.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
