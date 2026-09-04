import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif leading-tight text-charcoal">
          Cultivating peace in a{" "}
          <span className="italic text-sage">busy world.</span>
        </h1>
        <p className="text-lg text-charcoal/80 max-w-md leading-relaxed">
          Discover natural remedies, mindful practices, and wholesome recipes to
          nourish your body and soul.
        </p>
        <button className="bg-sage text-white px-8 py-3 rounded-full hover:bg-sage/90 transition-colors duration-300 font-medium">
          Start Your Journey
        </button>
      </div>
      <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
        <Image
          src="/images/hero-wellness1.webp" // Replace with your warm-toned photography
          alt="Peaceful meditation space"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
