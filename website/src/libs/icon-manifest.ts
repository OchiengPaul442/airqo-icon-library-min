// This file provides a local fallback for the icon manifest
// in case the imported one from the core package is not available

import { IconMeta } from '@airqo-icons-min/core';

// Define a simple placeholder for icon data
// In a real app, this would come from the package itself
export const icons: IconMeta[] = [
  // Sample icons - you can add more or import from the package if needed
  {
    name: 'AlertCircle',
    category: 'alerts_feedback',
  },
  {
    name: 'User',
    category: 'users',
  },
  // More icons would be here...
];
