import withIconProps from './withIconProps';
import type { IconNativeComponentProps } from './withIconProps';
// Import raw icons for side effects only
import './index';
import enhancedIcons from './enhanceIcons';

// Export raw icons
export * from './index';

// Export enhanced icons with proper props support
export { enhancedIcons as icons };

// Export the HOC and types
export { withIconProps };
export type { IconNativeComponentProps };

// Export a default object with all enhanced icons
export default enhancedIcons;
