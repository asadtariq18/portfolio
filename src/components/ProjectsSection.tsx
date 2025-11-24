type Project = {
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "Truth Or Lie",
    description:
      "Video analysis service leveraging Python and AWS for deception detection in deposition videos and audio.",
    tech: [
      "Python",
      "Flask",
      "Redis",
      "AWS (S3, EC2)",
      "Speechmatics",
      "OpenCV",
      "MediaPipe",
      "PostgreSQL",
    ],
    link: "#"
  },
  {
    name: "YFU Universe",
    description:
      "Global student management platform; enhanced features serving 10,000+ users worldwide.",
    tech: ["Ruby on Rails", "Vue.js"],
    link: "#"
  },
  {
    name: "BenchIT",
    description:
      "Slack‑like web application focusing on real‑time messaging with video/audio integration.",
    tech: ["Real‑time messaging", "Video/Audio"],
    link: "#"
  },
  {
    name: "LetsRemotify",
    description:
      "Recruiting marketplace; optimized modules processing 100+ job applications daily.",
    tech: ["Ruby on Rails", "PostgreSQL"],
    link: "#"
  },
  {
    name: "Test Rabbit",
    description:
      "Online assessments application integrated with LetsRemotify, handling 50+ daily assessments.",
    tech: ["Ruby on Rails"],
    link: "#"
  },
  {
    name: "Pokémon",
    description:
      "TypeScript app for exploring Pokémon data via official API with optimized requests.",
    tech: ["TypeScript", "PokéAPI"],
    link: "#"
  },
  {
    name: "Campus Buddy",
    description:
      "React Native social app for university students with real‑time chat using Firebase.",
    tech: ["React Native", "Firebase"],
    link: "#"
  },
  {
    name: "Infinity Blog",
    description: "Blogging platform enabling authors to publish and engage readers.",
    tech: ["Ruby on Rails"],
    link: "#"
  },
  {
    name: "Resume Evaluator",
    description:
      "NLP‑powered web app providing insights into resume alignment to job requirements.",
    tech: ["Python", "NLP"],
    link: "#"
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="scroll-mt-24 bg-slate-50 dark:bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          Projects
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group glass-card glass-border p-5 transition hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-800 ring-1 ring-inset ring-slate-200 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


