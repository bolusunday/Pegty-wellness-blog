"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post, priority = false }) {
  if (!post) return null;

  // Strips any .mdx/.md extension to ensure clean dynamic routing
  const cleanSlug = post.slug ? post.slug.replace(/\.mdx?$/, "") : "";
  const postUrl = `/blog/${cleanSlug}`;

  // Supports both 'description' and 'snippet' frontmatter fields
  const excerpt = post.description || post.snippet || "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col gap-4"
    >
      {/* Cover Image Container */}
      <Link
        href={postUrl}
        className="relative h-64 w-full rounded-2xl overflow-hidden block bg-sage/10"
      >
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title || "Blog cover image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sage font-serif text-lg">
            Pegty Wellness
          </div>
        )}
      </Link>

      {/* Post Metadata & Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-sm">
          {post.category && (
            <span className="text-terracotta font-semibold uppercase tracking-wider">
              {post.category}
            </span>
          )}
          {post.readTime && (
            <span className="text-charcoal/60">
              {post.category ? "• " : ""}
              {post.readTime}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-serif text-charcoal group-hover:text-sage transition-colors">
          <Link href={postUrl}>{post.title}</Link>
        </h3>

        {excerpt && (
          <p className="text-charcoal/80 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </motion.article>
  );
}
