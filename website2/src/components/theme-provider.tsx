'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

interface ExtendedThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
  suppressHydrationWarning?: boolean;
}

/**
 * Enhanced theme provider with improved dark mode handling
 * Uses next-themes to manage theme state with SSR compatibility
 * Adds smooth view transitions between themes when browser supports it
 */
export function ThemeProvider({
  children,
  suppressHydrationWarning,
  ...props
}: ExtendedThemeProviderProps) {
  // Theme availability check and view transitions setup
  React.useEffect(() => {
    // Check for OS dark mode preference
    const isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark-theme-available', true);
    document.documentElement.classList.toggle('os-dark', isDarkOS);

    // Check for View Transitions API support
    const hasViewTransitions = Boolean('startViewTransition' in document);

    if (hasViewTransitions) {
      document.documentElement.classList.add('has-view-transitions');
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      // Only disable transitions if view transitions API is not supported
      disableTransitionOnChange={!('startViewTransition' in document)}
      {...props}
    >
      {suppressHydrationWarning ? (
        <div suppressHydrationWarning>{children}</div>
      ) : (
        children
      )}
    </NextThemesProvider>
  );
}
