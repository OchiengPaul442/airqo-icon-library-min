'use client';

import * as React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public refs: {
    [key: string]: React.ReactInstance;
  };

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.refs = {};
  }

  static getDerivedStateFromError(/*error*/): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground mb-4">
            Please try refreshing the page or contact support if the problem
            persists.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
