export const runtime = "nodejs";

import { notFound } from "next/navigation";
import InstitutionClient from "./InstitutionClient";
import { prisma } from "@/lib/db";

export default async function InstitutionDetailPage({
  params,
}: {
  params: { slug: string }; // <- plain object, not Promise
}) {
  const { slug } = params;

  const inst = await prisma.institution.findUnique({ where: { slug } });
  if (!inst) return notFound();

  const baseCourses = await prisma.course.findMany({
    where: { institutionId: inst.id },
    orderBy: [{ awardLevel: "desc" }, { title: "asc" }],
  });

  const subjects = ["Computing", "Engineering", "Business", "Arts", "Science"] as const;

  return (
    <InstitutionClient
      inst={inst}
      baseCourses={baseCourses}
      subjects={subjects as readonly string[]}
    />
  );
}