import { icons as iconManifest } from './icon-manifest';
import type { IconBaseProps, IconProps, IconMeta } from './types';

// Create the icons object with type assertion
const icons: Record<string, IconMeta> = iconManifest.reduce(
  (acc: Record<string, IconMeta>, icon) => {
    acc[icon.name] = icon;
    return acc;
  },
  {} as Record<string, IconMeta>,
);

// Export everything
export type { IconBaseProps, IconProps, IconMeta };
export { icons };
export default icons;
