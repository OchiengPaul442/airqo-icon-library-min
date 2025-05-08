// Type definitions for @airqo-icons-min/core
import { IconMeta } from './icon-manifest';

// Re-export key types and functions
export * from './icon-manifest';
export * from './utils/getIconsByCategory';
export * from './types';

// Explicitly export the getIconsByCategory function
export declare function getIconsByCategory(): Record<string, IconMeta[]>;
export declare function getIconCategories(): string[];
export declare function getIconsForCategory(category: string): IconMeta[];
export declare function formatCategoryName(category: string): string;
//# sourceMappingURL=index.d.ts.map
