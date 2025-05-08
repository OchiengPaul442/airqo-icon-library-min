import React from 'react';
import type { IconProps } from './withIconProps';

/**
 * Wraps an icon component with 'use client' directive for Next.js support
 * Use this wrapper when you need interactive icons with event handlers in Next.js
 *
 * @example
 * import { AlertCircle } from '@airqo-icons-min/react';
 * import { ClientIcon } from '@airqo-icons-min/react/client';
 *
 * // In your component:
 * <ClientIcon icon={AlertCircle} onClick={() => alert('clicked')} />
 */
export declare const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconProps>;
  } & IconProps
>;

// Re-export everything from index
export * from './index';

// Export types
export { withIconProps } from './withIconProps';
export type { IconProps } from './withIconProps';

// Export enhanced icons
export { default as icons } from './enhanceIcons';

// Default export
export { default } from './enhanceIcons';
