/**
 * Canonical production origin, baked into SEO meta, JSON-LD, sitemap and robots
 * at build time (static export — there is no server to infer the host).
 *
 * Vercel injects VERCEL_PROJECT_PRODUCTION_URL on every deployment. Without it a
 * production build fails instead of guessing: a hardcoded fallback would ship a
 * canonical URL pointing at another project.
 *
 * A function, not a const: config is imported by client components through
 * `content/site`, and a module-level throw would take the browser down with it.
 * Only layout, sitemap and robots call this, and all three run at build time.
 */
export function siteUrl(): string {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (host) return `https://${host}`;
  if (process.env.NODE_ENV !== "production") return "http://localhost:3000";
  throw new Error("VERCEL_PROJECT_PRODUCTION_URL is not set");
}

export const links = {
  email: "alexchea319@gmail.com",
  telegram: "https://t.me/alexchea318",
  github: "https://github.com/alexchea318",
  linkedin: "https://www.linkedin.com/in/alexander-chechenev",
  vk: "https://vk.me/schechenev",
  hh: "https://hh.ru/resume/393677b8ff0cef9eb60039ed1f794c544b5469",
  interview2021: "https://media.spbstu.ru/news/unicorn_factory/319",
} as const;
