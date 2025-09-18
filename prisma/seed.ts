// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { seedInstitutions, seedCourses } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding institutions…");
  // Upsert institutions and keep a map from slug -> id
  const instIdBySlug = new Map<string, string>();

  for (const inst of seedInstitutions) {
    const up = await prisma.institution.upsert({
      where: { slug: inst.slug },
      update: {
        name: inst.name,
        city: inst.city ?? null,
        websiteUrl: inst.websiteUrl ?? null,
      },
      create: {
        slug: inst.slug,
        name: inst.name,
        city: inst.city,
        websiteUrl: inst.websiteUrl,
      },
      select: { id: true, slug: true },
    });
    instIdBySlug.set(up.slug, up.id);
  }

  console.log("Seeding courses…");
  for (const c of seedCourses) {
    const instId = instIdBySlug.get(c.institutionSlug);
    if (!instId) {
      console.warn(`Skipping ${c.slug} — unknown institutionSlug: ${c.institutionSlug}`);
      continue;
    }
    await prisma.course.upsert({
      where: { slug: c.slug },
      update: {
        title: c.title,
        caoCode: c.caoCode,
        degreeType: c.degreeType,
        durationYears: c.durationYears,
        subject: c.subject,
        awardLevel: c.awardLevel,
        institutionId: instId,
      },
      create: {
        slug: c.slug,
        title: c.title,
        caoCode: c.caoCode,
        degreeType: c.degreeType,
        durationYears: c.durationYears,
        subject: c.subject,
        awardLevel: c.awardLevel,
        institutionId: instId,
      },
    });
  }

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });