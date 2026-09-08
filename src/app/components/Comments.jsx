"use client";

import { useEffect } from "react";

export default function Comments({ slug }) {
  useEffect(() => {
    if (!slug) return;

    const script = document.createElement("script");
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;

    script.onload = () => {
      if (window.commentBox) {
        window.commentBox("5742728621064192 - proj;", {
          defaultBoxId: slug,
        });
      }
    };

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
      <div className="commentbox" />
    </div>
  );
}
