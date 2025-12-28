// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero section */}
      <section className="text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-12 md:flex-row md:items-center">
          {/* Photo */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">
            <Image
              src="/Media/index/WI5.JPG"
              alt="Esteban Figueroa"
              width={480}
              height={600}
              priority
              className="max-w-xs rounded-3xl object-cover shadow-xl md:max-w-sm"
            />
          </div>

          {/* Intro text */}
          <div className="w-full space-y-4 md:w-1/2">
            <h1 className="text-3xl font-semibold md:text-4xl">
              Hi! I&apos;m Esteban!
            </h1>
            <p className="text-sm text-zinc-300">
              Take a look at my professional, research, academic, and personal
              projects and experiences here:
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-900 shadow hover:bg-zinc-200"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 leading-relaxed text-white">
          I am a senior undergraduate pursuing a Bachelor&apos;s degree in
          Electrical Engineering with a strong passion for aerospace and
          robotics. During my undergraduate studies, I&apos;ve led avionics and
          control system development for a collegiate liquid rocket team,
          conducted robotics research on an Amphibious Robotic Turtle platform,
          and developed simulation hardware supporting mission design for
          Firefly Aerospace&apos;s Blue Ghost Lunar Lander and Elytra Space
          Utility Vehicle. My proficiency with tools such as LTSpice, Altium
          Designer, ROS&nbsp;2, MuJoCo, and various programming languages has
          allowed me to effectively verify designs, conduct detailed data
          analysis, and integrate hardware solutions across research and
          industry projects. My professional philosophy centers on staying
          current with cutting-edge research and technology, continuously
          stepping out of my comfort zone to learn and adapt, and providing
          mentorship within collaborative teams. I look forward to opportunities
          to apply my skills, connect with others, and contribute meaningfully
          as an engineer and researcher.
        </p>
      </section>

      {/* Highlights – static for now, no Firebase */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <p className="mt-2 text-sm text-zinc-600">
          A few recent things I&apos;m excited about. I&apos;ll hook this up to
          live data later.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white/60 p-4 shadow-sm">
            <h3 className="text-sm font-semibold">
              Amphibious Robotic Turtle - Performance Enhancement
            </h3>
            <p className="mt-2 text-xs text-zinc-600">
              Untethered a morphing turtle robot and co-authored a RoboSoft 2024
              paper on performance enhancement.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/60 p-4 shadow-sm">
            <h3 className="text-sm font-semibold">
              Firefly Aerospace - Blue Ghost
            </h3>
            <p className="mt-2 text-xs text-zinc-600">
              Built a high-fidelity valve simulation rack to support lunar
              lander mission scenario testing.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/60 p-4 shadow-sm">
            <h3 className="text-sm font-semibold">
              Project Liquid - Augmented Spark Igniter
            </h3>
            <p className="mt-2 text-xs text-zinc-600">
              Led avionics &amp; control for Yale&apos;s first liquid-propulsion
              hot-fire ignition test.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}