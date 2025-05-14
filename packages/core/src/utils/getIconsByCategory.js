"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconCategories = getIconCategories;
exports.getIconsByCategory = getIconsByCategory;
exports.getIconsForCategory = getIconsForCategory;
exports.formatCategoryName = formatCategoryName;
var icon_manifest_1 = require("../icon-manifest");
/**
 * Returns all available icon categories
 * @returns Array of category names
 */
function getIconCategories() {
    var categories = new Set();
    icon_manifest_1.icons.forEach(function (icon) {
        categories.add(icon.category);
    });
    return Array.from(categories).sort();
}
/**
 * Groups all icons by their categories
 * @returns Record with categories as keys and arrays of IconMeta as values
 */
function getIconsByCategory() {
    var categorizedIcons = {};
    icon_manifest_1.icons.forEach(function (icon) {
        var category = icon.category;
        if (!categorizedIcons[category]) {
            categorizedIcons[category] = [];
        }
        categorizedIcons[category].push(icon);
    });
    // Sort icons within each category by name
    Object.keys(categorizedIcons).forEach(function (category) {
        categorizedIcons[category].sort(function (a, b) { return a.name.localeCompare(b.name); });
    });
    return categorizedIcons;
}
/**
 * Gets all icons from a specific category
 * @param category The category name to filter by
 * @returns Array of IconMeta objects for the requested category
 */
function getIconsForCategory(category) {
    return icon_manifest_1.icons
        .filter(function (icon) { return icon.category === category; })
        .sort(function (a, b) { return a.name.localeCompare(b.name); });
}
/**
 * Formats a category name for display (converts snake_case to Title Case)
 * @param category The raw category name (e.g., "alerts_feedback")
 * @returns Formatted category name (e.g., "Alerts & Feedback")
 */
function formatCategoryName(category) {
    return category
        .split('_')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' & ');
}
