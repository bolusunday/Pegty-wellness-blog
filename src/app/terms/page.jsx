import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Pegty Wellness",
  description:
    "Read the Terms of Service for Pegty Wellness regarding content usage, health disclaimers, and community guidelines.",
};

export default function TermsPage() {
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
          Legal Agreement
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
          Terms of Service
        </h1>
        <p className="text-xs md:text-sm text-charcoal/60">
          Last Updated: September 2026
        </p>
      </div>

      {/* Terms Content */}
      <div className="prose prose-lg mx-auto text-charcoal/80 space-y-8 prose-headings:font-serif prose-headings:text-charcoal prose-a:text-sage hover:prose-a:text-terracotta">
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using <strong>Pegty Wellness</strong> (accessible at
            pegtywellness.vercel.app), you agree to be bound by these Terms of
            Service and all applicable laws. If you do not agree with any part
            of these terms, you should discontinue use of the site immediately.
          </p>
        </section>

        {/* Essential for a Wellness / Health Site */}
        <section className="space-y-3 bg-sage/10 p-6 rounded-2xl border border-sage/20">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            2. Health & Medical Disclaimer
          </h2>
          <p className="text-sm leading-relaxed">
            The content provided on Pegty Wellness—including articles, recipes,
            guides, and suggestions—is for{" "}
            <strong>informational and educational purposes only</strong>. It is
            not intended to be a substitute for professional medical advice,
            diagnosis, or treatment.
          </p>
          <p className="text-sm leading-relaxed">
            Always seek the advice of your physician or qualified health
            provider with any questions you may have regarding a medical
            condition or diet changes. Never disregard professional medical
            advice or delay in seeking it because of something you read on this
            website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            3. Intellectual Property
          </h2>
          <p>
            Unless otherwise stated, all content published on Pegty Wellness,
            including text, custom graphics, logo design, and code, is the
            property of Pegty Wellness and protected by copyright laws.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              You may share article excerpts provided proper credit and a direct
              link back to the original page are included.
            </li>
            <li>
              You may not republish, reproduce, or modify full articles without
              prior written permission.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            4. User Comments & Conduct
          </h2>
          <p>
            We encourage thoughtful discussion in our comment section. When
            posting comments on our articles:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Refrain from hate speech, harassment, spam, or promotional
              advertising.
            </li>
            <li>
              Respect fellow readers and maintain a constructive, supportive
              environment.
            </li>
            <li>
              We reserve the right to remove comments or report abusive activity
              on integrated comment tools.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            5. Limitation of Liability
          </h2>
          <p>
            Pegty Wellness shall not be liable for any damages arising out of
            the use or inability to use the materials on this website. We make
            no guarantees regarding the accuracy, completeness, or timeliness of
            the information provided.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            6. Contact Information
          </h2>
          <p>
            If you have any questions regarding these Terms of Service, please
            contact us at{" "}
            <a href="mailto:support@pegtywellness.com" className="underline">
              support@pegtywellness.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
