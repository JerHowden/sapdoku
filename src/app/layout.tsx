import { Footer } from '@/modules/Footer';
import { Header } from '@/modules/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';

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
            <Footer />
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
