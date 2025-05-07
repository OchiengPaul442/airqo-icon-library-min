import withIconProps from './withIconProps';
import type { IconNativeComponentProps } from './withIconProps';
// Import raw icons but don't use them directly - they're re-exported
import * as _ from './index';
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
