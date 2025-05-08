'use client';

import { useState } from 'react';
import { ClipboardIcon, ClipboardCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

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

  // Custom theme to match the dark/light mode
  const customStyle = {
    backgroundColor: 'transparent',
    margin: 0,
    padding: 0,
    fontFamily: 'monospace',
    fontSize: '0.9em',
    lineHeight: '1.5',
  };

  return (
    <div className="relative font-mono overflow-x-auto rounded-lg border bg-muted p-4">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 p-1 rounded hover:bg-accent z-10"
        aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
      >
        {isCopied ? (
          <ClipboardCheck className="h-4 w-4" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={customStyle}
        className="code-block"
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
