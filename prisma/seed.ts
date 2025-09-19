/* eslint-disable no-console */
import { PrismaClient, DeliveryMode } from "@prisma/client";
import {
  seedInstitutions,
  seedCampuses,
  seedCourses,
} from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding institutions…");
  await prisma.institution.createMany({
    data: seedInstitutions.map((i) => ({
      slug: i.slug,
      name: i.name,
      aka: i.aka ?? null,
      websiteUrl: i.websiteUrl ?? null,
      countryCode: i.countryCode ?? "IE",
    })),
    skipDuplicates: true,
  });

  const instRows = await prisma.institution.findMany({ select: { id: true, slug: true } });
  const instIdBySlug = new Map(instRows.map((r) => [r.slug, r.id] as const));

  console.log("Seeding campuses…");
  const campusData = seedCampuses
    .map((c) => {
      const instId = instIdBySlug.get(c.institutionSlug);
      if (!instId) {
        console.warn(`Skipping campus ${c.slug} — parent not found: ${c.institutionSlug}`);
        return null;
      }
      return {
        slug: c.slug,
        name: c.name,
        city: c.city ?? null,
        address: c.address ?? null,
        institutionId: instId,
      };
    })
    .filter(Boolean) as Array<{ slug: string; name: string; city: string | null; address: string | null; institutionId: string }>;

  if (campusData.length) {
    await prisma.campus.createMany({ data: campusData, skipDuplicates: true });
  }

  const campusRows = await prisma.campus.findMany({ select: { id: true, slug: true, institutionId: true } });
  const campusBySlug = new Map(campusRows.map((r) => [r.slug, r] as const));

  console.log("Seeding courses…");
  const courseData = [] as Array<{
    slug: string;
    title: string;
    caoCode?: string | null;
    nfqLevel?: number | null;
    award?: string | null;
    durationYears?: number | null;
    deliveryMode?: DeliveryMode | null;
    restricted?: boolean;
    description?: string | null;
    courseUrl?: string | null;
    campusId?: string | null;
    institutionId: string;
  }>;

  for (const course of seedCourses) {
    // Determine campus
    const campusSlug = course.campusSlug ?? (course.institutionSlug ? `${course.institutionSlug}-main` : undefined);
    let campusId: string | null = null;
    let institutionId: string | undefined;

    if (campusSlug) {
      const cRow = campusBySlug.get(campusSlug);
      if (!cRow) {
        console.warn(`Skipping ${course.caoCode ?? course.slug} — campus not found: ${campusSlug}`);
        continue;
      }
      campusId = cRow.id;
      institutionId = cRow.institutionId;
    } else if (course.institutionSlug) {
      institutionId = instIdBySlug.get(course.institutionSlug);
      if (!institutionId) {
        console.warn(`Skipping ${course.caoCode ?? course.slug} — institution not found: ${course.institutionSlug}`);
        continue;
      }
    } else {
      console.warn(`Skipping ${course.caoCode ?? course.slug} — no campusSlug or institutionSlug`);
      continue;
    }

    courseData.push({
      slug: course.slug,
      title: course.title,
      caoCode: course.caoCode ?? null,
      nfqLevel: course.awardLevel ?? null,          // map old awardLevel -> nfqLevel
      award: course.degreeType ?? null,             // map old degreeType -> award (BA/BSc/etc.)
      durationYears: course.durationYears ?? null,
      deliveryMode: (course.deliveryMode as DeliveryMode) ?? DeliveryMode.FULL_TIME,
      restricted: Boolean(course.restricted ?? false),
      description: course.description ?? null,
      courseUrl: course.courseUrl ?? null,
      campusId,
      institutionId: institutionId!,
    });
  }

  if (courseData.length) {
    await prisma.course.createMany({ data: courseData, skipDuplicates: true });
  }

  console.log("Seed complete ✅");
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });