import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg space-y-3">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-gray-600">We couldn’t find that page. Try the courses list.</p>
      <Link href="/courses" className="underline">Browse courses</Link>
    </div>
  );
}