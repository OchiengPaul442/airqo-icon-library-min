'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Laptop, Check } from 'lucide-react';
import { motion } from 'framer-motion';

type ThemeOption = 'light' | 'dark' | 'system';

interface ThemeOptionProps {
  value: ThemeOption;
  current: string | undefined;
  onSelect: (theme: ThemeOption) => void;
}

// Individual option component for better structure
const ThemeOption = ({ value, current, onSelect }: ThemeOptionProps) => {
  const isActive = current === value;
  let icon;
  let label;

  switch (value) {
    case 'light':
      icon = <Sun className="h-4 w-4" />;
      label = 'Light';
      break;
    case 'dark':
      icon = <Moon className="h-4 w-4" />;
      label = 'Dark';
      break;
    default:
      icon = <Laptop className="h-4 w-4" />;
      label = 'System';
  }

  return (
    <button
      className={`flex w-full items-center gap-2 px-2.5 py-1.5 text-sm rounded-md transition-colors ${
        isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted/80'
      }`}
      onClick={() => onSelect(value)}
    >
      {icon}
      <span className="flex-1">{label}</span>
      {isActive && <Check className="h-3.5 w-3.5" />}
    </button>
  );
};

export function ClientThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  // Handle toggle click
  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  // Set theme and close dropdown
  const handleThemeSelect = (selectedTheme: ThemeOption) => {
    // Attempt to use View Transitions API if available
    if ('startViewTransition' in document) {
      const viewTransition = (document as any).startViewTransition(() => {
        setTheme(selectedTheme);
        setIsOpen(false);
      });
      return viewTransition;
    } else {
      setTheme(selectedTheme);
      setIsOpen(false);
    }
  };

  if (!mounted) {
    return (
      <div className="rounded-md p-2 h-10 w-10 flex items-center justify-center">
        <div className="h-5 w-5" />
      </div>
    );
  }

  // Get current theme icon
  const ThemeIcon = () => {
    if (theme === 'dark') return <Moon className="h-[18px] w-[18px]" />;
    if (theme === 'system') return <Laptop className="h-[18px] w-[18px]" />;
    return <Sun className="h-[18px] w-[18px]" />;
  };
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleToggleClick}
        className="rounded-full h-10 w-10 flex items-center justify-center bg-secondary/80 hover:bg-secondary text-primary transition-colors"
        aria-label="Toggle theme"
      >
        <ThemeIcon />
      </motion.button>

      {isOpen && (
        <div
          className="absolute right-0 top-12 z-50 min-w-[180px] bg-card border rounded-lg shadow-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-1 flex flex-col gap-1">
            <ThemeOption
              value="light"
              current={theme}
              onSelect={handleThemeSelect}
            />
            <ThemeOption
              value="dark"
              current={theme}
              onSelect={handleThemeSelect}
            />
            <ThemeOption
              value="system"
              current={theme}
              onSelect={handleThemeSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
}
