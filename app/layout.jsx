import '../styles/globals.css';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { SITE_URL } from '../lib/seo';

// Self-hosted, subsetted fonts — no render-blocking external request.
const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const DESCRIPTION =
  'The behavioral layer your risk profile is missing — a psychological blueprint of how clients save, spend, invest, and react when markets get messy. Built for financial advisory firms and fund providers.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'MoneyMind — AI Behavioral Intelligence for Financial Advisors',
  description: DESCRIPTION,
  applicationName: 'MoneyMind',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'MoneyMind',
    url: SITE_URL,
    title: 'MoneyMind — AI Behavioral Intelligence for Financial Advisors',
    description: DESCRIPTION,
    images: [{ url: '/assets/og/og-image.png', width: 1200, height: 630, alt: 'MoneyMind' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoneyMind — AI Behavioral Intelligence for Financial Advisors',
    description: DESCRIPTION,
    images: ['/assets/og/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MoneyMind',
  legalName: 'MoneyMind Profile',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/og/logo-512.png`,
  description: DESCRIPTION,
  email: 'support@moneymindprofile.com',
  sameAs: [
    'https://au.linkedin.com/company/moneymindprofile1',
    'https://www.instagram.com/moneymind_profile/',
    'https://www.facebook.com/people/MoneyMind/61577449349777/',
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MoneyMind',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  description: DESCRIPTION,
  offers: {
    '@type': 'Offer',
    price: '69',
    priceCurrency: 'USD',
    description: 'Per advisor / month, with a 14-day free trial.',
  },
  publisher: { '@type': 'Organization', name: 'MoneyMind', url: SITE_URL },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        {children}
        {/* JSON-LD as plain <script> so it is in the raw HTML for non-JS AI crawlers. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0F630LT9L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W0F630LT9L');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1871269013580520');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1871269013580520&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
