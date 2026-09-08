"use client";

import { useEffect } from "react";

export default function Comments({ slug, title }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
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
        data-app-id="d8065090-38fc-41dc-b2bf-f49461f29f5e"
        data-page-id={slug}
        data-page-title={title}
      />
    </div>
  );
}
