import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { AppConfig } from '@/utils/AppConfig';

/**
 * Premium marketing shell with a Shopify-Editions-like vibe:
 * - Gradient "aurora" background + subtle grid
 * - Sticky glass header with nav slots
 * - Hero headline + optional CTA/eyebrow
 * - Section framing and footer
 *
 * Notes:
 * - Uses Tailwind utility classes only (Tailwind v4 compatible).
 * - Comments are in English as requested.
 */
export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;

  /**
   * Optional hero override. If provided, it's rendered above `children`.
   * If omitted, a default hero is shown.
   */
  hero?: React.ReactNode;

  /**
   * Optional "primary" CTA link rendered in the default hero.
   */
  primaryCta?: { href: string; label: string };

  /**
   * Optional "secondary" CTA link rendered in the default hero.
   */
  secondaryCta?: { href: string; label: string };
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="relative min-h-dvh w-full overflow-x-clip bg-zinc-950 text-zinc-100 antialiased">
      {/* Background: aurora + radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/25 via-cyan-400/20 to-indigo-500/25 blur-3xl" />
        <div className="absolute -bottom-52 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/20 via-sky-400/15 to-violet-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.14),rgba(0,0,0,0))]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.06]" />
      </div>

      {/* Top border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="relative">
        {/* Header */}
        <header className="sticky top-0 z-50">
          <div className="border-b border-white/10 bg-zinc-950/55 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/40">
            <div className="mx-auto max-w-6xl px-4">
              <div className="flex h-16 items-center justify-between gap-3">
                {/* Brand */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/"
                    className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-white/5"
                    aria-label={`${AppConfig.name} home`}
                  >
                    <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-white/12 to-white/5 ring-1 ring-white/10">
                      <span className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-cyan-300 to-fuchsia-300 opacity-90 shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
                    </span>
                    <span className="text-sm font-semibold tracking-tight text-white">
                      {AppConfig.name}
                    </span>
                    <span className="ml-1 hidden rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-zinc-200 md:inline">
                      v0
                    </span>
                  </Link>
                </div>

                {/* Desktop nav */}
                <div className="hidden items-center gap-6 md:flex">
                  <nav aria-label="Primary navigation">
                    <ul className="flex flex-wrap items-center gap-x-6 text-sm text-zinc-200">
                      {props.leftNav}
                    </ul>
                  </nav>

                  <nav aria-label="Secondary navigation">
                    <ul className="flex flex-wrap items-center gap-x-4 text-sm text-zinc-200">
                      {props.rightNav}
                    </ul>
                  </nav>
                </div>

                {/* Mobile hint (kept minimal on purpose) */}
                <div className="md:hidden">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                    Menu in header
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main>
          {/* Hero */}
          <section className="relative">
            <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-14">
              {/* Section top highlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />

              {props.hero ?? (
                <div className="grid items-center gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.45)]" />
                      <span className="font-medium tracking-tight">
                        Protocol • Tools • Reference implementation
                      </span>
                    </div>

                    <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                      Build application agents with a
                      {' '}
                      <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
                        clean, composable protocol
                      </span>
                      .
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-zinc-200 sm:text-lg">
                      {t('description')}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={props.primaryCta?.href ?? '/about/'}
                        className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0"
                      >
                        {props.primaryCta?.label ?? 'Read the spec'}
                      </Link>

                      <Link
                        href={props.secondaryCta?.href ?? '/'}
                        className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8 active:translate-y-0"
                      >
                        {props.secondaryCta?.label ?? 'See examples'}
                      </Link>

                      <div className="text-xs text-zinc-400 sm:ml-3">
                        Deploys on GitHub Pages • Runs with Bun
                      </div>
                    </div>

                    {/* Social proof / badges */}
                    <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-zinc-300">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        TypeScript
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        Next.js
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        next-intl
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        Tailwind v4
                      </span>
                    </div>
                  </div>

                  {/* Right: feature cards with glass + glow */}
                  <div className="lg:col-span-5">
                    <div className="relative">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl"
                      />
                      <div className="relative grid gap-4">
                        <div className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                          <div className="text-sm font-semibold text-white">
                            Composable messages
                          </div>
                          <div className="mt-2 text-sm leading-relaxed text-zinc-200">
                            Define strict envelopes, stream events, and keep
                            your agent runtime portable across apps.
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                          <div className="text-sm font-semibold text-white">
                            Tooling-first design
                          </div>
                          <div className="mt-2 text-sm leading-relaxed text-zinc-200">
                            Make tools explicit, auditable, and testable—without
                            coupling to a single vendor stack.
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                          <div className="text-sm font-semibold text-white">
                            Production ergonomics
                          </div>
                          <div className="mt-2 text-sm leading-relaxed text-zinc-200">
                            Versioned schema, clear error surfaces, and
                            monitoring-friendly event streams.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Content sections (user-provided pages render here) */}
          <section className="mx-auto max-w-6xl px-4 pb-16">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
              {/* Inner separator glow */}
              <div
                aria-hidden
                className="pointer-events-none -mx-10 -mt-10 mb-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <div className="text-base text-zinc-100 [&_a]:text-cyan-200 [&_a]:no-underline [&_a:hover]:text-cyan-100">
                {props.children}
              </div>
            </div>

            {/* Feature strip */}
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">
                  Spec-driven
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Write once, validate everywhere. Keep agents deterministic
                  where it matters.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">
                  Composable
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Mix transports, runtimes, and toolchains without rewriting
                  your app integration.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">
                  Observable
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Events and envelopes that are easy to log, trace, and replay.
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-zinc-950/50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-zinc-300">
                {`© ${new Date().getFullYear()} ${AppConfig.name}. `}
                <span className="text-zinc-400">
                  {t.rich('made_with', {
                    author: () => (
                      <a
                        href="https://nextjs-boilerplate.com"
                        className="font-medium text-cyan-200 hover:text-cyan-100"
                      >
                        Next.js Boilerplate
                      </a>
                    ),
                  })}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-300">
                <a
                  href="https://github.com/applicationagentprotocol/applicationagentprotocol.github.io"
                  className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://applicationagentprotocol.github.io"
                  className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
