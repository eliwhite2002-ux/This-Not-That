import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Synth Companions',
  description:
    'Synth Companions is a podcast and publication about AI dolls, companion tech, and the real owner experience.',
  openGraph: {
    title: 'Synth Companions',
    description:
      'A podcast and publication about AI dolls, companion tech, and the real owner experience.',
    url: 'https://synthcompanions.com',
    siteName: 'Synth Companions',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synth Companions',
    description:
      'A podcast and publication about AI dolls, companion tech, and the real owner experience.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 md:py-12">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
