// File: src/app/institutions/page.tsx
import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function InstitutionsIndexPage() {
  // Query only fields that exist on Institution to avoid mismatches.
  const institutions = await prisma.institution.findMany({
    orderBy: { name: "asc" },
    select: {
      slug: true,
      name: true,
      // no relations selected here; we keep it simple and fast
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Institutions</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {institutions.map((i) => (
          <li key={i.slug} className="border rounded-md p-4">
            <h3 className="font-medium">{i.name}</h3>
            {/* City is a Campus attribute; we don't fetch it here. */}
            <p className="text-sm text-gray-600">—</p>
            <Link className="text-sm underline" href={`/institutions/${i.slug}`}>
              View courses
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}