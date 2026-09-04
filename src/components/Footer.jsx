import Link from "next/link";
import { Share2, Globe, Heart } from "lucide-react";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <>
      <NewsletterSignup />
      <footer className="bg-oat border-t border-sage/20 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
          {/* Logo & Socials */}
          <div className="space-y-6">
            <Link
              href="/"
              className="font-serif text-3xl text-charcoal font-bold"
            >
              Pegty Wellness<span className="text-sage">.</span>
            </Link>
            <div className="flex gap-6 justify-center text-charcoal/60">
              <a
                href="#"
                aria-label="Share"
                className="hover:text-sage transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="hover:text-sage transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Community"
                className="hover:text-sage transition-colors"
              >
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-charcoal/70 font-medium">
            <Link href="/about" className="hover:text-sage transition-colors">
              Our Story
            </Link>
            <Link href="/contact" className="hover:text-sage transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-sage transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sage transition-colors">
              Terms of Service
            </Link>
          </div>

          <hr className="w-full max-w-3xl border-charcoal/10" />

          {/* Medical Disclaimer & Copyright */}
          <div className="max-w-4xl space-y-4">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              <strong>Disclaimer:</strong> The content on this blog is for
              informational and educational purposes only and does not
              substitute professional medical advice or consultations with
              healthcare professionals. Always consult your physician before
              beginning any new diet, supplement, or fitness regimen.
            </p>
            <p className="text-sm text-charcoal/60">
              © {new Date().getFullYear()} Pegty Wellness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
