"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SavedItem = { slug: string; title: string };

export default function SavedPage() {
  const [saved, setSaved] = useState<SavedItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ci:saved");
      setSaved(raw ? JSON.parse(raw) : []);
    } catch {}
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Saved</h1>
      {saved.length === 0 ? (
        <p className="text-sm text-gray-600">No saved courses yet.</p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {saved.map((c) => (
            <li key={c.slug} className="border rounded-md p-4">
              <h3 className="font-medium">{c.title}</h3>
              <Link className="text-sm underline" href={`/courses/${c.slug}`}>Open</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}