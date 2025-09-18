import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <div className="flex-1">
          <Link href="/" className="font-semibold text-black">College Insider</Link>
        </div>
        <nav className="flex gap-4 text-sm text-black ml-auto">
          <Link href="/courses">Courses</Link>
          <Link href="/institutions">Institutions</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/saved">Favourites</Link>
        </nav>
      </div>
    </header>
  );
}