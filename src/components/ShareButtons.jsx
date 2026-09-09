"use client";

import { useState } from "react";
import {
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  Check,
} from "lucide-react";

export default function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);

  // Fallback URL construct if window is not yet available during hydration
  const postUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://pegtywellness.vercel.app/blog/${slug}`;

  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(
    `Check out "${title}" on Pegty Wellness`,
  );

  const shareLinks = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <div className="flex items-center gap-3 py-6 border-y border-sage/20 my-8">
      <span className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">
        Share post:
      </span>
      <div className="flex items-center gap-2">
        {shareLinks.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${platform.name}`}
              className="p-2.5 rounded-full bg-sage/10 text-charcoal/70 hover:bg-sage hover:text-white transition-all duration-200"
            >
              <IconComponent className="w-4 h-4" />
            </a>
          );
        })}

        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          aria-label="Copy link to clipboard"
          className="p-2.5 rounded-full bg-sage/10 text-charcoal/70 hover:bg-sage hover:text-white transition-all duration-200 cursor-pointer flex items-center gap-1.5"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <LinkIcon className="w-4 h-4" />
          )}
        </button>
        {copied && (
          <span className="text-xs font-medium text-emerald-600 animate-fade-in">
            Link copied!
          </span>
        )}
      </div>
    </div>
  );
}
