"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Course, Institution } from "@prisma/client";

export type UICourse = {
  slug: string;
  title: string;
  caoCode: string;
  degreeType: string | null;
  durationYears: number | null;
  subject: string;
  awardLevel: 6 | 7 | 8;
  institution: string; // institution name
};

export default function CoursesClient({
  courses,
  subjects,
  institutions,
}: {
  courses: UICourse[];
  subjects: readonly string[];
  institutions: readonly string[];
}) {
  const [subject, setSubject] = useState<string | null>(null);
  const [institution, setInstitution] = useState<string | null>(null);
  const [level, setLevel] = useState<6 | 7 | 8 | null>(null);
  const [years, setYears] = useState<number | null>(null);
  const [q, setQ] = useState("");

  const qLower = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const facetOk =
        (subject ? c.subject === subject : true) &&
        (institution ? c.institution === institution : true) &&
        (level ? c.awardLevel === level : true) &&
        (years ? c.durationYears === years : true);

      if (!facetOk) return false;
      if (!qLower) return true;

      const hay = `${c.title} ${c.caoCode} ${c.subject} ${c.institution}`.toLowerCase();
      return hay.includes(qLower);
    });
  }, [courses, subject, institution, level, years, qLower]);

  const groups = useMemo(() => {
    const by: { 6: UICourse[]; 7: UICourse[]; 8: UICourse[] } = { 6: [], 7: [], 8: [] };
    filtered.forEach((c) => by[c.awardLevel].push(c));
    return by;
  }, [filtered]);

  function reset() {
    setSubject(null);
    setInstitution(null);
    setLevel(null);
    setYears(null);
    setQ("");
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search courses…"
          className="w-full max-w-3xl px-3 py-2 border rounded-md"
        />
        {q && (
          <button type="button" className="text-sm underline" onClick={() => setQ("")}>
            Clear
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Institution */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Institution:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={institution ?? ""}
            onChange={(e) => setInstitution(e.target.value || null)}
          >
            <option value="">All</option>
            {institutions.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Subject:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={subject ?? ""}
            onChange={(e) => setSubject(e.target.value || null)}
          >
            <option value="">All</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Level:</span>
          {[6, 7, 8].map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(level === l ? null : (l as 6 | 7 | 8))}
              className={`px-3 py-1 rounded-full border text-sm ${level === l ? "bg-gray-100" : ""}`}
              aria-pressed={level === l}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Years */}
        <div className="flex items-center gap-2">
          <span className="text-sm">Years:</span>
          {[2, 3, 4].map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYears(years === y ? null : y)}
              className={`px-3 py-1 rounded-full border text-sm ${years === y ? "bg-gray-100" : ""}`}
              aria-pressed={years === y}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Reset */}
        <button type="button" className="text-sm underline" onClick={reset}>
          Reset filters
        </button>
      </div>

      {/* Grouped list */}
      {(() => {
        const order: (6 | 7 | 8)[] = level ? [level] : [8, 7, 6];
        const any = order.some((lvl) => groups[lvl].length > 0);
        if (!any) return <div className="p-4 text-sm text-gray-600 border rounded-md">No courses match.</div>;
        return (
          <div className="space-y-6">
            {order.map(
              (lvl) =>
                groups[lvl].length > 0 && (
                  <section key={lvl} className="border rounded-md">
                    <div className="px-4 py-3 border-b bg-gray-50 font-semibold text-black">Level {lvl}</div>
                    <div className="divide-y">
                      {groups[lvl].map((c) => (
                        <div key={c.slug} className="flex items-center justify-between p-4">
                          <div>
                            <h3 className="font-medium text-lg">{c.title}</h3>
                            <p className="text-sm text-gray-700">
                              {c.caoCode} • Level {c.awardLevel} • {c.durationYears ?? "—"} yrs • {c.subject} • {c.institution}
                            </p>
                          </div>
                          <Link className="text-sm font-medium text-blue-600 underline" href={`/courses/${c.slug}`}>
                            View course
                          </Link>
                        </div>
                      ))}
                    </div>
                  </section>
                ),
            )}
          </div>
        );
      })()}
    </div>
  );
}