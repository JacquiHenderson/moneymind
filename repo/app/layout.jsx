import '../styles/globals.css';

export const metadata = {
  title: 'MoneyMind — AI Behavioural Intelligence for Financial Advisors',
  description: 'MoneyMind gives financial advisory firms a psychological blueprint of how their clients make financial decisions — how they save, spend, invest, and react when markets get messy.',
  icons: {
    icon: '/assets/logos/mark-color.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
