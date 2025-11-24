"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      const initial = stored ?? "dark";
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    } catch {
      // no-op
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // no-op
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 ring-slate-200/60 bg-white/60 backdrop-blur transition hover:bg-white/80 dark:bg-neutral-900/40 dark:ring-white/10"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 1 1-9.45-9.45 1 1 0 0 0 .14-1.05A1 1 0 0 0 10 1a10 10 0 1 0 13 13 1 1 0 0 0-1.36-1Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M6.76 4.84 4.96 3.05 3.55 4.46l1.79 1.8 1.42-1.42ZM1 13h3v-2H1v2Zm10 10h2v-3h-2v3Zm7.04-1.95 1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42ZM20 11v2h3v-2h-3Zm-2.05-6.04 1.42-1.42-1.8-1.79-1.41 1.41 1.79 1.8ZM13 1h-2v3h2V1ZM4.96 19.05l-1.41 1.41 1.79 1.8 1.41-1.41-1.79-1.8ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
        </svg>
      )}
    </button>
  );
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", closeOnHashChange);
    return () => window.removeEventListener("hashchange", closeOnHashChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-sm" : ""}`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 glass-nav border-b border-slate-200/60 dark:border-white/10">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            aria-label="Home"
          >
            Asad Tariq
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <div className="mx-2 h-5 w-px bg-slate-200/80 dark:bg-white/10" />
            <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-[max-height] duration-300 ease-in-out overflow-hidden glass-nav ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          <div className="py-2">
            <ThemeToggle />
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}


