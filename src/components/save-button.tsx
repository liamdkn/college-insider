"use client";

import { useEffect, useState } from "react";

type Props = { slug: string; title: string };

export default function SaveButton({ slug, title }: Props) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ci:saved");
      const arr: { slug: string; title: string }[] = raw ? JSON.parse(raw) : [];
      setIsSaved(arr.some((x) => x.slug === slug));
    } catch {}
  }, [slug]);

  function toggle() {
    try {
      const raw = localStorage.getItem("ci:saved");
      const arr: { slug: string; title: string }[] = raw ? JSON.parse(raw) : [];
      const idx = arr.findIndex((x) => x.slug === slug);
      if (idx >= 0) {
        arr.splice(idx, 1);
        setIsSaved(false);
      } else {
        arr.push({ slug, title });
        setIsSaved(true);
      }
      localStorage.setItem("ci:saved", JSON.stringify(arr));
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md border"
      aria-pressed={isSaved}
      aria-label={isSaved ? "Remove from favourites" : "Add to favourites"}
      title={isSaved ? "Remove from favourites" : "Add to favourites"}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={isSaved ? "currentColor" : "none"}
        stroke="currentColor"
        className="w-5 h-5 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z"
        />
      </svg>
    </button>
  );
}