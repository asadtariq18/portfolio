const skills: Record<string, string[]> = {
  "Languages & Frameworks": [
    "Python",
    "Ruby on Rails",
    "JavaScript (ES6+)",
    "Vue.js",
    "React.js",
    "Flask",
    "Stimulus",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, RDS, ASG, Lambda)",
    "Docker",
    "ElasticSearch",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  "AI / Media": ["OpenCV", "MediaPipe", "Speechmatics"],
  Architecture: ["MVC", "MVVM"],
  Tools: ["Git", "GitHub", "GitLab", "Jira", "Trello", "ClickUp"],
  Platforms: ["macOS", "Linux"],
};

export default function SkillsSection() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-24 bg-slate-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          Skills
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-card glass-border p-5"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-inset ring-slate-200 dark:bg-white/10 dark:text-slate-200 dark:ring-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


