import { Header } from '@/modules/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sapdoku',
  description: 'Super Auto Pets daily game!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <div
          className="min-h-screen
          flex
          flex-col
          justify-between"
        >
          <Providers>
            <div>
              <Header />
              <div className="max-w-7xl mx-auto">{children}</div>
            </div>
            <footer className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
              <p className="text-muted text-sm text-center">
                {`Not affiliated with the official Super Auto Pets game or Team Wood Games.`}
              </p>
            </footer>
          </Providers>
        </div>
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4PCFFWMNGF"
      />
      <Script id="Google Analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4PCFFWMNGF');`}
      </Script>
    </html>
  );
}
