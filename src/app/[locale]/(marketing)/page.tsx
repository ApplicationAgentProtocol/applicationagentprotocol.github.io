import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="space-y-14">
      {/* Hero intro block */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
          <span className="font-medium tracking-tight">
            Application Agent Protocol
          </span>
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-300">
            spec-first • composable • observable
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          A protocol for building{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
            application-native agents
          </span>{" "}
          that ship to production.
        </h2>

        <p className="max-w-3xl text-base leading-relaxed text-pretty text-zinc-200 sm:text-lg">
          Standardize how your app talks to agents: message envelopes, tool
          calling, streaming events, and clear error surfaces—so you can swap
          runtimes, vendors, and transports without rewriting integrations.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/about/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0"
          >
            Read the spec
          </Link>

          <Link
            href="/portfolio/"
            className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8 active:translate-y-0"
          >
            Browse examples
          </Link>

          <Link
            href="https://github.com/applicationagentprotocol/applicationagentprotocol.github.io"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:text-white"
          >
            GitHub →
          </Link>
        </div>
      </section>

      {/* Key pillars */}
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">
            Strict envelopes
          </div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-200">
            Define stable, versioned message shapes so tooling can validate,
            log, trace, and replay interactions reliably.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">
            Tooling as a contract
          </div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-200">
            Tools are explicit, typed, and auditable. Your agent is powerful
            without being opaque.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">
            Streaming by default
          </div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-200">
            First-class events for partial outputs, progress, and structured
            failures—built for real product UX.
          </div>
        </div>
      </section>

      {/* “How it fits” section */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          How it fits into your stack
        </h3>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">
              Apps ↔ Protocol ↔ Agent runtime
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">
              Your product talks to the protocol. Your agent runtime implements
              the protocol. Swap either side independently.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                Keep integration code stable across model/provider changes
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                Add observability without custom glue
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                Make tool permissions explicit and reviewable
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-white">
              Made for production
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">
              Clear error surfaces, predictable behaviors, and event streams you
              can store—so debugging isn&apos;t guesswork.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white">
                  Versioning
                </div>
                <div className="mt-1 text-xs text-zinc-300">
                  Backwards-compatible evolution over time
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white">
                  Auditability
                </div>
                <div className="mt-1 text-xs text-zinc-300">
                  Inspect tools, inputs, outputs, and traces
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white">Replays</div>
                <div className="mt-1 text-xs text-zinc-300">
                  Store events and deterministically replay flows
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs font-semibold text-white">
                  UX-friendly
                </div>
                <div className="mt-1 text-xs text-zinc-300">
                  Streaming tokens and structured progress updates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Start with the spec. Ship with confidence.
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-200">
              Use the protocol to keep your agent integrations maintainable,
              portable, and observable—without sacrificing product-grade UX.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/about/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
            >
              Read the spec
            </Link>
            <Link
              href="/counter/"
              className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
            >
              See a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
