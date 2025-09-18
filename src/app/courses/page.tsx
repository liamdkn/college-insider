"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Popover from "@/components/popover";
import { courses, SUBJECTS, INSTITUTIONS } from "@/data/mock";

type OpenMenu = null | "inst" | "subj";

export default function CoursesIndexPage() {
  const [institution, setInstitution] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [level, setLevel] = useState<6 | 7 | 8 | null>(null);
  const [years, setYears] = useState<number | null>(null);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<OpenMenu>(null);
  const instBtnRef = useRef<HTMLButtonElement>(null);
  const subjBtnRef = useRef<HTMLButtonElement>(null);

  const qLower = q.trim().toLowerCase();

  const baseFiltered = useMemo(() => {
    return courses.filter((c) => {
      const matchesFacets =
        (institution ? c.institution === institution : true) &&
        (subject ? c.subject === subject : true) &&
        (years ? c.durationYears === years : true);
      if (!matchesFacets) return false;

      if (!qLower) return true;
      const hay = `${c.title} ${c.caoCode} ${c.institution} ${c.subject}`.toLowerCase();
      return hay.includes(qLower);
    });
  }, [institution, subject, years, qLower]);

  const groups = useMemo(() => {
    const by: { 6: typeof courses; 7: typeof courses; 8: typeof courses } = {
      6: [],
      7: [],
      8: [],
    } as any;
    baseFiltered.forEach((c) => {
      const lvl = c.awardLevel as 6 | 7 | 8;
      (by[lvl] as any).push(c);
    });
    return by;
  }, [baseFiltered]);

  function reset() {
    setInstitution(null);
    setSubject(null);
    setLevel(null);
    setYears(null);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Courses</h1>

      <div className="flex items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search title, CAO code, institution, or subject…"
          className="w-full px-3 py-2 border rounded-md"
          aria-label="Search courses"
        />
        {q && (
          <button type="button" className="text-sm underline" onClick={() => setQ("")}>Clear</button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Browse by Institution */}
        <div className="border rounded-md p-4 relative">
          <h3 className="text-lg font-medium mb-2">Browse by Institution</h3>
          <button
            ref={instBtnRef}
            onClick={() => setOpen(open === "inst" ? null : "inst")}
            className="px-3 py-2 rounded-md border text-sm"
            aria-haspopup="menu"
            aria-expanded={open === "inst"}
            type="button"
          >
            {institution ?? "Select institution"}
          </button>

          <Popover
            open={open === "inst"}
            anchorEl={instBtnRef.current}
            onClose={() => setOpen(null)}
          >
            <ul className="py-1 text-black">
              {INSTITUTIONS.map((name) => (
                <li key={name}>
                  <button
                    type="button"
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      institution === name ? "bg-gray-100" : ""
                    }`}
                    onClick={() => {
                      setInstitution(name);
                      setOpen(null);
                    }}
                  >
                    {name}
                  </button>
                </li>
              ))}
              {institution && (
                <li className="border-t mt-1">
                  <button
                    type="button"
                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      setInstitution(null);
                      setOpen(null);
                    }}
                  >
                    Clear institution filter
                  </button>
                </li>
              )}
            </ul>
          </Popover>
        </div>

        {/* Browse by Subject Area */}
        <div className="border rounded-md p-4 relative">
          <h3 className="text-lg font-medium mb-2">Browse by Subject Area</h3>
          <button
            ref={subjBtnRef}
            onClick={() => setOpen(open === "subj" ? null : "subj")}
            className="px-3 py-2 rounded-md border text-sm"
            aria-haspopup="menu"
            aria-expanded={open === "subj"}
            type="button"
          >
            {subject ?? "Select subject area"}
          </button>

          <Popover
            open={open === "subj"}
            anchorEl={subjBtnRef.current}
            onClose={() => setOpen(null)}
          >
            <ul className="py-1 text-black">
              {SUBJECTS.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      subject === s ? "bg-gray-100" : ""
                    }`}
                    onClick={() => {
                      setSubject(s as string);
                      setOpen(null);
                    }}
                  >
                    {s}
                  </button>
                </li>
              ))}
              {subject && (
                <li className="border-t mt-1">
                  <button
                    type="button"
                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      setSubject(null);
                      setOpen(null);
                    }}
                  >
                    Clear subject filter
                  </button>
                </li>
              )}
            </ul>
          </Popover>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
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

        {(institution || subject || level || years || q) && (
        <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Filters:</span>
            {institution && <Chip label={institution} onClear={() => setInstitution(null)} />}
            {subject && <Chip label={subject} onClear={() => setSubject(null)} />}
            {level && <Chip label={`Level ${level}`} onClear={() => setLevel(null)} />}
            {years && <Chip label={`${years} years`} onClear={() => setYears(null)} />}
            {q && <Chip label={`Search: "${q}"`} onClear={() => setQ("")} />}
            <button className="ml-2 underline" onClick={reset} type="button">Reset</button>
        </div>
        )}

      {/* Results grouped by Level */}
      {(() => {
        const levelsOrder: (6 | 7 | 8)[] = level ? [level] : [8, 7, 6];
        const anyResults = levelsOrder.some((lvl) => groups[lvl].length > 0);
        if (!anyResults) {
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
                            {c.institution} • {c.caoCode} • Level {c.awardLevel} • {c.durationYears} yrs • {c.subject}
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

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 border rounded-full px-2 py-0.5">
      {label}
      <button onClick={onClear} aria-label={`Clear ${label}`} className="text-gray-500" type="button">×</button>
    </span>
  );
}