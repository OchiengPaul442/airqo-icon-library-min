import * as React from 'react';
import withIconProps from './withIconProps';
import type { IconProps } from './withIconProps';
import * as rawIcons from './index';

/**
 * A record of all enhanced icon components
 */
export const icons: Record<string, React.ComponentType<IconProps>> = {};

/**
 * Enhances all raw icon components with proper props handling
 */
export function enhanceIcons() {
  Object.entries(rawIcons).forEach(([name, component]) => {
    icons[name] = withIconProps(
      component as React.ForwardRefExoticComponent<
        React.SVGProps<SVGSVGElement>
      >,
    );
  });

  return icons;
}

export default enhanceIcons();
