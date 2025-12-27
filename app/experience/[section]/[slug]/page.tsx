import Image from "next/image";
import { experience } from "@/content/experience";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;

  const item = experience.find((x) => x.section === section && x.slug === slug);
  if (!item) return <div className="p-10">Experience not found</div>;

  return (
    <article className="mx-auto max-w-4xl p-10">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="mt-2 opacity-70">{item.year}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full border px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>

      {item.overview && (
        <>
          <h2 className="mt-10 text-xl font-semibold">Project Overview</h2>
          <p className="mt-2 leading-relaxed opacity-90">{item.overview}</p>
        </>
      )}

      {item.roleBullets?.length ? (
        <>
          <h2 className="mt-10 text-xl font-semibold">Your Role & Contributions</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 opacity-90">
            {item.roleBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </>
      ) : null}

      {item.skills?.length ? (
        <>
          <h2 className="mt-10 text-xl font-semibold">Skills & Tools</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 opacity-90">
            {item.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </>
      ) : null}

      {(item.goals?.length || item.outcomes?.length) ? (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {item.goals?.length ? (
            <div>
              <h2 className="text-xl font-semibold">Goals</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 opacity-90">
                {item.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {item.outcomes?.length ? (
            <div>
              <h2 className="text-xl font-semibold">Outcomes</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 opacity-90">
                {item.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}

      {item.images?.length ? (
        <>
          <h2 className="mt-10 text-xl font-semibold">Visual Aids</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {item.images.map((img) => (
              <figure key={img.src} className="rounded-xl border p-3">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-lg"
                />
                {img.caption ? (
                  <figcaption className="mt-2 text-sm opacity-70">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </>
      ) : null}

      {item.lessonsLearned?.length ? (
        <>
          <h2 className="mt-10 text-xl font-semibold">Lessons Learned</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 opacity-90">
            {item.lessonsLearned.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </>
      ) : null}
    </article>
  );
}