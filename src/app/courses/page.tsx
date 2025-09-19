export const runtime = "nodejs";

import { prisma } from "@/lib/db";
import CoursesClient, { type UICourse } from "./[slug]/CoursesClient"; // keep if your file lives under [slug]

function toAwardLevelNumber(lvl: unknown): 6 | 7 | 8 {
  // Handles both enum string ("L6"|"L7"|"L8") and legacy numeric 6/7/8
  if (typeof lvl === "string") {
    if (lvl === "L6") return 6;
    if (lvl === "L7") return 7;
    return 8;
  }
  const n = Number(lvl);
  return (n === 6 || n === 7 || n === 8) ? (n as 6|7|8) : 8;
}

export default async function CoursesIndexPage() {
  // Fetch courses + institution relations from DB
  const rows = await prisma.course.findMany({
    include: {
      institution: { select: { name: true, slug: true } },
    },
    orderBy: [{ awardLevel: "desc" }, { title: "asc" }],
  });

  const courses: UICourse[] = rows.map((c) => ({
    slug: c.slug,
    title: c.title,
    caoCode: c.caoCode,
    degreeType: c.degreeType,
    durationYears: c.durationYears,
    subject: c.subject ?? "", // if your schema still uses scalar subject
    awardLevel: toAwardLevelNumber(c.awardLevel),
    institution: c.institution?.name ?? "",
  }));

  const subjects = Array.from(new Set(courses.map((c) => c.subject).filter(Boolean))).sort();
  const institutions = Array.from(new Set(courses.map((c) => c.institution).filter(Boolean))).sort();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Courses</h1>
      <CoursesClient courses={courses} subjects={subjects} institutions={institutions} />
    </div>
  );
}