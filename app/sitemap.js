import { SITE_URL } from '../lib/seo';

// lastModified is stamped at build time.
const BUILD_DATE = new Date().toISOString();

const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/for-advisors', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/for-fund-providers', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/demo-request', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/legal/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/legal/terms-of-use', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/legal/acceptable-use-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/legal/data-aggregation', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/legal/data-processing-agreement', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/legal/subprocessors', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/legal/repeat-infringer-policy', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
