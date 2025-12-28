// app/resume/page.tsx
export default function ResumePage() {
    return (
        <section className="mt-6 mb-16 space-y-10">
        {/* Main heading */}
        <header className="mb-4">
            <h1 className="text-3xl font-bold">Resume & CV</h1>
            <p className="mt-2 text-sm opacity-80">
            You can view or download my current resume and longer-form CV below.
            </p>
        </header>

        {/* Resume */}
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Resume</h2>
            <div className="w-full overflow-hidden rounded-xl border">
            <object
                data="/Media/Resume.pdf"
                type="application/pdf"
                width="100%"
                height="900"
            >
                <p className="p-4 text-sm opacity-80">
                Your browser doesn&apos;t support embedded PDFs. You can{" "}
                <a
                    href="/Media/Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                >
                    download the resume here
                </a>
                .
                </p>
            </object>
            </div>
            <p className="mt-2 text-center">
            <a
                href="/Media/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5"
            >
                Download Resume
            </a>
            </p>
        </div>

        {/* CV */}
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Curriculum Vitae (CV)</h2>
            <p className="text-sm opacity-80">
            A more detailed academic & research-focused document.
            </p>
            <div className="w-full overflow-hidden rounded-xl border">
            <object
                data="/Media/CV.pdf"   // <- put your CV file here (in /public/Media/)
                type="application/pdf"
                width="100%"
                height="900"
            >
                <p className="p-4 text-sm opacity-80">
                Your browser doesn&apos;t support embedded PDFs. You can{" "}
                <a
                    href="/Media/CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                >
                    download the CV here
                </a>
                .
                </p>
            </object>
            </div>
            <p className="mt-2 text-center">
            <a
                href="/Media/CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5"
            >
                Download CV
            </a>
            </p>
        </div>
        </section>
    );
}