"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { notFound } from "next/navigation";
import { institutions, courses, SUBJECTS } from "@/data/mock";

export default function InstitutionDetailPage({ params }: { params: { slug: string } }) {
  const inst = institutions.find((i) => i.slug === params.slug);
  if (!inst) return notFound();

  // Institution‑scoped filters (locked to this institution)
  const [subject, setSubject] = useState<string | null>(null);
  const [level, setLevel] = useState<6 | 7 | 8 | null>(null);
  const [years, setYears] = useState<number | null>(null);
  const [q, setQ] = useState("");

  const qLower = q.trim().toLowerCase();

  // Filter only this institution's courses first
  const base = useMemo(() => courses.filter((c) => c.institution === inst.name), [inst.name]);

  // Derived facts (mock-friendly)
  const facts = useMemo(() => {
    const total = base.length;
    const perLevel = { 6: 0, 7: 0, 8: 0 } as Record<6 | 7 | 8, number>;
    const subjectCounts = new Map<string, number>();
    base.forEach((c) => {
      perLevel[c.awardLevel as 6 | 7 | 8]++;
      subjectCounts.set(c.subject, (subjectCounts.get(c.subject) || 0) + 1);
    });
    const strengths = Array.from(subjectCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([s]) => s);
    return { total, perLevel, strengths };
  }, [base]);

  // Apply user filters
  const filtered = useMemo(() => {
    return base.filter((c) => {
      const facetOk = (subject ? c.subject === subject : true) && (level ? c.awardLevel === level : true) && (years ? c.durationYears === years : true);
      if (!facetOk) return false;
      if (!qLower) return true;
      const hay = `${c.title} ${c.caoCode} ${c.subject}`.toLowerCase();
      return hay.includes(qLower);
    });
  }, [base, subject, level, years, qLower]);

  // Group by level (like Courses page)
  const groups = useMemo(() => {
    const by: { 6: typeof filtered; 7: typeof filtered; 8: typeof filtered } = { 6: [], 7: [], 8: [] } as any;
    filtered.forEach((c) => (by[c.awardLevel as 6 | 7 | 8] as any).push(c));
    return by;
  }, [filtered]);

  function reset() {
    setSubject(null);
    setLevel(null);
    setYears(null);
    setQ("");
  }

  const hasActive = subject || level || years || q;

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">{inst.name}</h1>
          <p className="text-gray-600">{inst.city ?? ""}</p>
        </div>
        {"websiteUrl" in inst && (inst as any).websiteUrl ? (
          <a
            href={(inst as any).websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-md border text-sm"
          >
            Visit website
          </a>
        ) : null}
      </header>

      {/* Facts strip */}
      <section className="grid md:grid-cols-4 gap-3">
        <FactCard label="Location" value={inst.city ?? "—"} />
        <FactCard label="Award mix" value={`L8 ${facts.perLevel[8]} • L7 ${facts.perLevel[7]} • L6 ${facts.perLevel[6]}`} />
        <FactCard label="Top subjects" value={facts.strengths.join(", ") || "—"} />
        <FactCard label="Total courses" value={String(facts.total)} />
      </section>

      {/* Search */}
      <div className="flex items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${inst.name} courses…`}
          className="w-full max-w-xl px-3 py-2 border rounded-md"
          aria-label="Search courses in institution"
        />
        {q && (
          <button type="button" className="text-sm underline" onClick={() => setQ("")}>Clear</button>
        )}
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Subject:</span>
          {SUBJECTS.map((s) => (
            <button
              key={s as string}
              type="button"
              onClick={() => setSubject(subject === (s as string) ? null : (s as string))}
              className={`px-3 py-1 rounded-full border text-sm ${subject === s ? "bg-gray-100" : ""}`}
              aria-pressed={subject === s}
            >
              {s as string}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Award Level:</span>
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
      </div>

      {/* Active filters */}
      {hasActive && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Filters:</span>
          {subject && <Chip label={subject} onClear={() => setSubject(null)} />}
          {level && <Chip label={`Level ${level}`} onClear={() => setLevel(null)} />}
          {years && <Chip label={`${years} years`} onClear={() => setYears(null)} />}
          {q && <Chip label={`Search: \"${q}\"`} onClear={() => setQ("")} />}
          <button className="ml-2 underline" onClick={reset} type="button">Reset</button>
        </div>
      )}

      {/* Results grouped by Level */}
      {(() => {
        const levelsOrder: (6 | 7 | 8)[] = level ? [level] : [8, 7, 6];
        const any = levelsOrder.some((lvl) => groups[lvl].length > 0);
        if (!any) {
          return (
            <div className="p-4 text-sm text-gray-600 border rounded-md">No courses match your filters.</div>
          );
        }
        return (
          <div className="space-y-6">
            {levelsOrder.map((lvl) => (
              groups[lvl].length > 0 && (
                <section key={lvl} className="border rounded-md">
                  <div className="px-4 py-3 border-b bg-gray-50 font-semibold text-black">Level {lvl}</div>
                  <div className="divide-y">
                    {groups[lvl].map((c) => (
                      <div key={c.slug} className="flex items-center justify-between p-4">
                        <div>
                          <h3 className="font-medium text-lg">{c.title}</h3>
                          <p className="text-sm text-gray-700">
                            {c.caoCode} • Level {c.awardLevel} • {c.durationYears} yrs • {c.subject}
                          </p>
                        </div>
                        <Link className="text-sm font-medium text-blue-600 underline" href={`/courses/${c.slug}`}>
                          View course
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              )
            ))}
          </div>
        );
      })()}
    </div>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-md p-3">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  );
}

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 border rounded-full px-2 py-0.5">
      {label}
      <button onClick={onClear} aria-label={`Clear ${label}`} className="text-gray-500" type="button">×</button>
    </span>
  );
}