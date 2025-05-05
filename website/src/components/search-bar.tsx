'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { motion } from 'framer-motion';

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
    <div
      className={`relative transition-all duration-200 ${
        focused ? 'scale-[1.01]' : 'scale-100'
      }`}
    >
      <div
        className={`
        relative flex h-12 items-center overflow-hidden rounded-lg border bg-background transition-shadow duration-200
        ${focused ? 'shadow-md ring-1 ring-primary/20' : ''}
      `}
      >
        <Search className="ml-3 h-5 w-5 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search icons by name or category..."
          className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
        />
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="mr-2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </motion.button>
        )}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">
        {value ? (
          <span>
            Searching for: <span className="font-medium">{value}</span>
          </span>
        ) : (
          <span>Type to search for icons by name or category</span>
        )}
      </div>
    </div>
  );
}
