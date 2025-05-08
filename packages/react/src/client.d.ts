import React from 'react';
import { IconProps } from './withIconProps';
import enhancedIcons from './enhanceIcons';
import withIconProps from './withIconProps';

export declare const ClientIcon: React.FC<
  {
    icon: React.ComponentType<IconProps>;
  } & IconProps
>;

export * from './index';
export { enhancedIcons as icons };
export { withIconProps };
export type { IconProps };
export default enhancedIcons;
