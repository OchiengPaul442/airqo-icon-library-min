'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { ClientIcon } from '@airqo-icons-min/react/client';
import { Moon, Sun } from 'lucide-react';

export function ClientThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded-lg p-2 h-9 w-9 flex items-center justify-center">
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      <ClientIcon icon={theme === 'light' ? Moon : Sun} className="h-5 w-5" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
