"use client";

import type { ReactNode } from "react";

export default function MdxArticle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <article className="article">
      <div className="card">{children}</div>
    </article>
  );
}