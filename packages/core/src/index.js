"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icons = void 0;
var icon_manifest_1 = require("./icon-manifest");
// Create the icons object with type assertion
var icons = icon_manifest_1.icons.reduce(function (acc, icon) {
    acc[icon.name] = icon;
    return acc;
}, {});
exports.icons = icons;
exports.default = icons;
