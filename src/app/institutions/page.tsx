// File: src/app/institutions/page.tsx
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function InstitutionsIndexPage() {
  const institutions = await prisma.institution.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Institutions</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {institutions.map((i) => (
          <li key={i.slug} className="border rounded-md p-4">
            <h3 className="font-medium">{i.name}</h3>
            <p className="text-sm text-gray-600">{i.city ?? "—"}</p>
            <Link className="text-sm underline" href={`/institutions/${i.slug}`}>
              View courses
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}