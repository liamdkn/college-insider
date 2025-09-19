"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Course, Institution } from "@prisma/client";

export default function InstitutionClient({
  inst,
  baseCourses,
}: {
  inst: Institution;
  baseCourses: Course[];
}) {
  const [level, setLevel] = useState<number | null>(null); // NFQ level
  const [years, setYears] = useState<number | null>(null);
  const [q, setQ] = useState("");

  const qLower = q.trim().toLowerCase();

  const facts = useMemo(() => {
    const total = baseCourses.length;
    const perLevel: Record<6 | 7 | 8, number> = { 6: 0, 7: 0, 8: 0 };
    baseCourses.forEach((c) => {
      const lvl = (c.nfqLevel as 6 | 7 | 8) ?? 8;
      if (lvl === 6 || lvl === 7 || lvl === 8) perLevel[lvl]++;
    });
    return { total, perLevel };
  }, [baseCourses]);

  const filtered = useMemo(() => {
    return baseCourses.filter((c) => {
      const facetOk = (level ? c.nfqLevel === level : true) && (years ? c.durationYears === years : true);
      if (!facetOk) return false;
      if (!qLower) return true;
      const hay = `${c.title} ${c.caoCode ?? ""}`.toLowerCase();
      return hay.includes(qLower);
    });
  }, [baseCourses, level, years, qLower]);

  function reset() {
    setLevel(null);
    setYears(null);
    setQ("");
  }

  const hasActive = level || years || q;

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">{inst.name}</h1>
          {/* City lives on Campus; not shown here in MVP */}
        </div>
        {inst.websiteUrl ? (
          <a href={inst.websiteUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border text-sm">
            Visit website
          </a>
        ) : null}
      </header>

      <section className="grid md:grid-cols-4 gap-3">
        <FactCard label="Location" value="—" />
        <FactCard label="Award mix" value={`L8 ${facts.perLevel[8]} • L7 ${facts.perLevel[7]} • L6 ${facts.perLevel[6]}`} />
        <FactCard label="Top subjects" value={`—`} />
        <FactCard label="Total courses" value={String(facts.total)} />
      </section>

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

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Award Level:</span>
          {[6, 7, 8].map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(level === l ? null : l)}
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

      {hasActive && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Filters:</span>
          {level && <Chip label={`Level ${level}`} onClear={() => setLevel(null)} />}
          {years && <Chip label={`${years} years`} onClear={() => setYears(null)} />}
          {q && <Chip label={`Search: \"${q}\"`} onClear={() => setQ("")} />}
          <button className="ml-2 underline" onClick={reset} type="button">Reset</button>
        </div>
      )}

      {(() => {
        const groups = groupByLevel(filtered);
        const order: (6 | 7 | 8)[] = level ? [level as 6 | 7 | 8] : [8, 7, 6];
        const any = order.some((lvl) => groups[lvl].length > 0);
        if (!any) return <div className="p-4 text-sm text-gray-600 border rounded-md">No courses match your filters.</div>;
        return (
          <div className="space-y-6">
            {order.map((lvl) => (
              groups[lvl].length > 0 && (
                <section key={lvl} className="border rounded-md">
                  <div className="px-4 py-3 border-b bg-gray-50 font-semibold text-black">Level {lvl}</div>
                  <div className="divide-y">
                    {groups[lvl].map((c) => (
                      <div key={c.slug} className="flex items-center justify-between p-4">
                        <div>
                          <h3 className="font-medium text-lg">{c.title}</h3>
                          <p className="text-sm text-gray-700">
                            {c.caoCode ?? "—"} • Level {c.nfqLevel ?? "—"} • {c.durationYears ?? "—"} yrs {c.award ? ` • ${c.award}` : ""}
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

function groupByLevel(list: Course[]) {
  const by: { 6: Course[]; 7: Course[]; 8: Course[] } = { 6: [], 7: [], 8: [] };
  list.forEach((c) => {
    const lvl = (c.nfqLevel as 6 | 7 | 8) ?? 8;
    if (lvl === 6 || lvl === 7 || lvl === 8) by[lvl].push(c);
  });
  return by;
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