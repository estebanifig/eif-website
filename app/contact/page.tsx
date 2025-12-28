// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="space-y-10">
      {/* Top banner-ish header */}
      <div className="rounded-2xl bg-black text-white px-8 py-10">
        <h1 className="text-3xl font-semibold">Contact Me</h1>
        <p className="mt-3 max-w-xl text-sm opacity-80">
          I’m always happy to chat about robotics, controls, aerospace, or new collaborations.
          Feel free to reach out.
        </p>
      </div>

      {/* Contact block */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
        <p className="mt-2 text-sm opacity-80">
          Reach out via LinkedIn or email:
        </p>

        <div className="mt-6 flex items-center justify-center gap-10">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/esteban-figueroa-214807215/"
            target="_blank"
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black text-white transition group-hover:scale-105 group-hover:bg-black/90">
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 
                  .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 
                  12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 
                  1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
                  0-1.359.54-1.359 1.248 0 .694.521 1.248 
                  1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                  1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                  0-1.845.7-2.165 1.193v.025h-.016V6.169h-2.4v7.225h2.4z"
                />
              </svg>
            </span>
            <span className="text-sm font-medium group-hover:underline">
              LinkedIn
            </span>
          </Link>

          {/* Email */}
          <a
            href="mailto:estebanif03@gmail.com"
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black text-white transition group-hover:scale-105 group-hover:bg-black/90">
              {/* Email SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 
                  1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 
                  4.697zm6.761 4.133-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 
                  1.808-1.144l-6.57-4.027L8 9.586l-1.239-.756z"
                />
              </svg>
            </span>
            <span className="text-sm font-medium group-hover:underline">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}