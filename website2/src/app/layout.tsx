'use client';

import * as React from 'react';
import { Inter as FontSans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
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
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col w-full">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
              <div className="container flex h-16 items-center justify-between px-4 mx-auto">
                <div className="flex items-center space-x-6">
                  <Link href="/" className="flex items-center space-x-2 group">
                    <div className="relative overflow-hidden rounded-lg p-1 bg-primary/5 group-hover:bg-primary/10 transition-all">
                      <img
                        src="/airqoLogo.png"
                        alt="AirQo Logo"
                        className="h-7 w-auto"
                      />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                      AQ Icons
                    </span>
                  </Link>

                  {/* Desktop Navigation */}
                  <nav className="hidden items-center space-x-1 text-sm font-medium md:flex">
                    <Link
                      href="/"
                      className="px-4 py-2 rounded-md hover:bg-secondary transition-colors hover:text-foreground"
                    >
                      Home
                    </Link>
                    <Link
                      href="/icons"
                      className="px-4 py-2 rounded-md hover:bg-secondary transition-colors hover:text-foreground"
                    >
                      Icons
                    </Link>
                    <Link
                      href="/docs"
                      className="px-4 py-2 rounded-md hover:bg-secondary transition-colors hover:text-foreground"
                    >
                      Docs
                    </Link>
                  </nav>
                </div>

                {/* Right side utilities */}
                <div className="flex items-center space-x-4">
                  <ClientThemeToggle />
                  <a
                    href="https://github.com/OchiengPaul442/airqo-icon-library-min"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full h-10 w-10 flex items-center justify-center bg-secondary/80 hover:bg-secondary text-primary transition-colors"
                  >
                    <Github className="h-[18px] w-[18px]" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </div>
              </div>
            </header>

            {/* Mobile Navigation Bar (at bottom) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-lg border-t border-border/40">
              <div className="flex items-center justify-around h-16">
                <Link
                  href="/"
                  className="flex flex-col items-center justify-center w-1/3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </Link>
                <Link
                  href="/icons"
                  className="flex flex-col items-center justify-center w-1/3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1"
                  >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                  Icons
                </Link>
                <Link
                  href="/docs"
                  className="flex flex-col items-center justify-center w-1/3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Docs
                </Link>
              </div>
            </div>

            <ErrorBoundary>
              <main className="flex-1 pb-16 md:pb-0 w-full flex flex-col items-center">
                {children}
              </main>
            </ErrorBoundary>

            <footer className="border-t border-border/40 bg-background/50">
              <div className="container py-8 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/airqoLogo.png"
                        alt="AirQo Logo"
                        className="h-6 w-auto"
                      />
                      <span className="text-lg font-bold">AirQo Icons</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A beautiful, consistent, and accessible icon library for
                      modern applications.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">Resources</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/docs"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/icons"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Icon Library
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="https://github.com/OchiengPaul442/airqo-icon-library-min"
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://airqo.africa"
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          AirQo
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border/40">
                  <p className="text-xs text-center text-muted-foreground">
                    © {new Date().getFullYear()} AirQo. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--card)',
                color: 'var(--card-foreground)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
