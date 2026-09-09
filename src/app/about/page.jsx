import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About | Pegty Wellness",
  description:
    "Learn more about our mission for holistic health and balanced living.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-sage transition-colors group font-medium"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to home
      </Link>

      <div className="text-center space-y-4">
        <span className="text-terracotta font-semibold uppercase tracking-wider text-xs md:text-sm">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
          About Pegty Wellness
        </h1>
      </div>

      <div className="relative w-full h-80 md:h-[400px] rounded-3xl overflow-hidden bg-sage/10">
        <Image
          src="/images/author.jpg"
          alt="Pegty Wellness Founder"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg mx-auto text-charcoal/80 space-y-6">
        <p>
          Welcome to Pegty Wellness. We believe that true health is achieved
          through small, sustainable daily practices rather than quick fixes or
          restrictive rules.
        </p>
        <p>
          Our mission is to provide actionable, science-backed guidance on
          holistic nutrition, gut health, mindfulness, and everyday balance.
        </p>
      </div>
    </div>
  );
}
