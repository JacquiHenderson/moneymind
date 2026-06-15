import { SITE_URL } from '../lib/seo';

// AI / answer-engine crawlers are explicitly welcomed (GEO): being crawlable is a
// prerequisite for being cited by ChatGPT, Claude, Perplexity, Google AI Overviews, etc.
const AI_CRAWLERS = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'ClaudeBot', 'Claude-Web', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'CCBot', 'Amazonbot', 'cohere-ai',
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
