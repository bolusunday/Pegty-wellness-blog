import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-md">
        <Image
          src="/images/about-me.jpg"
          alt="Author making tea"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal">
          My Journey to <span className="italic text-sage">Wholeness.</span>
        </h1>

        <div className="space-y-4 text-charcoal/80 leading-relaxed text-lg">
          <p>
            Five years ago, I found myself completely burned out. Despite
            drinking three cups of coffee a day and running on four hours of
            sleep, I was achieving everything on paper but feeling entirely
            empty inside.
          </p>
          <p>
            That is when I discovered the power of slowing down. Through
            holistic nutrition, daily mindfulness practices, and replacing my
            rushed routines with intentional rituals, everything shifted.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-sage/10 shadow-sm inline-block">
          <h3 className="font-serif text-xl text-charcoal mb-3">
            My Credentials
          </h3>
          <ul className="space-y-2 text-charcoal/70 text-sm">
            <li className="flex items-center gap-2">
              🌿 Certified Holistic Nutritionist (CHN)
            </li>
            <li className="flex items-center gap-2">
              🧘‍♀️ 200-Hour Registered Yoga Teacher
            </li>
            <li className="flex items-center gap-2">
              🍵 Plant-Based Culinary Expert
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
