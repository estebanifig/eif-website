import Link from "next/link";

const experienceSections = [
  { section: "internships", label: "Internships" },
  { section: "research", label: "Research" },
  { section: "extracurricular-projects", label: "Extracurricular Projects" },
  { section: "class-projects", label: "Class Projects" },
] as const;

export default function Nav() {
  return (
    <header>
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="hover:opacity-70">Home</Link>
                <Link href="/about" className="hover:opacity-70">About</Link>

                {/* Experience dropdown */}
                <div className="relative group">
                    <Link
                        href="/experience"
                        className="inline-flex items-center gap-1 hover:opacity-70 focus:outline-none"
                    >
                        Experience <span className="text-xs opacity-70">▾</span>
                    </Link>

                    {/* Hover bridge + panel */}
                    <div className="absolute left-0 top-full hidden pt-0 group-hover:block group-focus-within:block">
                        <div className="w-56 rounded-xl border bg-black p-2 shadow-lg">
                        {experienceSections.map((s) => (
                            <Link
                            key={s.section}
                            href={`/experience/${s.section}`}
                            className="block rounded-lg px-3 py-2 hover:bg-black/5"
                            >
                            {s.label}
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>

                <Link href="/photography" className="hover:opacity-70">Photography</Link>
                <Link href="/resume" className="hover:opacity-70">Resume</Link>
                <Link href="/contact" className="hover:opacity-70">Contact</Link>
            </div>
        </nav>
    </header>
  );
}