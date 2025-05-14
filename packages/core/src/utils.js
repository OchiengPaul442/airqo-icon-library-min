"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVG_DATA = void 0;
exports.registerIconImport = registerIconImport;
exports.getIcon = getIcon;
exports.listIconsByCategory = listIconsByCategory;
exports.getSvgContent = getSvgContent;
exports.registerSvgContent = registerSvgContent;
var icon_manifest_1 = require("./icon-manifest");
// Base map for dynamic imports - frameworks should extend this
var iconImports = {};
/**
 * Register a dynamic import function for an icon
 * @param name - Icon name
 * @param importFn - Function that returns a promise resolving to the icon
 */
function registerIconImport(name, importFn) {
    iconImports[name] = importFn;
}
/**
 * Dynamically load an icon by its name
 * @param name - PascalCase icon name
 */
function getIcon(name) {
    return __awaiter(this, void 0, void 0, function () {
        var loader;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loader = iconImports[name];
                    if (!loader) {
                        throw new Error("Icon not found: ".concat(name));
                    }
                    return [4 /*yield*/, loader()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
/**
 * List all icon names in a given category.
 * @param category - category folder name
 */
function listIconsByCategory(category) {
    return icon_manifest_1.icons
        .filter(function (icon) { return icon.category === category; })
        .map(function (icon) { return icon.name; });
}
/**
 * Get the raw SVG content for an icon
 * This is useful for downloading or copying SVG content directly
 * @param iconName - PascalCase icon name (e.g., "AlertCircle")
 * @returns Raw SVG content as string or null if not found
 */
function getSvgContent(iconName) {
    // Find the icon metadata
    var iconMeta = icon_manifest_1.icons.find(function (icon) { return icon.name === iconName; });
    if (!iconMeta) {
        console.error("Icon not found: ".concat(iconName));
        return null;
    }
    // Create the filename based on category and convention
    // Convert PascalCase to kebab-case
    var kebabName = iconName
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
        .toLowerCase();
    try {
        // Use built-in raw SVG data mapping
        // This will be populated during the build process
        return exports.SVG_DATA[iconMeta.name] || null;
    }
    catch (error) {
        console.error("Error retrieving SVG content for ".concat(iconName, ":"), error);
        return null;
    }
}
// This will be populated during build with all SVG data
// Map of icon name to raw SVG content
exports.SVG_DATA = {};
// Helper function to register SVG content
function registerSvgContent(iconName, svgContent) {
    exports.SVG_DATA[iconName] = svgContent;
}
