'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

interface ExtendedThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
  suppressHydrationWarning?: boolean;
}

export function ThemeProvider({
  children,
  suppressHydrationWarning,
  ...props
}: ExtendedThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {suppressHydrationWarning ? (
        <div suppressHydrationWarning>{children}</div>
      ) : (
        children
      )}
    </NextThemesProvider>
  );
}
