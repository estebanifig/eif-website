import Link from "next/link";
import { experience } from "@/content/experience";

const sections = [
  { section: "internships", label: "Internships" },
  { section: "research", label: "Research" },
  { section: "extracurricular-projects", label: "Extracurricular Projects" },
  { section: "class-projects", label: "Class Projects" },
] as const;

export default function ExperienceIndexPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Experience</h1>
      <p className="mt-2 opacity-70">Browse by category.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {sections.map((s) => {
          const count = experience.filter((x) => x.section === s.section).length;

          return (
            <Link
              key={s.section}
              href={`/experience/${s.section}`}
              className="rounded-xl border p-4 hover:opacity-80"
            >
              <div className="text-lg font-semibold">{s.label}</div>
              <div className="mt-1 text-sm opacity-70">{count} items</div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}