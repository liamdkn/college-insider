import Link from "next/link";
import { notFound } from "next/navigation";
import SaveButton from "@/components/save-button";
import { prisma } from "@/lib/db";

export default async function CourseDetailsPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { tab?: string };
}) {
  // Fetch the course by slug from the DB, include institution name for display
  const course = await prisma.course.findUnique({
    where: { slug: params.slug },
    include: { institution: { select: { name: true } } },
  });

  if (!course) return notFound();

  const tab = (searchParams?.tab as "cao" | "insider") || "cao";

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">{course.title}</h1>
          <p className="text-gray-500">
            {course.institution?.name ?? ""} • CAO {course.caoCode ?? "—"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3 py-2 rounded-md border text-sm"
            aria-label="Add to Compare"
            title="Add to Compare"
          >
            Add to Compare
          </button>
          <SaveButton slug={course.slug} title={course.title} />
        </div>
      </header>

      {/* Tab controls */}
      <div className="flex border-b">
        <a
          href={`?tab=cao`}
          aria-current={tab === "cao" ? "page" : undefined}
          className={`flex-1 text-center px-4 py-3 font-medium transition-colors ${
            tab === "cao"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          CAO
        </a>
        <a
          href={`?tab=insider`}
          aria-current={tab === "insider" ? "page" : undefined}
          className={`flex-1 text-center px-4 py-3 font-medium transition-colors ${
            tab === "insider"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          INSIDER
        </a>
      </div>

      {/* Panels */}
      {tab === "cao" ? (
        <section className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Info label="Degree Type" value={course.award ?? "—"} />
            <Info label="Duration" value={course.durationYears ? `${course.durationYears} years` : "—"} />
            <Info label="Delivery" value={course.deliveryMode ? course.deliveryMode.replaceAll("_", " ") : "—"} />
            <Info label="Campus" value={course.campusId ? "See campus details" : "—"} />
            <Info label="NFQ Level" value={`${course.nfqLevel ?? "—"}`} />
            <Info label="Application" value={`Via CAO`} />
          </div>

          <Card title="Overview">
            <p className="text-sm leading-relaxed">
              Placeholder overview. We’ll replace this with real data later.
            </p>
          </Card>

          <Card title="Course Structure / Modules">
            <ul className="list-disc pl-5 text-sm">
              <li>Year 1: Fundamentals</li>
              <li>Year 2: Data Structures / Systems</li>
              <li>Year 3: Work placement</li>
              <li>Year 4: Final Project</li>
            </ul>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Fees & Funding">
              <p className="text-sm">EU: €3,000 • Non-EU: €19,800 (mock)</p>
            </Card>
            <Card title="How to Apply">
              <a className="text-sm underline" href="https://www.cao.ie" target="_blank" rel="noreferrer">
                Apply via CAO
              </a>
            </Card>
          </div>
        </section>
      ) : (
        <section className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Info label="Applicants" value={`2,000 (mock)`} />
            <Info label="Places" value={`340 (mock)`} />
            <Info label="Acceptance Yield" value={`80% (mock)`} />
            <Info label="Pass Rate" value={`90% (mock)`} />
            <Info label="Dropout Rate" value={`15% (mock)`} />
            <Info label="Employment Rate" value={`92% (mock)`} />
          </div>

          <Card title="Historical Points (mock)">
            <div className="h-40 grid place-items-center text-sm text-gray-500">
              [line chart placeholder]
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Applicants vs Places (mock)">
              <div className="h-40 grid place-items-center text-sm text-gray-500">
                [bar chart placeholder]
              </div>
            </Card>
            <Card title="Cohort Mix (mock)">
              <div className="h-40 grid place-items-center text-sm text-gray-500">
                [pie chart placeholder]
              </div>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-md p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-medium">{value}</div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border rounded-md p-4">
      <h3 className="font-medium mb-2">{title}</h3>
      {children}
    </section>
  );
}