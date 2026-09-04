import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function normalizeCategory(str = "") {
  return str
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\band\b/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPostsByCategory(categorySlug) {
  const allPosts = getAllPosts();
  const targetSlug = normalizeCategory(categorySlug);

  return allPosts.filter((post) => {
    if (!post.category) return false;
    return normalizeCategory(post.category) === targetSlug;
  });
}

export function getPostBySlug(slug) {
  if (!slug) return null;

  const cleanSlug = slug.replace(/\.mdx?$/, "");

  // Checks for both .mdx and .md file extensions
  let fullPath = path.join(postsDirectory, `${cleanSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${cleanSlug}.md`);
  }

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: cleanSlug,
    content,
    ...data,
  };
}
