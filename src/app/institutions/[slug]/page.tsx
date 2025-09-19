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

  // Select only columns that exist on the Institution table to avoid selecting a non-existent `city`.
  const inst = await prisma.institution.findUnique({
    where: { slug },
    select: {
      id: true,
      slug: true,
      name: true,
      aka: true,
      websiteUrl: true,
      countryCode: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!inst) return notFound();

  // Load courses for this institution. Keep the selection explicit and avoid relations for now.
  const courses = await prisma.course.findMany({
    where: { institutionId: inst.id },
    orderBy: [{ nfqLevel: "desc" }, { title: "asc" }],
    select: {
      id: true,
      slug: true,
      title: true,
      caoCode: true,
      nfqLevel: true,
      award: true,
      department: true,
      durationYears: true,
      deliveryMode: true,
      restricted: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      campusId: true,
      institutionId: true,
      courseUrl: true,
    },
  });

  return (
    <InstitutionClient
      inst={inst}
      baseCourses={courses}
    />
  );
}