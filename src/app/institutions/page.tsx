import Link from "next/link";
import { institutions } from "@/data/mock";

export default function InstitutionsIndexPage() {
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