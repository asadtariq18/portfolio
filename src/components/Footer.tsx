export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white dark:bg-transparent dark:border-white/10 glass-nav">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {year} Asad Tariq. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/asadtariq18"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/placeholder"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


