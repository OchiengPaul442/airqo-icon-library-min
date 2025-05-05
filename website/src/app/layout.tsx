import type { Metadata } from 'next';
import * as React from 'react';
import { Inter as FontSans } from 'next/font/google';
import Link from 'next/link';
import { ErrorBoundary } from '@/components/error-boundary';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientThemeToggle } from '@/components/client-theme-toggle'; // Fixed import to use the existing file
import { Toaster } from 'sonner';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'AirQo Icons - Modern Icon Library',
  description: 'A modern, customizable icon library for AirQo applications',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-lg font-bold">AirQo Icons</span>
                  </Link>
                  <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
                    <Link
                      href="/"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Home
                    </Link>
                    <Link
                      href="/icons"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Icons
                    </Link>
                    <Link
                      href="/docs"
                      className="transition-colors hover:text-foreground/80"
                    >
                      Documentation
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-2">
                  <ClientThemeToggle /> {/* Using the correct component name */}
                </div>
              </div>
            </header>
            <main className="flex-1">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built by AirQo. The source code is available on{' '}
                  <a
                    href="https://github.com/airqo-platform/airqo-icon-library-min"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Toaster position="bottom-right" theme="system" />
      </body>
    </html>
  );
}
