export default function manifest() {
  return {
    name: 'MoneyMind — AI Behavioral Intelligence',
    short_name: 'MoneyMind',
    description:
      'A psychological blueprint of how your clients make financial decisions, for financial advisors and fund providers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B45',
    theme_color: '#0B0B45',
    icons: [
      { src: '/assets/og/logo-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/og/logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
