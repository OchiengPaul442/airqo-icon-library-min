'use client';

import { Highlight } from 'prism-react-renderer';
import { ClipboardIcon, ClipboardCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-4 top-4 p-1 rounded hover:bg-accent"
      >
        {isCopied ? (
          <ClipboardCheck className="h-4 w-4" />
        ) : (
          <ClipboardIcon className="h-4 w-4" />
        )}
      </button>
      <Highlight
        code={code.trim()}
        language={language}
        theme={{
          plain: {
            color: 'var(--tw-prose-code)',
            backgroundColor: 'transparent',
          },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata'],
              style: {
                color: 'var(--tw-prose-comments)',
                fontStyle: 'italic',
              },
            },
            {
              types: ['string', 'attr-value'],
              style: {
                color: 'var(--tw-prose-strings)',
              },
            },
            {
              types: ['punctuation', 'operator'],
              style: {
                color: 'var(--tw-prose-punctuation)',
              },
            },
            {
              types: [
                'entity',
                'url',
                'symbol',
                'number',
                'boolean',
                'variable',
                'constant',
                'property',
                'regex',
                'inserted',
              ],
              style: {
                color: 'var(--tw-prose-variables)',
              },
            },
            {
              types: ['atrule', 'keyword', 'attr-name'],
              style: {
                color: 'var(--tw-prose-keywords)',
              },
            },
            {
              types: ['function', 'deleted', 'tag'],
              style: {
                color: 'var(--tw-prose-functions)',
              },
            },
            {
              types: ['function-variable'],
              style: {
                color: 'var(--tw-prose-functions)',
              },
            },
            {
              types: ['tag', 'selector'],
              style: {
                color: 'var(--tw-prose-tags)',
              },
            },
            {
              types: ['tag'],
              languages: ['markup'],
              style: {
                color: 'var(--tw-prose-tags)',
              },
            },
          ],
        }}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="relative overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm"
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
