"use client";

import { useEffect } from "react";

export default function Comments({ slug, title }) {
  useEffect(() => {
    if (!slug) return;

    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [slug]);

  return (
    <div className="mt-16 pt-10 border-t border-charcoal/15">
      <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
        Comments
      </h3>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="YOUR_CUSDIS_APP_ID" // Ensure this is your actual App ID string
        data-page-id={slug || "default-page"}
        data-page-title={title || "Blog Post"}
      />
    </div>
  );
}
