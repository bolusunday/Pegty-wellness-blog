"use client";

import { useEffect } from "react";

export default function Comments({ slug, title }) {
  useEffect(() => {
    if (!slug) return;

    // Check if Cusdis script is already present on the page
    const existingScript = document.querySelector(
      'script[src="https://cusdis.com/js/cusdis.es.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cusdis.com/js/cusdis.es.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.CUSDIS) {
      // Re-render comments if switching posts on client-side routing
      window.CUSDIS.initial();
    }
  }, [slug]);

  return (
    <div className="mt-16 pt-10 border-t border-charcoal/15">
      <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
        Comments
      </h3>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="d8065090-38fc-41dc-b2bf-f49461f29f5e"
        data-page-id={slug}
        data-page-title={title}
        data-page-url={`https://pegtywellness.vercel.app/blog/${slug}`}
      />
    </div>
  );
}
