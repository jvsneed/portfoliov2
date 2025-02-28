export type Language = 'en' | 'fr';

export const languages = {
  en: 'English',
  fr: 'Français'
};

export const defaultLang = 'en';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return {
    'nav.garden': lang === 'fr' ? 'Notes' : 'Garden',
    'nav.blog': 'Blog',
    'nav.about': lang === 'fr' ? 'À propos' : 'About',
    // Add more translations as needed
  };
}
