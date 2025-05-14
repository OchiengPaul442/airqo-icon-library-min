import { icons as iconManifest } from './icon-manifest';
import type { IconMeta } from './icon-manifest';
import type { IconProps, IconBaseProps } from './types';

// Export types
export type { IconProps, IconBaseProps, IconMeta };

// Create the icons object with type assertion
const icons = iconManifest.reduce<Record<string, IconMeta>>((acc, icon) => {
  acc[icon.name] = icon;
  return acc;
}, {});

export { icons };
export default icons;
