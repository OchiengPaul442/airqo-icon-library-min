/**
 * Register a dynamic import function for an icon
 * @param name - Icon name
 * @param importFn - Function that returns a promise resolving to the icon
 */
export declare function registerIconImport(name: string, importFn: () => Promise<any>): void;
/**
 * Dynamically load an icon by its name
 * @param name - PascalCase icon name
 */
export declare function getIcon(name: string): Promise<any>;
/**
 * List all icon names in a given category.
 * @param category - category folder name
 */
export declare function listIconsByCategory(category: string): string[];
//# sourceMappingURL=utils.d.ts.map