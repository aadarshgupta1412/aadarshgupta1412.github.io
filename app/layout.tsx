import type { Metadata } from 'next';
import { Bricolage_Grotesque, Figtree, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Footer } from '@/components/Footer';
import { ClientLayout } from '@/components/ClientLayout';
import { SITE } from '@/lib/data';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} — Founding AI Engineer`,
    template: `%s · ${SITE.title}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.title }],
  openGraph: {
    title: `${SITE.title} — Founding AI Engineer`,
    description: SITE.description,
    type: 'website',
    url: SITE.url,
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ClientLayout>
            <main>{children}</main>
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
