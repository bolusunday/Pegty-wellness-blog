import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Custom MDX components to enhance post rendering
const mdxComponents = {
  img: (props) => (
    <span className="relative my-8 block h-80 md:h-96 w-full overflow-hidden rounded-2xl shadow-sm">
      <Image
        className="object-cover"
        fill
        src={props.src || ""}
        alt={props.alt || "Article illustration"}
      />
    </span>
  ),
  a: ({ href, children, ...props }) => (
    <Link
      href={href || "#"}
      className="text-sage hover:text-terracotta transition-colors underline underline-offset-4 decoration-sage/30 hover:decoration-terracotta"
      {...props}
    >
      {children}
    </Link>
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug.replace(/\.mdx?$/, ""),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cleanSlug = slug ? slug.replace(/\.mdx?$/, "") : "";
  const post = getPostBySlug(cleanSlug);

  if (!post) {
    return { title: "Post Not Found | Pegty Wellness" };
  }

  return {
    title: `${post.title} | Pegty Wellness`,
    description: post.description || post.snippet || "Aura Wellness post",
    openGraph: {
      title: post.title,
      description: post.description || post.snippet,
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  };
}

export default async function SinglePost({ params }) {
  const { slug } = await params;
  const cleanSlug = slug ? slug.replace(/\.mdx?$/, "") : "";
  const post = getPostBySlug(cleanSlug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
      {/* Main Content Column */}
      <div className="w-full min-w-0">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-sage transition-colors mb-8 group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to articles
        </Link>

        <header className="mb-10 space-y-6 text-center max-w-3xl mx-auto">
          {post.category && (
            <span className="text-terracotta font-semibold uppercase tracking-wider text-xs md:text-sm">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-serif text-charcoal leading-tight font-bold">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-charcoal/60 text-xs md:text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-sage" /> {post.author || "Jane Doe"}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sage" />{" "}
              {post.readTime || "5 min read"}
            </span>
            {post.date && <span>{post.date}</span>}
          </div>
        </header>

        {post.thumbnail && (
          <div className="relative w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden mb-12 shadow-xs bg-sage/10">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Rendered MDX Content */}
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/80 prose-strong:text-charcoal prose-blockquote:border-l-sage prose-blockquote:text-charcoal/70 prose-a:text-sage hover:prose-a:text-terracotta mx-auto max-w-3xl">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </div>

      {/* Author Sidebar */}
      <aside className="hidden lg:block space-y-10">
        <div className="bg-white p-8 rounded-3xl border border-sage/15 text-center shadow-xs sticky top-28 space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-oat overflow-hidden relative shadow-inner">
            <Image
              src="/images/author.jpg"
              alt={post.author || "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-xl text-charcoal font-semibold">
              Hi, I'm {post.author ? post.author.split(" ")[0] : "Jane"}
            </h3>
            <p className="text-charcoal/70 text-xs leading-relaxed mt-2">
              A certified holistic nutritionist and wellness advocate sharing
              actionable guidance for balanced living.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-block text-sage font-medium text-xs hover:text-terracotta transition-colors pt-2"
          >
            Read my story →
          </Link>
        </div>
      </aside>
    </article>
  );
}
