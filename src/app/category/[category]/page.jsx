import Link from "next/link";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";

// Explicit map for perfect title formatting from URL slugs
const categoryMap = {
  "nutrition-health": "Nutrition & Health",
  "workstation-wellness": "Workstation Wellness",
  "nighttime-optimization": "Nighttime Optimization",
  "body-motion": "Body & Motion",
  "mind-acoustics": "Mind & Acoustics",
};

function formatCategoryTitle(category) {
  if (categoryMap[category]) return categoryMap[category];
  return category
    .replace(/-/g, " ")
    .replace(/\band\b/g, "&")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const title = formatCategoryTitle(category);

  return {
    title: `${title} | Pegty Wellness`,
    description: `Explore our curated articles and practical guidance for ${title.toLowerCase()}.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  const categoryTitle = formatCategoryTitle(category);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-sage transition-colors mb-8 group font-medium"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to home
      </Link>

      {/* Header */}
      <header className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-terracotta font-semibold uppercase tracking-wider text-xs md:text-sm">
          Category Archive
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
          {categoryTitle}
        </h1>
        <p className="text-lg text-charcoal/70">
          Curated articles and practical guidance for{" "}
          {categoryTitle.toLowerCase()}.
        </p>
      </header>

      {/* Posts Grid or Enhanced Empty State */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-6 bg-white/60 rounded-3xl border border-sage/15 max-w-md mx-auto shadow-xs">
          <p className="text-charcoal/60 text-base">
            No published articles in this category yet.
          </p>
          <Link
            href="/"
            className="inline-block bg-sage text-white px-6 py-2.5 rounded-full hover:bg-sage/90 transition-colors text-sm font-medium"
          >
            Browse all articles
          </Link>
        </div>
      )}
    </div>
  );
}
