"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mt-16 pt-10 border-t border-charcoal/15">
      <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">
        Comments
      </h3>
      <Giscus
        id="comments"
        repo="bolusunday/Pegty-wellness-blog"
        repoId="R_kgDOUOaF1w"
        category="General"
        categoryId="DIC_kwDOUOaF184DFGes"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
