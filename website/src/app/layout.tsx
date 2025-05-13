'use client';

import * as React from 'react';
import { Inter as FontSans } from 'next/font/google';
import Link from 'next/link';
import { ErrorBoundary } from '@/components/error-boundary';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientThemeToggle } from '@/components/client-theme-toggle';
import { Github } from 'lucide-react';
import { Toaster } from 'sonner';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

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
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-6">
                  <Link href="/" className="flex items-center space-x-2">
                    {' '}
                    <img
                      src="/airqoLogo.png"
                      alt="AirQo Logo"
                      className="h-6 w-auto"
                    />
                    <span className="text-lg font-bold">AQ Icons</span>
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
                      Docs
                    </Link>
                  </nav>
                </div>

                <div className="flex items-center space-x-4">
                  <ClientThemeToggle />{' '}
                  <a
                    href="https://github.com/OchiengPaul442/airqo-icon-library-min"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </header>

            <ErrorBoundary>
              <main className="flex-1">{children}</main>
            </ErrorBoundary>

            <footer className="border-t">
              <div className="container flex items-center justify-between py-6">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built by AirQo. The source code is available on{' '}
                  <a
                    href="https://github.com/OchiengPaul442/airqo-icon-library-min"
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
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
