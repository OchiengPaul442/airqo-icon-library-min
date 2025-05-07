'use client';

import React from 'react';
import withIconProps from './withIconProps';
import type { IconProps } from './withIconProps';
// Import raw icons but don't use them directly - they're re-exported
import * as _ from './index';
import enhancedIcons from './enhanceIcons';

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
export const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconProps>;
  } & IconProps
> = ({ icon: IconComponent, ...props }) => {
  return <IconComponent {...props} />;
};

// Export raw icons
export * from './index';

// Export enhanced icons with proper props support
export { enhancedIcons as icons };

// Export the HOC and types
export { withIconProps };
export type { IconProps };

// Export a default object with all enhanced icons
export default enhancedIcons;
