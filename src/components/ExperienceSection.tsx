type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Devsinc",
    dates: "Jul 2023 – Present",
    bullets: [
      "Led design, development, and maintenance of web applications; improved performance by 20% via code and query optimization.",
      "Delivered 10+ scalable features with a focus on performance and user experience.",
      "Collaborated with cross‑functional teams to align engineering with business goals; improved delivery timelines by 15%.",
      "Increased code quality with unit tests and best practices, reducing production bugs by 30%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "LetsRemotify",
    dates: "Oct 2022 – Sep 2023",
    bullets: [
      "Developed and maintained Ruby on Rails and Stimulus.js applications, handling 1,000+ concurrent users without degradation.",
      "Streamlined backend operations with PostgreSQL; achieved 30% faster query execution.",
      "Integrated third‑party services for email/media; reduced manual effort by 25%.",
      "Merged 50+ PRs in GitHub; ensured robust version control practices.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Devsinc",
    dates: "Jul 2022 – Jun 2023",
    bullets: [
      "Built front‑end and back‑end features enabling real‑time user interactions.",
      "Designed and developed scalable systems supporting 2x growth in activity.",
      "Leveraged Firebase to reduce server response time by 20%.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-24 bg-white dark:bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          Experience
        </h2>

        <ol className="mt-10 relative border-slate-200">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute -left-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-white dark:ring-neutral-900" />
              <div className="glass-card glass-border p-5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {exp.role} — {exp.company}
                  </h3>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{exp.dates}</span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-800 dark:text-slate-200">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


