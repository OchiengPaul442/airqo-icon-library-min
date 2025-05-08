'use client';

import { useState, useEffect } from 'react';
import { ClipboardIcon, ClipboardCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast.success('Code copied to clipboard');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code to clipboard:', error);
      toast.error('Failed to copy code to clipboard');
    }
  };

  // Custom theme to match the dark/light mode with improved visibility
  const customStyle = {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
    fontFamily: 'monospace',
    fontSize: '0.9em',
    lineHeight: '1.5',
    // Enhanced contrast for better visibility in both themes
    color: currentTheme === 'dark' ? '#f8f8f2' : '#1a1a1a',
  };

  if (!mounted) {
    return (
      <div className="relative font-mono overflow-x-auto rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-4">
        <pre className="opacity-0">{code.trim()}</pre>
      </div>
    );
  }

  return (
    <div className="relative font-mono overflow-x-auto rounded-lg border border-border bg-zinc-50 dark:bg-zinc-900 p-4">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 p-1.5 rounded-md bg-background/90 hover:bg-accent/20 border border-border z-10 transition-colors"
        aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
      >
        {isCopied ? (
          <ClipboardCheck className="h-4 w-4 text-green-500" />
        ) : (
          <ClipboardIcon className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={customStyle}
        className="code-block"
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
