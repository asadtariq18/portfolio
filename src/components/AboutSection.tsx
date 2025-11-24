export default function AboutSection() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-24 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          About
        </h2>
        <p className="mt-6 max-w-3xl text-slate-700 dark:text-slate-300">
          I’m a versatile Software Engineer with 3+ years of experience creating
          dynamic, responsive, and efficient web applications. My expertise spans
          Python, React.js, and Ruby on Rails with hands‑on AWS experience (EC2, S3,
          RDS, ASG). I’ve delivered advanced video/audio processing features using
          OpenCV, MediaPipe, and Speechmatics, and I care deeply about aligning
          technical solutions with business objectives.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="glass-card glass-border p-4">
            <p className="text-sm text-slate-800 dark:text-slate-200">
              Improved application performance by 20% via code and query optimization.
            </p>
          </div>
          <div className="glass-card glass-border p-4">
            <p className="text-sm text-slate-800 dark:text-slate-200">
              Delivered 10+ scalable features with a focus on UX and reliability.
            </p>
          </div>
          <div className="glass-card glass-border p-4">
            <p className="text-sm text-slate-800 dark:text-slate-200">
              Cross‑functional collaboration improved delivery timelines by 15%.
            </p>
          </div>
          <div className="glass-card glass-border p-4">
            <p className="text-sm text-slate-800 dark:text-slate-200">
              Reduced production bugs by 30% with testing and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


