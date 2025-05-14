'use client';

import * as React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { motion, AnimatePresence } from 'framer-motion';
import { ClientIcon } from '@/components/client-icon';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [debouncedValue] = useDebounce(value, 300);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleClear = () => {
    setValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Keyboard shortcut to focus search (cmd+k or ctrl+k)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full">
      <div className="relative">
        {' '}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: focused ? 1.01 : 1 }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Enhanced glass effect container with better visual feedback */}
          <div
            className={`
              relative flex h-14 items-center overflow-hidden rounded-xl
              bg-white dark:bg-zinc-900/80 border backdrop-blur-sm transition-all duration-300
              ${
                focused
                  ? 'shadow-lg ring-2 ring-primary/30 border-primary/30'
                  : 'shadow-md hover:shadow-lg hover:border-primary/20'
              }
            `}
          >
            {' '}
            {/* Search icon with animation */}
            <motion.div
              animate={{
                scale: focused ? 1.1 : 1,
              }}
              transition={{ duration: 0.3, type: 'spring' }}
              className={`ml-5 ${
                focused ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <ClientIcon icon={Search} className="h-5 w-5 transition-colors" />
            </motion.div>
            {/* Search input with improved styling */}
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search icons by name, category, or keyword... (Ctrl+K)"
              aria-label="Search icons"
              className="flex-1 bg-transparent border-none px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-0"
              spellCheck="false"
              autoComplete="off"
            />
            {/* Filter button with enhanced styling */}
            <div className="flex items-center h-full">
              <AnimatePresence>
                {!value && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="mx-2 border-l dark:border-zinc-700 h-6"
                  />
                )}
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 mr-2 rounded-lg flex items-center gap-1 text-sm font-medium
                  ${
                    focused
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
              >
                <ClientIcon icon={Filter} className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Filter</span>
              </motion.button>
            </div>
            {/* Clear button with enhanced animation */}
            <AnimatePresence>
              {value && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="mr-4 rounded-full p-1.5 hover:bg-muted hover:text-foreground text-muted-foreground border border-transparent hover:border-border"
                >
                  <ClientIcon icon={X} className="h-4 w-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <AnimatePresence>
          {value && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute left-0 mt-3 text-sm text-primary font-medium"
            >
              <span className="inline-flex items-center gap-1.5">
                <ClientIcon icon={Search} className="h-3.5 w-3.5" />
                Searching for "{value}"
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
