'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { motion, AnimatePresence } from 'framer-motion';
import { ClientIcon } from '@airqo-icons-min/react/client';

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

  return (
    <div className="w-full">
      <div className="relative group">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: focused ? 1.01 : 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="relative overflow-hidden"
        >
          <div
            className={`
              relative flex h-14 items-center overflow-hidden rounded-xl bg-background/80 backdrop-blur-sm transition-all duration-200
              ${
                focused
                  ? 'shadow-lg ring-2 ring-primary/30'
                  : 'shadow hover:shadow-md'
              }
            `}
          >
            <ClientIcon
              icon={Search}
              className="ml-4 h-5 w-5 text-muted-foreground group-hover:text-foreground/80"
            />
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Search icons by name, category, or keyword..."
              aria-label="Search icons"
              className="flex-1 bg-transparent border-none px-4 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-0"
            />
            <AnimatePresence>
              {value && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="mr-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
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
              className="absolute left-0 mt-2 text-sm text-primary/80"
            >
              <span>
                Searching for: <span className="font-medium">{value}</span>
              </span>
            </motion.div>
          )}

          {!value && !focused && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute left-0 mt-2 text-xs text-muted-foreground"
            >
              Try searching for categories like "arrows", "charts", or icon
              names like "alert"
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
