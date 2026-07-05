import type { Metadata } from 'next';
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'belajar IT bagi yang ndak sempet masuk IT',
  description: 'A premium interactive roadmap learning platform for modern IT, Business, and AI career paths. Learn data analytics, AI engineering, machine learning, and more with a cozy feminine aesthetic.',
  keywords: ['roadmap', 'learning', 'IT', 'AI', 'career', 'data science'],
  authors: [{ name: 'RoadMap Learning Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roadmaplearning.com',
    title: 'belajar IT bagi yang ndak sempet masuk IT',
    description: 'A premium interactive roadmap learning platform',
    images: [
      {
        url: 'https://roadmaplearning.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RoadMap Learning Platform',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${grotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-inter bg-warm-white dark:bg-dark-bg text-accent dark:text-dark-text transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
