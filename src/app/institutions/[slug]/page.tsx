export const runtime = "nodejs";

import { notFound } from "next/navigation";
import InstitutionClient from "./InstitutionClient";
import { prisma } from "@/lib/db";

export default async function InstitutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // 1) Load institution (no campuses include to avoid TS error if relation not in schema yet)
  const inst = await prisma.institution.findUnique({
    where: { slug },
  });

  if (!inst) return notFound();

  // 2) Load courses for this institution; include campus only if it exists on Course
  const courses = await prisma.course.findMany({
    where: { institutionId: inst.id },
    orderBy: [{ nfqLevel: "desc" }, { title: "asc" }],
  });

  // NOTE: If you later add a Campus relation on Institution, you can re-add:
  // const inst = await prisma.institution.findUnique({
  //   where: { slug },
  //   include: { campuses: { select: { id: true, name: true, slug: true } } },
  // });

  // Temporary subjects until Subject table is fully wired
  const subjects = ["Computing", "Engineering", "Business", "Arts", "Science"] as const;

  return (
    <InstitutionClient
      inst={inst}
      baseCourses={courses}
      subjects={subjects as readonly string[]}
    />
  );
}