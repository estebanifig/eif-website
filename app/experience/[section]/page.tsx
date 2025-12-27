import Link from "next/link";
import { experience, type ExperienceSection } from "@/content/experience";

// The list of allowed sections (single source of truth)
const SECTIONS = [
  "internships",
  "research",
  "extracurricular-projects",
  "class-projects",
] as const;

function isExperienceSection(x: string): x is ExperienceSection {
  return (SECTIONS as readonly string[]).includes(x);
}

export default async function ExperienceSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  if (!isExperienceSection(section)) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">Unknown section: {section}</h1>
        <p className="mt-2 opacity-70">
          Valid sections: {SECTIONS.join(", ")}
        </p>
      </main>
    );
  }

  const items = experience.filter((x) => x.section === section);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold capitalize">
        {section.replaceAll("-", " ")}
      </h1>

      <p className="mt-2 opacity-70">{items.length} items</p>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.slug} className="rounded-xl border p-4">
            <Link
              className="text-lg font-semibold hover:underline"
              href={`/experience/${section}/${item.slug}`}
            >
              {item.title}
            </Link>
            <div className="mt-1 text-sm opacity-70">{item.year}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}