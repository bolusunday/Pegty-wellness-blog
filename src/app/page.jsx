import Link from "next/link";
import HeroSection from "@/app/components/HeroSection";
import PostCard from "@/app/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { Monitor, Moon, Activity, Headphones, Apple } from "lucide-react";

const categories = [
  {
    name: "Nutrition & Health",
    href: "/category/nutrition-health",
    icon: Apple,
  },
  {
    name: "Workstation Wellness",
    href: "/category/workstation-wellness",
    icon: Monitor,
  },
  {
    name: "Nighttime Optimization",
    href: "/category/nighttime-optimization",
    icon: Moon,
  },
  { name: "Body & Motion", href: "/category/body-motion", icon: Activity },
  {
    name: "Mind & Acoustics",
    href: "/category/mind-acoustics",
    icon: Headphones,
  },
];

export default async function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 6); // Displays top 6 recent MDX posts

  return (
    <div className="space-y-24 pb-24">
      <HeroSection />

      {/* Interactive Category Pills */}
      <section className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex items-center gap-2 bg-white px-6 py-2.5 rounded-full shadow-xs text-charcoal hover:text-sage hover:shadow-md hover:-translate-y-0.5 transition-all border border-sage/15 text-sm font-medium"
            >
              <IconComponent className="w-4 h-4 text-sage" />
              <span>{cat.name}</span>
            </Link>
          );
        })}
      </section>

      {/* Real MDX Articles Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-charcoal mb-10 text-center font-bold">
          Latest Musings
        </h2>

        {latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-charcoal/60 py-12">
            No published articles found. Add MDX files to{" "}
            <code className="bg-sage/10 px-2 py-1 rounded">content/posts/</code>{" "}
            to see them here.
          </p>
        )}
      </section>

      {/* Quote Break */}
      <section className="bg-sage/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="text-3xl md:text-4xl font-serif text-charcoal leading-relaxed">
            "Almost everything will work again if you unplug it for a few
            minutes, <span className="italic text-sage">including you.</span>"
          </blockquote>
          <p className="text-charcoal/60 uppercase tracking-widest text-sm font-medium">
            — Anne Lamott
          </p>
        </div>
      </section>
    </div>
  );
}
