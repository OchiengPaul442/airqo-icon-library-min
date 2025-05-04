'use client';

import React from 'react';
import { IconProps } from './types/icon';

/**
 * Wraps an icon component with 'use client' directive for Next.js support
 * Use this wrapper when you need interactive icons with event handlers in Next.js
 *
 * @example
 * import { AlertsFeedbackAlertCircle } from '@airqo-icons-min/react';
 * import { ClientIcon } from '@airqo-icons-min/react/client';
 *
 * // In your component:
 * <ClientIcon icon={AlertsFeedbackAlertCircle} onClick={() => alert('clicked')} />
 */
export const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconProps>;
  } & IconProps
> = ({ icon: IconComponent, ...props }) => {
  return <IconComponent {...props} />;
};
