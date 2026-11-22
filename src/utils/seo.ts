import type { Locale, TrainingMode } from '../types.ts';

export const CANONICAL_ORIGIN = 'https://criticue.bastelar.com';

export function getCanonicalUrl(locale: Locale): string {
  return locale === 'en' ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}/?lang=${locale}`;
}

interface SeoConfig {
  title: string;
  description: string;
  faqItems: Array<{ question: string; answer: string }>;
}

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLinkTag(rel: string, href: string, hreflang?: string): void {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) {
      el.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function updateDocumentSeo(locale: Locale, _mode: TrainingMode, seo: SeoConfig): void {
  if (typeof document === 'undefined') return;

  document.documentElement.lang = locale;
  document.title = seo.title;

  const canonicalUrl = getCanonicalUrl(locale);
  const enUrl = getCanonicalUrl('en');
  const esUrl = getCanonicalUrl('es');

  upsertMetaTag('name', 'description', seo.description);
  upsertMetaTag('property', 'og:title', seo.title);
  upsertMetaTag('property', 'og:description', seo.description);
  upsertMetaTag('property', 'og:locale', locale === 'es' ? 'es_ES' : 'en_US');
  upsertMetaTag('property', 'og:url', canonicalUrl);
  upsertMetaTag('name', 'twitter:title', seo.title);
  upsertMetaTag('name', 'twitter:description', seo.description);

  upsertLinkTag('canonical', canonicalUrl);
  upsertLinkTag('alternate', enUrl, 'en');
  upsertLinkTag('alternate', esUrl, 'es');
  upsertLinkTag('alternate', enUrl, 'x-default');

  const jsonLdPayload = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CritiCue',
      url: canonicalUrl,
      inLanguage: locale,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      description: seo.description,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      url: canonicalUrl,
      inLanguage: locale,
      mainEntity: seo.faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  let scriptEl = document.getElementById('criticue-jsonld') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'criticue-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(jsonLdPayload);
}
