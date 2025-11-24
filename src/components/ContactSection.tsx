"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="scroll-mt-24 bg-white dark:bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
          Contact
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          Interested in working together or have an opportunity? Feel free to
          reach out.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Email</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <a
                  className="text-indigo-600 hover:underline"
                  href="mailto:asadtariq070@gmail.com"
                >
                  asadtariq070@gmail.com
                </a>
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                LinkedIn
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <a
                  className="text-indigo-600 hover:underline"
                  href="https://www.linkedin.com/in/asadtariq18"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/asadtariq18
                </a>
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">Phone</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <a
                  className="text-indigo-600 hover:underline"
                  href="tel:+923088567481"
                >
                  +92 308 8567481
                </a>
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-slate-900 dark:text-slate-100">GitHub</span>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <a
                  className="text-indigo-600 hover:underline"
                  href="https://github.com/asadtariq18"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/asadtariq18
                </a>
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-card glass-border p-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-900 dark:text-slate-100"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-900 dark:text-slate-100"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-900 dark:text-slate-100"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-indigo-600/20 transition hover:bg-indigo-700 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {submitted && (
                <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">
                  Thanks! I’ll get back to you shortly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


