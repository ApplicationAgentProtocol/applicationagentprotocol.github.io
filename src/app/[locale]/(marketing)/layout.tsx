import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { DemoBanner } from '@/components/DemoBanner';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <>
      <DemoBanner />
      <BaseTemplate
        leftNav={(
          <>
            <li>
              <Link
                href="/"
                className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white"
              >
                {t('home_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/about/"
                className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white"
              >
                {t('about_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/counter/"
                className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white"
              >
                {t('counter_link')}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/"
                className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white"
              >
                {t('portfolio_link')}
              </Link>
            </li>
            <li>
              <a
                className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li>
              <Link
                href="/sign-in/"
                className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white"
              >
                {t('sign_in_link')}
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up/"
                className="rounded-lg bg-white px-3 py-1.5 text-zinc-950 transition hover:bg-zinc-100"
              >
                {t('sign_up_link')}
              </Link>
            </li>

            <li>
              <div className="rounded-lg px-2 py-1 text-zinc-200 transition hover:bg-white/5 hover:text-white">
                <LocaleSwitcher />
              </div>
            </li>
          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
