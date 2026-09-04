import { getAllPosts } from "@/lib/posts";

export default async function sitemap() {
  const baseUrl = "https://pegtywellness.com";
  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [{ url: baseUrl, lastModified: new Date() }, ...postUrls];
}
