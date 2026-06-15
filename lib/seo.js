export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moneymindprofile.com';

const OG_IMAGE = { url: '/assets/og/og-image.png', width: 1200, height: 630, alt: 'MoneyMind' };

/**
 * Build a page-level Next.js metadata object with canonical + Open Graph + Twitter.
 * Next does not deep-merge nested objects like openGraph, so we always re-declare
 * the OG image here to ensure social/AI cards never lose it.
 */
export function pageMeta({ title, description, path = '/', noindex = false }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'MoneyMind',
      url,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
