'use client';

import { useState, useEffect } from 'react';

/**
 * A hook that returns whether we're on the client-side or not
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
