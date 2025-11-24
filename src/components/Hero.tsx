export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-transparent dark:to-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[72vh] items-center py-16 sm:py-24">
          <div className="max-w-3xl glass-card glass-border p-6 sm:p-8">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Software Engineer
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
              Hi, I’m Asad Tariq.
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-700 dark:text-slate-300">
              Versatile full‑stack web developer with 3+ years of experience
              building dynamic, responsive, and efficient applications. Strong
              with Python, React.js, and Ruby on Rails, plus AWS (EC2, S3, RDS, ASG)
              and advanced video/audio processing using OpenCV, MediaPipe, and
              Speechmatics.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/Asad%20Tariq%20CV%20(28May2025).pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-indigo-600/20 transition hover:bg-indigo-700"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10"
              >
                Contact Me
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-slate-600 dark:text-slate-300">
              I collaborate closely with cross‑functional teams to align
              engineering with business goals, with strong proficiency in database
              design and performance optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle background illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-indigo-100 opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-teal-100 opacity-60 blur-3xl"
      />
    </section>
  );
}


