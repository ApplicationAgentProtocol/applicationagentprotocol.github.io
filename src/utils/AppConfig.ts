import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Application Agent Protocol',
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  // Clerk doesn't ship a `zh` localization in this template; use English as a fallback for UI strings.
  zh: enUS,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};
