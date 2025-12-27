import { experience, type ExperienceSection } from "@/content/experience";

export default function ExperienceDetail({
  slug,
  section,
}: {
  slug: string;
  section: ExperienceSection;
}) {
  const item = experience.find((p) => p.slug === slug && p.section === section);

  if (!item) return <div>Experience not found</div>;

  return (
    <article className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="mt-2 opacity-70">{item.year}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 text-sm opacity-80">Detailed write-up goes here.</div>
    </article>
  );
}