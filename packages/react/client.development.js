"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.tsx
var client_exports = {};
__export(client_exports, {
  AlertCircle: () => AlertCircle_default,
  AlertHexagon: () => AlertHexagon_default,
  AlertOctagon: () => AlertOctagon_default,
  AlertSquare: () => AlertSquare_default,
  AlertTriangle: () => AlertTriangle_default,
  Announcement01: () => Announcement01_default,
  Announcement02: () => Announcement02_default,
  Announcement03: () => Announcement03_default,
  ArrowBlockDown: () => ArrowBlockDown_default,
  ArrowBlockLeft: () => ArrowBlockLeft_default,
  ArrowBlockRight: () => ArrowBlockRight_default,
  ArrowBlockUp: () => ArrowBlockUp_default,
  ArrowCircleBrokenDown: () => ArrowCircleBrokenDown_default,
  ArrowCircleBrokenDownLeft: () => ArrowCircleBrokenDownLeft_default,
  ArrowCircleBrokenDownRight: () => ArrowCircleBrokenDownRight_default,
  ArrowCircleBrokenLeft: () => ArrowCircleBrokenLeft_default,
  ArrowCircleBrokenRight: () => ArrowCircleBrokenRight_default,
  ArrowCircleBrokenUp: () => ArrowCircleBrokenUp_default,
  ArrowCircleBrokenUpLeft: () => ArrowCircleBrokenUpLeft_default,
  ArrowCircleBrokenUpRight: () => ArrowCircleBrokenUpRight_default,
  ArrowCircleDown: () => ArrowCircleDown_default,
  ArrowCircleDownLeft: () => ArrowCircleDownLeft_default,
  ArrowCircleDownRight: () => ArrowCircleDownRight_default,
  ArrowCircleLeft: () => ArrowCircleLeft_default,
  ArrowCircleRight: () => ArrowCircleRight_default,
  ArrowCircleUp: () => ArrowCircleUp_default,
  ArrowCircleUpLeft: () => ArrowCircleUpLeft_default,
  ArrowCircleUpRight: () => ArrowCircleUpRight_default,
  ArrowDown: () => ArrowDown_default,
  ArrowDownLeft: () => ArrowDownLeft_default,
  ArrowDownRight: () => ArrowDownRight_default,
  ArrowLeft: () => ArrowLeft_default,
  ArrowNarrowDown: () => ArrowNarrowDown_default,
  ArrowNarrowDownLeft: () => ArrowNarrowDownLeft_default,
  ArrowNarrowDownRight: () => ArrowNarrowDownRight_default,
  ArrowNarrowLeft: () => ArrowNarrowLeft_default,
  ArrowNarrowRight: () => ArrowNarrowRight_default,
  ArrowNarrowUp: () => ArrowNarrowUp_default,
  ArrowNarrowUpLeft: () => ArrowNarrowUpLeft_default,
  ArrowNarrowUpRight: () => ArrowNarrowUpRight_default,
  ArrowRight: () => ArrowRight_default,
  ArrowSquareDown: () => ArrowSquareDown_default,
  ArrowSquareDownLeft: () => ArrowSquareDownLeft_default,
  ArrowSquareDownRight: () => ArrowSquareDownRight_default,
  ArrowSquareLeft: () => ArrowSquareLeft_default,
  ArrowSquareRight: () => ArrowSquareRight_default,
  ArrowSquareUp: () => ArrowSquareUp_default,
  ArrowSquareUpLeft: () => ArrowSquareUpLeft_default,
  ArrowSquareUpRight: () => ArrowSquareUpRight_default,
  ArrowUp: () => ArrowUp_default,
  ArrowUpLeft: () => ArrowUpLeft_default,
  ArrowUpRight: () => ArrowUpRight_default,
  ArrowsDown: () => ArrowsDown_default,
  ArrowsLeft: () => ArrowsLeft_default,
  ArrowsRight: () => ArrowsRight_default,
  ArrowsTriangle: () => ArrowsTriangle_default,
  ArrowsUp: () => ArrowsUp_default,
  BarChart01: () => BarChart01_default,
  BarChart02: () => BarChart02_default,
  BarChart03: () => BarChart03_default,
  BarChart04: () => BarChart04_default,
  BarChart05: () => BarChart05_default,
  BarChart06: () => BarChart06_default,
  BarChart07: () => BarChart07_default,
  BarChart08: () => BarChart08_default,
  BarChart09: () => BarChart09_default,
  BarChart10: () => BarChart10_default,
  BarChart11: () => BarChart11_default,
  BarChart12: () => BarChart12_default,
  BarChartCircle01: () => BarChartCircle01_default,
  BarChartCircle02: () => BarChartCircle02_default,
  BarChartCircle03: () => BarChartCircle03_default,
  BarChartSquare01: () => BarChartSquare01_default,
  BarChartSquare02: () => BarChartSquare02_default,
  BarChartSquare03: () => BarChartSquare03_default,
  BarChartSquareDown: () => BarChartSquareDown_default,
  BarChartSquareMinus: () => BarChartSquareMinus_default,
  BarChartSquarePlus: () => BarChartSquarePlus_default,
  BarChartSquareUp: () => BarChartSquareUp_default,
  BarLineChart: () => BarLineChart_default,
  Bell01: () => Bell01_default,
  Bell02: () => Bell02_default,
  Bell03: () => Bell03_default,
  Bell04: () => Bell04_default,
  BellMinus: () => BellMinus_default,
  BellOff01: () => BellOff01_default,
  BellOff02: () => BellOff02_default,
  BellOff03: () => BellOff03_default,
  BellPlus: () => BellPlus_default,
  BellRinging01: () => BellRinging01_default,
  BellRinging02: () => BellRinging02_default,
  BellRinging03: () => BellRinging03_default,
  BellRinging04: () => BellRinging04_default,
  ChartBreakoutCircle: () => ChartBreakoutCircle_default,
  ChartBreakoutSquare: () => ChartBreakoutSquare_default,
  ChevronDown: () => ChevronDown_default,
  ChevronDownDouble: () => ChevronDownDouble_default,
  ChevronLeft: () => ChevronLeft_default,
  ChevronLeftDouble: () => ChevronLeftDouble_default,
  ChevronRight: () => ChevronRight_default,
  ChevronRightDouble: () => ChevronRightDouble_default,
  ChevronSelectorHorizontal: () => ChevronSelectorHorizontal_default,
  ChevronSelectorVertical: () => ChevronSelectorVertical_default,
  ChevronUp: () => ChevronUp_default,
  ChevronUpDouble: () => ChevronUpDouble_default,
  ClientIcon: () => ClientIcon,
  CornerDownLeft: () => CornerDownLeft_default,
  CornerDownRight: () => CornerDownRight_default,
  CornerLeftDown: () => CornerLeftDown_default,
  CornerLeftUp: () => CornerLeftUp_default,
  CornerRightDown: () => CornerRightDown_default,
  CornerRightUp: () => CornerRightUp_default,
  CornerUpLeft: () => CornerUpLeft_default,
  CornerUpRight: () => CornerUpRight_default,
  Expand01: () => Expand01_default,
  Expand02: () => Expand02_default,
  Expand03: () => Expand03_default,
  Expand04: () => Expand04_default,
  Expand05: () => Expand05_default,
  Expand06: () => Expand06_default,
  FlipBackward: () => FlipBackward_default,
  FlipForward: () => FlipForward_default,
  HorizontalBarChart01: () => HorizontalBarChart01_default,
  HorizontalBarChart02: () => HorizontalBarChart02_default,
  HorizontalBarChart03: () => HorizontalBarChart03_default,
  Infinity: () => Infinity_default,
  LineChartDown01: () => LineChartDown01_default,
  LineChartDown02: () => LineChartDown02_default,
  LineChartDown03: () => LineChartDown03_default,
  LineChartDown04: () => LineChartDown04_default,
  LineChartDown05: () => LineChartDown05_default,
  LineChartUp01: () => LineChartUp01_default,
  LineChartUp02: () => LineChartUp02_default,
  LineChartUp03: () => LineChartUp03_default,
  LineChartUp04: () => LineChartUp04_default,
  LineChartUp05: () => LineChartUp05_default,
  MessageNotificationSquare: () => MessageNotificationSquare_default,
  NotificationBox: () => NotificationBox_default,
  NotificationText: () => NotificationText_default,
  PieChart01: () => PieChart01_default,
  PieChart02: () => PieChart02_default,
  PieChart03: () => PieChart03_default,
  PieChart04: () => PieChart04_default,
  PresentationChart01: () => PresentationChart01_default,
  PresentationChart02: () => PresentationChart02_default,
  PresentationChart03: () => PresentationChart03_default,
  RefreshCcw01: () => RefreshCcw01_default,
  RefreshCcw02: () => RefreshCcw02_default,
  RefreshCcw03: () => RefreshCcw03_default,
  RefreshCcw04: () => RefreshCcw04_default,
  RefreshCcw05: () => RefreshCcw05_default,
  RefreshCw01: () => RefreshCw01_default,
  RefreshCw02: () => RefreshCw02_default,
  RefreshCw03: () => RefreshCw03_default,
  RefreshCw04: () => RefreshCw04_default,
  RefreshCw05: () => RefreshCw05_default,
  ReverseLeft: () => ReverseLeft_default,
  ReverseRight: () => ReverseRight_default,
  SwitchHorizontal01: () => SwitchHorizontal01_default,
  SwitchHorizontal02: () => SwitchHorizontal02_default,
  SwitchVertical01: () => SwitchVertical01_default,
  SwitchVertical02: () => SwitchVertical02_default,
  ThumbsDown: () => ThumbsDown_default,
  ThumbsUp: () => ThumbsUp_default,
  TrendDown01: () => TrendDown01_default,
  TrendDown02: () => TrendDown02_default,
  TrendUp01: () => TrendUp01_default,
  TrendUp02: () => TrendUp02_default,
  default: () => client_default,
  icons: () => enhanceIcons_default,
  withIconProps: () => withIconProps_default
});
module.exports = __toCommonJS(client_exports);
var import_react168 = __toESM(require("react"));

// src/withIconProps.tsx
var React = __toESM(require("react"));
function withIconProps(IconComponent) {
  const WithIconProps = React.forwardRef(
    (props, ref) => {
      const {
        size,
        color,
        stroke = color,
        fill = color,
        strokeWidth,
        width: propWidth,
        height: propHeight,
        ...restProps
      } = props;
      const width = propWidth !== void 0 ? propWidth : size;
      const height = propHeight !== void 0 ? propHeight : size;
      const mergedProps = {
        ...restProps,
        ref,
        // Only include width/height if they are defined
        ...width !== void 0 ? { width } : {},
        ...height !== void 0 ? { height } : {},
        // Apply stroke color and fill color if provided
        ...stroke ? { stroke } : {},
        ...fill ? { fill } : {},
        ...strokeWidth !== void 0 ? { strokeWidth } : {}
      };
      return /* @__PURE__ */ React.createElement(IconComponent, { ...mergedProps });
    }
  );
  WithIconProps.displayName = IconComponent.displayName ? `WithIconProps(${IconComponent.displayName})` : "WithIconProps";
  return WithIconProps;
}
var withIconProps_default = withIconProps;

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AlertCircle: () => AlertCircle_default,
  AlertHexagon: () => AlertHexagon_default,
  AlertOctagon: () => AlertOctagon_default,
  AlertSquare: () => AlertSquare_default,
  AlertTriangle: () => AlertTriangle_default,
  Announcement01: () => Announcement01_default,
  Announcement02: () => Announcement02_default,
  Announcement03: () => Announcement03_default,
  ArrowBlockDown: () => ArrowBlockDown_default,
  ArrowBlockLeft: () => ArrowBlockLeft_default,
  ArrowBlockRight: () => ArrowBlockRight_default,
  ArrowBlockUp: () => ArrowBlockUp_default,
  ArrowCircleBrokenDown: () => ArrowCircleBrokenDown_default,
  ArrowCircleBrokenDownLeft: () => ArrowCircleBrokenDownLeft_default,
  ArrowCircleBrokenDownRight: () => ArrowCircleBrokenDownRight_default,
  ArrowCircleBrokenLeft: () => ArrowCircleBrokenLeft_default,
  ArrowCircleBrokenRight: () => ArrowCircleBrokenRight_default,
  ArrowCircleBrokenUp: () => ArrowCircleBrokenUp_default,
  ArrowCircleBrokenUpLeft: () => ArrowCircleBrokenUpLeft_default,
  ArrowCircleBrokenUpRight: () => ArrowCircleBrokenUpRight_default,
  ArrowCircleDown: () => ArrowCircleDown_default,
  ArrowCircleDownLeft: () => ArrowCircleDownLeft_default,
  ArrowCircleDownRight: () => ArrowCircleDownRight_default,
  ArrowCircleLeft: () => ArrowCircleLeft_default,
  ArrowCircleRight: () => ArrowCircleRight_default,
  ArrowCircleUp: () => ArrowCircleUp_default,
  ArrowCircleUpLeft: () => ArrowCircleUpLeft_default,
  ArrowCircleUpRight: () => ArrowCircleUpRight_default,
  ArrowDown: () => ArrowDown_default,
  ArrowDownLeft: () => ArrowDownLeft_default,
  ArrowDownRight: () => ArrowDownRight_default,
  ArrowLeft: () => ArrowLeft_default,
  ArrowNarrowDown: () => ArrowNarrowDown_default,
  ArrowNarrowDownLeft: () => ArrowNarrowDownLeft_default,
  ArrowNarrowDownRight: () => ArrowNarrowDownRight_default,
  ArrowNarrowLeft: () => ArrowNarrowLeft_default,
  ArrowNarrowRight: () => ArrowNarrowRight_default,
  ArrowNarrowUp: () => ArrowNarrowUp_default,
  ArrowNarrowUpLeft: () => ArrowNarrowUpLeft_default,
  ArrowNarrowUpRight: () => ArrowNarrowUpRight_default,
  ArrowRight: () => ArrowRight_default,
  ArrowSquareDown: () => ArrowSquareDown_default,
  ArrowSquareDownLeft: () => ArrowSquareDownLeft_default,
  ArrowSquareDownRight: () => ArrowSquareDownRight_default,
  ArrowSquareLeft: () => ArrowSquareLeft_default,
  ArrowSquareRight: () => ArrowSquareRight_default,
  ArrowSquareUp: () => ArrowSquareUp_default,
  ArrowSquareUpLeft: () => ArrowSquareUpLeft_default,
  ArrowSquareUpRight: () => ArrowSquareUpRight_default,
  ArrowUp: () => ArrowUp_default,
  ArrowUpLeft: () => ArrowUpLeft_default,
  ArrowUpRight: () => ArrowUpRight_default,
  ArrowsDown: () => ArrowsDown_default,
  ArrowsLeft: () => ArrowsLeft_default,
  ArrowsRight: () => ArrowsRight_default,
  ArrowsTriangle: () => ArrowsTriangle_default,
  ArrowsUp: () => ArrowsUp_default,
  BarChart01: () => BarChart01_default,
  BarChart02: () => BarChart02_default,
  BarChart03: () => BarChart03_default,
  BarChart04: () => BarChart04_default,
  BarChart05: () => BarChart05_default,
  BarChart06: () => BarChart06_default,
  BarChart07: () => BarChart07_default,
  BarChart08: () => BarChart08_default,
  BarChart09: () => BarChart09_default,
  BarChart10: () => BarChart10_default,
  BarChart11: () => BarChart11_default,
  BarChart12: () => BarChart12_default,
  BarChartCircle01: () => BarChartCircle01_default,
  BarChartCircle02: () => BarChartCircle02_default,
  BarChartCircle03: () => BarChartCircle03_default,
  BarChartSquare01: () => BarChartSquare01_default,
  BarChartSquare02: () => BarChartSquare02_default,
  BarChartSquare03: () => BarChartSquare03_default,
  BarChartSquareDown: () => BarChartSquareDown_default,
  BarChartSquareMinus: () => BarChartSquareMinus_default,
  BarChartSquarePlus: () => BarChartSquarePlus_default,
  BarChartSquareUp: () => BarChartSquareUp_default,
  BarLineChart: () => BarLineChart_default,
  Bell01: () => Bell01_default,
  Bell02: () => Bell02_default,
  Bell03: () => Bell03_default,
  Bell04: () => Bell04_default,
  BellMinus: () => BellMinus_default,
  BellOff01: () => BellOff01_default,
  BellOff02: () => BellOff02_default,
  BellOff03: () => BellOff03_default,
  BellPlus: () => BellPlus_default,
  BellRinging01: () => BellRinging01_default,
  BellRinging02: () => BellRinging02_default,
  BellRinging03: () => BellRinging03_default,
  BellRinging04: () => BellRinging04_default,
  ChartBreakoutCircle: () => ChartBreakoutCircle_default,
  ChartBreakoutSquare: () => ChartBreakoutSquare_default,
  ChevronDown: () => ChevronDown_default,
  ChevronDownDouble: () => ChevronDownDouble_default,
  ChevronLeft: () => ChevronLeft_default,
  ChevronLeftDouble: () => ChevronLeftDouble_default,
  ChevronRight: () => ChevronRight_default,
  ChevronRightDouble: () => ChevronRightDouble_default,
  ChevronSelectorHorizontal: () => ChevronSelectorHorizontal_default,
  ChevronSelectorVertical: () => ChevronSelectorVertical_default,
  ChevronUp: () => ChevronUp_default,
  ChevronUpDouble: () => ChevronUpDouble_default,
  CornerDownLeft: () => CornerDownLeft_default,
  CornerDownRight: () => CornerDownRight_default,
  CornerLeftDown: () => CornerLeftDown_default,
  CornerLeftUp: () => CornerLeftUp_default,
  CornerRightDown: () => CornerRightDown_default,
  CornerRightUp: () => CornerRightUp_default,
  CornerUpLeft: () => CornerUpLeft_default,
  CornerUpRight: () => CornerUpRight_default,
  Expand01: () => Expand01_default,
  Expand02: () => Expand02_default,
  Expand03: () => Expand03_default,
  Expand04: () => Expand04_default,
  Expand05: () => Expand05_default,
  Expand06: () => Expand06_default,
  FlipBackward: () => FlipBackward_default,
  FlipForward: () => FlipForward_default,
  HorizontalBarChart01: () => HorizontalBarChart01_default,
  HorizontalBarChart02: () => HorizontalBarChart02_default,
  HorizontalBarChart03: () => HorizontalBarChart03_default,
  Infinity: () => Infinity_default,
  LineChartDown01: () => LineChartDown01_default,
  LineChartDown02: () => LineChartDown02_default,
  LineChartDown03: () => LineChartDown03_default,
  LineChartDown04: () => LineChartDown04_default,
  LineChartDown05: () => LineChartDown05_default,
  LineChartUp01: () => LineChartUp01_default,
  LineChartUp02: () => LineChartUp02_default,
  LineChartUp03: () => LineChartUp03_default,
  LineChartUp04: () => LineChartUp04_default,
  LineChartUp05: () => LineChartUp05_default,
  MessageNotificationSquare: () => MessageNotificationSquare_default,
  NotificationBox: () => NotificationBox_default,
  NotificationText: () => NotificationText_default,
  PieChart01: () => PieChart01_default,
  PieChart02: () => PieChart02_default,
  PieChart03: () => PieChart03_default,
  PieChart04: () => PieChart04_default,
  PresentationChart01: () => PresentationChart01_default,
  PresentationChart02: () => PresentationChart02_default,
  PresentationChart03: () => PresentationChart03_default,
  RefreshCcw01: () => RefreshCcw01_default,
  RefreshCcw02: () => RefreshCcw02_default,
  RefreshCcw03: () => RefreshCcw03_default,
  RefreshCcw04: () => RefreshCcw04_default,
  RefreshCcw05: () => RefreshCcw05_default,
  RefreshCw01: () => RefreshCw01_default,
  RefreshCw02: () => RefreshCw02_default,
  RefreshCw03: () => RefreshCw03_default,
  RefreshCw04: () => RefreshCw04_default,
  RefreshCw05: () => RefreshCw05_default,
  ReverseLeft: () => ReverseLeft_default,
  ReverseRight: () => ReverseRight_default,
  SwitchHorizontal01: () => SwitchHorizontal01_default,
  SwitchHorizontal02: () => SwitchHorizontal02_default,
  SwitchVertical01: () => SwitchVertical01_default,
  SwitchVertical02: () => SwitchVertical02_default,
  ThumbsDown: () => ThumbsDown_default,
  ThumbsUp: () => ThumbsUp_default,
  TrendDown01: () => TrendDown01_default,
  TrendDown02: () => TrendDown02_default,
  TrendUp01: () => TrendUp01_default,
  TrendUp02: () => TrendUp02_default
});

// src/icons/alerts_feedback/AlertCircle.tsx
var React2 = __toESM(require("react"));
var import_react = require("react");
var AlertCircle = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React2.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React2.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React2.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef = (0, import_react.forwardRef)(AlertCircle);
var AlertCircle_default = ForwardRef;

// src/icons/alerts_feedback/AlertHexagon.tsx
var React3 = __toESM(require("react"));
var import_react2 = require("react");
var AlertHexagon = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React3.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React3.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React3.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8v4m0 4h.01M3 7.943v8.117c0 .343 0 .514.05.667a1 1 0 0 0 .215.364c.109.118.258.201.558.368l7.4 4.11c.284.158.425.237.575.268.133.027.27.027.403 0 .15-.03.292-.11.576-.267l7.4-4.111c.3-.167.45-.25.558-.368a1 1 0 0 0 .215-.364c.05-.153.05-.324.05-.667V7.942c0-.343 0-.514-.05-.667a1 1 0 0 0-.215-.364c-.109-.118-.258-.201-.558-.368l-7.4-4.11c-.284-.158-.425-.237-.575-.268a1 1 0 0 0-.403 0c-.15.03-.292.11-.576.267l-7.4 4.111c-.3.167-.45.25-.558.368a1 1 0 0 0-.215.364C3 7.428 3 7.6 3 7.942Z" }));
var ForwardRef2 = (0, import_react2.forwardRef)(AlertHexagon);
var AlertHexagon_default = ForwardRef2;

// src/icons/alerts_feedback/AlertOctagon.tsx
var React4 = __toESM(require("react"));
var import_react3 = require("react");
var AlertOctagon = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React4.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React4.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React4.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8v4m0 4h.01M2 8.523v6.954c0 .245 0 .367.028.482a1 1 0 0 0 .12.29c.061.1.148.187.32.36l4.923 4.922c.173.173.26.26.36.322.09.054.188.095.29.12.115.027.237.027.482.027h6.954c.245 0 .367 0 .482-.028a.998.998 0 0 0 .29-.12c.1-.061.187-.148.36-.32l4.922-4.923c.173-.173.26-.26.322-.36a.998.998 0 0 0 .12-.29c.027-.115.027-.237.027-.482V8.523c0-.245 0-.367-.028-.482a.998.998 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L16.608 2.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C15.844 2 15.722 2 15.477 2H8.523c-.245 0-.367 0-.482.028a1 1 0 0 0-.29.12c-.1.061-.187.148-.36.32L2.47 7.392c-.173.173-.26.26-.322.36a1 1 0 0 0-.12.29C2 8.156 2 8.278 2 8.523Z" }));
var ForwardRef3 = (0, import_react3.forwardRef)(AlertOctagon);
var AlertOctagon_default = ForwardRef3;

// src/icons/alerts_feedback/AlertSquare.tsx
var React5 = __toESM(require("react"));
var import_react4 = require("react");
var AlertSquare = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React5.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React5.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React5.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 8v4m0 4h.01M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef4 = (0, import_react4.forwardRef)(AlertSquare);
var AlertSquare_default = ForwardRef4;

// src/icons/alerts_feedback/AlertTriangle.tsx
var React6 = __toESM(require("react"));
var import_react5 = require("react");
var AlertTriangle = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React6.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React6.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React6.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11.998 9v4m0 4h.01M10.613 3.892 2.388 18.099c-.456.788-.684 1.182-.65 1.505a1 1 0 0 0 .406.705c.263.191.718.191 1.629.191h16.45c.91 0 1.366 0 1.628-.191a1 1 0 0 0 .407-.705c.034-.323-.194-.717-.65-1.505L13.381 3.892c-.454-.785-.681-1.178-.978-1.31a1 1 0 0 0-.813 0c-.296.132-.523.525-.978 1.31Z" }));
var ForwardRef5 = (0, import_react5.forwardRef)(AlertTriangle);
var AlertTriangle_default = ForwardRef5;

// src/icons/alerts_feedback/Announcement01.tsx
var React7 = __toESM(require("react"));
var import_react6 = require("react");
var Announcement01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React7.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React7.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React7.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M22 8v4M10.25 5.5H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 7.78 2 8.62 2 10.3v1.2c0 .932 0 1.398.152 1.766a2 2 0 0 0 1.083 1.082c.367.152.833.152 1.765.152v4.25c0 .233 0 .349.01.446a2 2 0 0 0 1.794 1.795c.098.01.214.01.446.01s.348 0 .446-.01a2 2 0 0 0 1.794-1.795c.01-.097.01-.213.01-.446V14.5h.75c1.766 0 3.927.947 5.594 1.856.973.53 1.46.795 1.778.756a.946.946 0 0 0 .691-.41c.187-.262.187-.784.187-1.828V5.127c0-1.045 0-1.567-.187-1.828a.946.946 0 0 0-.691-.41c-.319-.04-.805.226-1.778.756-1.667.909-3.828 1.855-5.594 1.855Z" }));
var ForwardRef6 = (0, import_react6.forwardRef)(Announcement01);
var Announcement01_default = ForwardRef6;

// src/icons/alerts_feedback/Announcement02.tsx
var React8 = __toESM(require("react"));
var import_react7 = require("react");
var Announcement02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React8.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React8.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React8.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4 14 1.575 6.3c.044.177.066.266.092.343A2 2 0 0 0 7.4 21.994c.08.006.172.006.355.006.228 0 .343 0 .44-.009a2 2 0 0 0 1.797-1.797c.009-.097.009-.211.009-.44V5.5m8.5 8a3.5 3.5 0 1 0 0-7m-8.25-1H6.5a4.5 4.5 0 0 0 0 9h3.75c1.766 0 3.927.947 5.594 1.856.973.53 1.46.795 1.778.756a.946.946 0 0 0 .691-.41c.187-.262.187-.784.187-1.828V5.127c0-1.045 0-1.567-.187-1.828a.946.946 0 0 0-.691-.41c-.319-.04-.805.226-1.778.756-1.667.909-3.828 1.855-5.594 1.855Z" }));
var ForwardRef7 = (0, import_react7.forwardRef)(Announcement02);
var Announcement02_default = ForwardRef7;

// src/icons/alerts_feedback/Announcement03.tsx
var React9 = __toESM(require("react"));
var import_react8 = require("react");
var Announcement03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React9.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React9.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React9.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18.5 16c1.933 0 3.5-2.91 3.5-6.5S20.433 3 18.5 3m0 13c-1.933 0-3.5-2.91-3.5-6.5S16.567 3 18.5 3m0 13L5.444 13.626c-.928-.168-1.392-.253-1.767-.437a3 3 0 0 1-1.563-1.873C2 10.914 2 10.443 2 9.5c0-.943 0-1.414.114-1.816a3 3 0 0 1 1.563-1.873c.375-.184.839-.268 1.767-.437L18.5 3M5 14l.394 5.514c.037.524.056.785.17.984a1 1 0 0 0 .432.402c.206.1.469.1.994.1h1.782c.6 0 .9 0 1.123-.12a1 1 0 0 0 .44-.474c.101-.231.079-.53.032-1.129L10 14.5" }));
var ForwardRef8 = (0, import_react8.forwardRef)(Announcement03);
var Announcement03_default = ForwardRef8;

// src/icons/arrows/ArrowBlockDown.tsx
var React10 = __toESM(require("react"));
var import_react9 = require("react");
var ArrowBlockDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React10.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React10.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React10.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 3.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.219C9.38 3 9.52 3 9.8 3h4.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C15 3.38 15 3.52 15 3.8V14h4l-7 7-7-7h4V3.8Z" }));
var ForwardRef9 = (0, import_react9.forwardRef)(ArrowBlockDown);
var ArrowBlockDown_default = ForwardRef9;

// src/icons/arrows/ArrowBlockLeft.tsx
var React11 = __toESM(require("react"));
var import_react10 = require("react");
var ArrowBlockLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React11.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React11.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React11.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m3 12 7-7v4h10.2c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C21 9.38 21 9.52 21 9.8v4.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C20.62 15 20.48 15 20.2 15H10v4l-7-7Z" }));
var ForwardRef10 = (0, import_react10.forwardRef)(ArrowBlockLeft);
var ArrowBlockLeft_default = ForwardRef10;

// src/icons/arrows/ArrowBlockRight.tsx
var React12 = __toESM(require("react"));
var import_react11 = require("react");
var ArrowBlockRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React12.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React12.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React12.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m21 12-7-7v4H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C3 9.38 3 9.52 3 9.8v4.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 15 3.52 15 3.8 15H14v4l7-7Z" }));
var ForwardRef11 = (0, import_react11.forwardRef)(ArrowBlockRight);
var ArrowBlockRight_default = ForwardRef11;

// src/icons/arrows/ArrowBlockUp.tsx
var React13 = __toESM(require("react"));
var import_react12 = require("react");
var ArrowBlockUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React13.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React13.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React13.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.8 21c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C9 20.62 9 20.48 9 20.2V10H5l7-7 7 7h-4v10.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C14.62 21 14.48 21 14.2 21H9.8Z" }));
var ForwardRef12 = (0, import_react12.forwardRef)(ArrowBlockUp);
var ArrowBlockUp_default = ForwardRef12;

// src/icons/arrows/ArrowCircleBrokenDown.tsx
var React14 = __toESM(require("react"));
var import_react13 = require("react");
var ArrowCircleBrokenDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React14.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React14.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React14.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 3.338A9.996 9.996 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.996 9.996 0 0 1 5-8.662M8 12l4 4m0 0 4-4m-4 4V2" }));
var ForwardRef13 = (0, import_react13.forwardRef)(ArrowCircleBrokenDown);
var ArrowCircleBrokenDown_default = ForwardRef13;

// src/icons/arrows/ArrowCircleBrokenDownLeft.tsx
var React15 = __toESM(require("react"));
var import_react14 = require("react");
var ArrowCircleBrokenDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React15.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React15.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React15.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 9v6m0 0h6m-6 0L19 5m2.66 4.41a9.996 9.996 0 0 1-2.589 9.661c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142a9.996 9.996 0 0 1 9.66-2.59" }));
var ForwardRef14 = (0, import_react14.forwardRef)(ArrowCircleBrokenDownLeft);
var ArrowCircleBrokenDownLeft_default = ForwardRef14;

// src/icons/arrows/ArrowCircleBrokenDownRight.tsx
var React16 = __toESM(require("react"));
var import_react15 = require("react");
var ArrowCircleBrokenDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React16.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React16.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React16.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.41 2.34a9.996 9.996 0 0 1 9.661 2.589c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0a9.996 9.996 0 0 1-2.59-9.66M15 9v6m0 0H9m6 0L5 5" }));
var ForwardRef15 = (0, import_react15.forwardRef)(ArrowCircleBrokenDownRight);
var ArrowCircleBrokenDownRight_default = ForwardRef15;

// src/icons/arrows/ArrowCircleBrokenLeft.tsx
var React17 = __toESM(require("react"));
var import_react16 = require("react");
var ArrowCircleBrokenLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React17.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React17.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React17.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20.662 17A9.996 9.996 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.996 9.996 0 0 1 8.662 5M12 8l-4 4m0 0 4 4m-4-4h14" }));
var ForwardRef16 = (0, import_react16.forwardRef)(ArrowCircleBrokenLeft);
var ArrowCircleBrokenLeft_default = ForwardRef16;

// src/icons/arrows/ArrowCircleBrokenRight.tsx
var React18 = __toESM(require("react"));
var import_react17 = require("react");
var ArrowCircleBrokenRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React18.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React18.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React18.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.338 7A9.996 9.996 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.996 9.996 0 0 1-8.662-5M12 16l4-4m0 0-4-4m4 4H2" }));
var ForwardRef17 = (0, import_react17.forwardRef)(ArrowCircleBrokenRight);
var ArrowCircleBrokenRight_default = ForwardRef17;

// src/icons/arrows/ArrowCircleBrokenUp.tsx
var React19 = __toESM(require("react"));
var import_react18 = require("react");
var ArrowCircleBrokenUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React19.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React19.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React19.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 20.662A9.996 9.996 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.996 9.996 0 0 1-5 8.662M16 12l-4-4m0 0-4 4m4-4v14" }));
var ForwardRef18 = (0, import_react18.forwardRef)(ArrowCircleBrokenUp);
var ArrowCircleBrokenUp_default = ForwardRef18;

// src/icons/arrows/ArrowCircleBrokenUpLeft.tsx
var React20 = __toESM(require("react"));
var import_react19 = require("react");
var ArrowCircleBrokenUpLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React20.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React20.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React20.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.59 21.66a9.996 9.996 0 0 1-9.661-2.589c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0a9.996 9.996 0 0 1 2.59 9.66M9 15V9m0 0h6M9 9l10 10" }));
var ForwardRef19 = (0, import_react19.forwardRef)(ArrowCircleBrokenUpLeft);
var ArrowCircleBrokenUpLeft_default = ForwardRef19;

// src/icons/arrows/ArrowCircleBrokenUpRight.tsx
var React21 = __toESM(require("react"));
var import_react20 = require("react");
var ArrowCircleBrokenUpRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React21.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React21.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React21.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2.34 14.59a9.996 9.996 0 0 1 2.589-9.661c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142a9.996 9.996 0 0 1-9.66 2.59M15 15V9m0 0H9m6 0L5 19" }));
var ForwardRef20 = (0, import_react20.forwardRef)(ArrowCircleBrokenUpRight);
var ArrowCircleBrokenUpRight_default = ForwardRef20;

// src/icons/arrows/ArrowCircleDown.tsx
var React22 = __toESM(require("react"));
var import_react21 = require("react");
var ArrowCircleDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React22.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React22.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React22.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m8 12 4 4m0 0 4-4m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef21 = (0, import_react21.forwardRef)(ArrowCircleDown);
var ArrowCircleDown_default = ForwardRef21;

// src/icons/arrows/ArrowCircleDownLeft.tsx
var React23 = __toESM(require("react"));
var import_react22 = require("react");
var ArrowCircleDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React23.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React23.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React23.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 9v6m0 0h6m-6 0 6-6m7 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef22 = (0, import_react22.forwardRef)(ArrowCircleDownLeft);
var ArrowCircleDownLeft_default = ForwardRef22;

// src/icons/arrows/ArrowCircleDownRight.tsx
var React24 = __toESM(require("react"));
var import_react23 = require("react");
var ArrowCircleDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React24.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React24.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React24.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 9v6m0 0H9m6 0L9 9m13 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef23 = (0, import_react23.forwardRef)(ArrowCircleDownRight);
var ArrowCircleDownRight_default = ForwardRef23;

// src/icons/arrows/ArrowCircleLeft.tsx
var React25 = __toESM(require("react"));
var import_react24 = require("react");
var ArrowCircleLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React25.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React25.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React25.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 8-4 4m0 0 4 4m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef24 = (0, import_react24.forwardRef)(ArrowCircleLeft);
var ArrowCircleLeft_default = ForwardRef24;

// src/icons/arrows/ArrowCircleRight.tsx
var React26 = __toESM(require("react"));
var import_react25 = require("react");
var ArrowCircleRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React26.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React26.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React26.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 16 4-4m0 0-4-4m4 4H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef25 = (0, import_react25.forwardRef)(ArrowCircleRight);
var ArrowCircleRight_default = ForwardRef25;

// src/icons/arrows/ArrowCircleUp.tsx
var React27 = __toESM(require("react"));
var import_react26 = require("react");
var ArrowCircleUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React27.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React27.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React27.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m16 12-4-4m0 0-4 4m4-4v8m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef26 = (0, import_react26.forwardRef)(ArrowCircleUp);
var ArrowCircleUp_default = ForwardRef26;

// src/icons/arrows/ArrowCircleUpLeft.tsx
var React28 = __toESM(require("react"));
var import_react27 = require("react");
var ArrowCircleUpLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React28.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React28.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React28.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 15V9m0 0h6M9 9l6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef27 = (0, import_react27.forwardRef)(ArrowCircleUpLeft);
var ArrowCircleUpLeft_default = ForwardRef27;

// src/icons/arrows/ArrowCircleUpRight.tsx
var React29 = __toESM(require("react"));
var import_react28 = require("react");
var ArrowCircleUpRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React29.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React29.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React29.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 15V9m0 0H9m6 0-6 6m13-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef28 = (0, import_react28.forwardRef)(ArrowCircleUpRight);
var ArrowCircleUpRight_default = ForwardRef28;

// src/icons/arrows/ArrowDown.tsx
var React30 = __toESM(require("react"));
var import_react29 = require("react");
var ArrowDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React30.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React30.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React30.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 5v14m0 0 7-7m-7 7-7-7" }));
var ForwardRef29 = (0, import_react29.forwardRef)(ArrowDown);
var ArrowDown_default = ForwardRef29;

// src/icons/arrows/ArrowDownLeft.tsx
var React31 = __toESM(require("react"));
var import_react30 = require("react");
var ArrowDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React31.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React31.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React31.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 7 7 17m0 0h10M7 17V7" }));
var ForwardRef30 = (0, import_react30.forwardRef)(ArrowDownLeft);
var ArrowDownLeft_default = ForwardRef30;

// src/icons/arrows/ArrowDownRight.tsx
var React32 = __toESM(require("react"));
var import_react31 = require("react");
var ArrowDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React32.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React32.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React32.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7 7 10 10m0 0V7m0 10H7" }));
var ForwardRef31 = (0, import_react31.forwardRef)(ArrowDownRight);
var ArrowDownRight_default = ForwardRef31;

// src/icons/arrows/ArrowLeft.tsx
var React33 = __toESM(require("react"));
var import_react32 = require("react");
var ArrowLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React33.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React33.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React33.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M19 12H5m0 0 7 7m-7-7 7-7" }));
var ForwardRef32 = (0, import_react32.forwardRef)(ArrowLeft);
var ArrowLeft_default = ForwardRef32;

// src/icons/arrows/ArrowNarrowDown.tsx
var React34 = __toESM(require("react"));
var import_react33 = require("react");
var ArrowNarrowDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React34.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React34.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React34.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 4v16m0 0 6-6m-6 6-6-6" }));
var ForwardRef33 = (0, import_react33.forwardRef)(ArrowNarrowDown);
var ArrowNarrowDown_default = ForwardRef33;

// src/icons/arrows/ArrowNarrowDownLeft.tsx
var React35 = __toESM(require("react"));
var import_react34 = require("react");
var ArrowNarrowDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React35.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React35.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React35.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18 6 6 18m0 0h8m-8 0v-8" }));
var ForwardRef34 = (0, import_react34.forwardRef)(ArrowNarrowDownLeft);
var ArrowNarrowDownLeft_default = ForwardRef34;

// src/icons/arrows/ArrowNarrowDownRight.tsx
var React36 = __toESM(require("react"));
var import_react35 = require("react");
var ArrowNarrowDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React36.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React36.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React36.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m6 6 12 12m0 0v-8m0 8h-8" }));
var ForwardRef35 = (0, import_react35.forwardRef)(ArrowNarrowDownRight);
var ArrowNarrowDownRight_default = ForwardRef35;

// src/icons/arrows/ArrowNarrowLeft.tsx
var React37 = __toESM(require("react"));
var import_react36 = require("react");
var ArrowNarrowLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React37.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React37.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React37.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 12H4m0 0 6 6m-6-6 6-6" }));
var ForwardRef36 = (0, import_react36.forwardRef)(ArrowNarrowLeft);
var ArrowNarrowLeft_default = ForwardRef36;

// src/icons/arrows/ArrowNarrowRight.tsx
var React38 = __toESM(require("react"));
var import_react37 = require("react");
var ArrowNarrowRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React38.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React38.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React38.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 12h16m0 0-6-6m6 6-6 6" }));
var ForwardRef37 = (0, import_react37.forwardRef)(ArrowNarrowRight);
var ArrowNarrowRight_default = ForwardRef37;

// src/icons/arrows/ArrowNarrowUp.tsx
var React39 = __toESM(require("react"));
var import_react38 = require("react");
var ArrowNarrowUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React39.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React39.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React39.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 20V4m0 0-6 6m6-6 6 6" }));
var ForwardRef38 = (0, import_react38.forwardRef)(ArrowNarrowUp);
var ArrowNarrowUp_default = ForwardRef38;

// src/icons/arrows/ArrowNarrowUpLeft.tsx
var React40 = __toESM(require("react"));
var import_react39 = require("react");
var ArrowNarrowUpLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React40.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React40.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React40.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18 18 6 6m0 0v8m0-8h8" }));
var ForwardRef39 = (0, import_react39.forwardRef)(ArrowNarrowUpLeft);
var ArrowNarrowUpLeft_default = ForwardRef39;

// src/icons/arrows/ArrowNarrowUpRight.tsx
var React41 = __toESM(require("react"));
var import_react40 = require("react");
var ArrowNarrowUpRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React41.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React41.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React41.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M6 18 18 6m0 0h-8m8 0v8" }));
var ForwardRef40 = (0, import_react40.forwardRef)(ArrowNarrowUpRight);
var ArrowNarrowUpRight_default = ForwardRef40;

// src/icons/arrows/ArrowRight.tsx
var React42 = __toESM(require("react"));
var import_react41 = require("react");
var ArrowRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React42.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React42.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React42.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M5 12h14m0 0-7-7m7 7-7 7" }));
var ForwardRef41 = (0, import_react41.forwardRef)(ArrowRight);
var ArrowRight_default = ForwardRef41;

// src/icons/arrows/ArrowSquareDown.tsx
var React43 = __toESM(require("react"));
var import_react42 = require("react");
var ArrowSquareDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React43.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React43.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React43.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m8 12 4 4m0 0 4-4m-4 4V8M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef42 = (0, import_react42.forwardRef)(ArrowSquareDown);
var ArrowSquareDown_default = ForwardRef42;

// src/icons/arrows/ArrowSquareDownLeft.tsx
var React44 = __toESM(require("react"));
var import_react43 = require("react");
var ArrowSquareDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React44.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React44.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React44.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 9v6m0 0h6m-6 0 6-6M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef43 = (0, import_react43.forwardRef)(ArrowSquareDownLeft);
var ArrowSquareDownLeft_default = ForwardRef43;

// src/icons/arrows/ArrowSquareDownRight.tsx
var React45 = __toESM(require("react"));
var import_react44 = require("react");
var ArrowSquareDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React45.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React45.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React45.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 9v6m0 0H9m6 0L9 9M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef44 = (0, import_react44.forwardRef)(ArrowSquareDownRight);
var ArrowSquareDownRight_default = ForwardRef44;

// src/icons/arrows/ArrowSquareLeft.tsx
var React46 = __toESM(require("react"));
var import_react45 = require("react");
var ArrowSquareLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React46.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React46.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React46.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 8-4 4m0 0 4 4m-4-4h8m-8.2 9h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef45 = (0, import_react45.forwardRef)(ArrowSquareLeft);
var ArrowSquareLeft_default = ForwardRef45;

// src/icons/arrows/ArrowSquareRight.tsx
var React47 = __toESM(require("react"));
var import_react46 = require("react");
var ArrowSquareRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React47.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React47.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React47.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12 16 4-4m0 0-4-4m4 4H8m-.2 9h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef46 = (0, import_react46.forwardRef)(ArrowSquareRight);
var ArrowSquareRight_default = ForwardRef46;

// src/icons/arrows/ArrowSquareUp.tsx
var React48 = __toESM(require("react"));
var import_react47 = require("react");
var ArrowSquareUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React48.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React48.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React48.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m16 12-4-4m0 0-4 4m4-4v8m-4.2 5h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef47 = (0, import_react47.forwardRef)(ArrowSquareUp);
var ArrowSquareUp_default = ForwardRef47;

// src/icons/arrows/ArrowSquareUpLeft.tsx
var React49 = __toESM(require("react"));
var import_react48 = require("react");
var ArrowSquareUpLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React49.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React49.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React49.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 15V9m0 0h6M9 9l6 6m-7.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef48 = (0, import_react48.forwardRef)(ArrowSquareUpLeft);
var ArrowSquareUpLeft_default = ForwardRef48;

// src/icons/arrows/ArrowSquareUpRight.tsx
var React50 = __toESM(require("react"));
var import_react49 = require("react");
var ArrowSquareUpRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React50.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React50.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React50.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 15V9m0 0H9m6 0-6 6m-1.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef49 = (0, import_react49.forwardRef)(ArrowSquareUpRight);
var ArrowSquareUpRight_default = ForwardRef49;

// src/icons/arrows/ArrowUp.tsx
var React51 = __toESM(require("react"));
var import_react50 = require("react");
var ArrowUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React51.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React51.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React51.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 19V5m0 0-7 7m7-7 7 7" }));
var ForwardRef50 = (0, import_react50.forwardRef)(ArrowUp);
var ArrowUp_default = ForwardRef50;

// src/icons/arrows/ArrowUpLeft.tsx
var React52 = __toESM(require("react"));
var import_react51 = require("react");
var ArrowUpLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React52.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React52.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React52.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 17 7 7m0 0v10M7 7h10" }));
var ForwardRef51 = (0, import_react51.forwardRef)(ArrowUpLeft);
var ArrowUpLeft_default = ForwardRef51;

// src/icons/arrows/ArrowUpRight.tsx
var React53 = __toESM(require("react"));
var import_react52 = require("react");
var ArrowUpRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React53.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React53.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React53.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 17 17 7m0 0H7m10 0v10" }));
var ForwardRef52 = (0, import_react52.forwardRef)(ArrowUpRight);
var ArrowUpRight_default = ForwardRef52;

// src/icons/arrows/ArrowsDown.tsx
var React54 = __toESM(require("react"));
var import_react53 = require("react");
var ArrowsDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React54.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React54.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React54.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 4v11m0 0-4-4m4 4 4-4M7 4v16m0 0-4-4m4 4 4-4" }));
var ForwardRef53 = (0, import_react53.forwardRef)(ArrowsDown);
var ArrowsDown_default = ForwardRef53;

// src/icons/arrows/ArrowsLeft.tsx
var React55 = __toESM(require("react"));
var import_react54 = require("react");
var ArrowsLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React55.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React55.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React55.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 17H4m0 0 4 4m-4-4 4-4m12-6H9m0 0 4 4M9 7l4-4" }));
var ForwardRef54 = (0, import_react54.forwardRef)(ArrowsLeft);
var ArrowsLeft_default = ForwardRef54;

// src/icons/arrows/ArrowsRight.tsx
var React56 = __toESM(require("react"));
var import_react55 = require("react");
var ArrowsRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React56.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React56.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React56.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 7h11m0 0-4 4m4-4-4-4M4 17h16m0 0-4 4m4-4-4-4" }));
var ForwardRef55 = (0, import_react55.forwardRef)(ArrowsRight);
var ArrowsRight_default = ForwardRef55;

// src/icons/arrows/ArrowsTriangle.tsx
var React57 = __toESM(require("react"));
var import_react56 = require("react");
var ArrowsTriangle = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React57.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React57.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React57.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13 19h4.294c1.865 0 2.798 0 3.328-.39a2 2 0 0 0 .804-1.435c.058-.656-.429-1.452-1.401-3.043l-.997-1.631M6.13 10.606l-2.155 3.526c-.972 1.591-1.459 2.387-1.401 3.043a2 2 0 0 0 .804 1.435c.53.39 1.463.39 3.328.39H8.5m8.389-10L14.73 5.47c-.901-1.48-1.353-2.217-1.935-2.47a2 2 0 0 0-1.59 0c-.581.252-1.033.99-1.935 2.468L8.25 7.137M18 5.001l-1.098 4.098L12.804 8M2 11.599 6.098 10.5l1.098 4.098M15.5 22l-3-3 3-3" }));
var ForwardRef56 = (0, import_react56.forwardRef)(ArrowsTriangle);
var ArrowsTriangle_default = ForwardRef56;

// src/icons/arrows/ArrowsUp.tsx
var React58 = __toESM(require("react"));
var import_react57 = require("react");
var ArrowsUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React58.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React58.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React58.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 20V4m0 0L3 8m4-4 4 4m6 12V9m0 0-4 4m4-4 4 4" }));
var ForwardRef57 = (0, import_react57.forwardRef)(ArrowsUp);
var ArrowsUp_default = ForwardRef57;

// src/icons/charts/BarChart01.tsx
var React59 = __toESM(require("react"));
var import_react58 = require("react");
var BarChart01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React59.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React59.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React59.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18 23V13m-6 10V7M6 23v-6" }));
var ForwardRef58 = (0, import_react58.forwardRef)(BarChart01);
var BarChart01_default = ForwardRef58;

// src/icons/charts/BarChart02.tsx
var React60 = __toESM(require("react"));
var import_react59 = require("react");
var BarChart02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React60.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React60.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React60.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18 20V4M6 20v-4m6 4V10" }));
var ForwardRef59 = (0, import_react59.forwardRef)(BarChart02);
var BarChart02_default = ForwardRef59;

// src/icons/charts/BarChart03.tsx
var React61 = __toESM(require("react"));
var import_react60 = require("react");
var BarChart03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React61.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React61.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React61.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M6 20V4m12 16v-4m-6 4V10" }));
var ForwardRef60 = (0, import_react60.forwardRef)(BarChart03);
var BarChart03_default = ForwardRef60;

// src/icons/charts/BarChart04.tsx
var React62 = __toESM(require("react"));
var import_react61 = require("react");
var BarChart04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React62.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React62.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React62.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 11v10m12-10v10M9 3v18M21 3v18" }));
var ForwardRef61 = (0, import_react61.forwardRef)(BarChart04);
var BarChart04_default = ForwardRef61;

// src/icons/charts/BarChart05.tsx
var React63 = __toESM(require("react"));
var import_react62 = require("react");
var BarChart05 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React63.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React63.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React63.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 17v4M15 8v13m-6-8v8M21 3v18" }));
var ForwardRef62 = (0, import_react62.forwardRef)(BarChart05);
var BarChart05_default = ForwardRef62;

// src/icons/charts/BarChart06.tsx
var React64 = __toESM(require("react"));
var import_react63 = require("react");
var BarChart06 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React64.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React64.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React64.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 8v13m12-4v4M3 3v18m12-8v8" }));
var ForwardRef63 = (0, import_react63.forwardRef)(BarChart06);
var BarChart06_default = ForwardRef63;

// src/icons/charts/BarChart07.tsx
var React65 = __toESM(require("react"));
var import_react64 = require("react");
var BarChart07 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React65.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React65.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React65.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V3m4 7.5v7m4.5-12v12m4.5-7v7m4.5-12v12" }));
var ForwardRef64 = (0, import_react64.forwardRef)(BarChart07);
var BarChart07_default = ForwardRef64;

// src/icons/charts/BarChart08.tsx
var React66 = __toESM(require("react"));
var import_react65 = require("react");
var BarChart08 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React66.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React66.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React66.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V3m4 11.5v3m4.5-6v6m4.5-9v9m4.5-12v12" }));
var ForwardRef65 = (0, import_react65.forwardRef)(BarChart08);
var BarChart08_default = ForwardRef65;

// src/icons/charts/BarChart09.tsx
var React67 = __toESM(require("react"));
var import_react66 = require("react");
var BarChart09 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React67.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React67.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React67.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V3m4 2.5v12m4.5-9v9m4.5-6v6m4.5-3v3" }));
var ForwardRef66 = (0, import_react66.forwardRef)(BarChart09);
var BarChart09_default = ForwardRef66;

// src/icons/charts/BarChart10.tsx
var React68 = __toESM(require("react"));
var import_react67 = require("react");
var BarChart10 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React68.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React68.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React68.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 7H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 7.76 3 8.04 3 8.6v10.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H9m0 0h6m-6 0V4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 3 10.04 3 10.6 3h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 3.76 15 4.04 15 4.6V21m0-10h4.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 21 19.96 21 19.4 21H15" }));
var ForwardRef67 = (0, import_react67.forwardRef)(BarChart10);
var BarChart10_default = ForwardRef67;

// src/icons/charts/BarChart11.tsx
var React69 = __toESM(require("react"));
var import_react68 = require("react");
var BarChart11 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React69.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React69.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React69.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 3 4.04 3 4.6 3h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C9 3.76 9 4.04 9 4.6V7m0 14h6m-6 0V7m0 0h4.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 7.76 15 8.04 15 8.6V21m0-10h4.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 21 19.96 21 19.4 21H15" }));
var ForwardRef68 = (0, import_react68.forwardRef)(BarChart11);
var BarChart11_default = ForwardRef68;

// src/icons/charts/BarChart12.tsx
var React70 = __toESM(require("react"));
var import_react69 = require("react");
var BarChart12 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React70.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React70.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React70.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 12H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 12.76 3 13.04 3 13.6v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H9m0 0h6m-6 0V8.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 7 10.04 7 10.6 7h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 7.76 15 8.04 15 8.6V21m0 0h4.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 3 19.96 3 19.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 3.76 15 4.04 15 4.6V8" }));
var ForwardRef69 = (0, import_react69.forwardRef)(BarChart12);
var BarChart12_default = ForwardRef69;

// src/icons/charts/BarChartCircle01.tsx
var React71 = __toESM(require("react"));
var import_react70 = require("react");
var BarChartCircle01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React71.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React71.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React71.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 13v4m8-6v6M12 7v10m10-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef70 = (0, import_react70.forwardRef)(BarChartCircle01);
var BarChartCircle01_default = ForwardRef70;

// src/icons/charts/BarChartCircle02.tsx
var React72 = __toESM(require("react"));
var import_react71 = require("react");
var BarChartCircle02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React72.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React72.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React72.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React72.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 18v2m4-6v6m4-10v10m6-5c0 5.523-4.477 10-10 10S2 20.523 2 15 6.477 5 12 5s10 4.477 10 10Z" })), /* @__PURE__ */ React72.createElement("defs", null, /* @__PURE__ */ React72.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React72.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }))));
var ForwardRef71 = (0, import_react71.forwardRef)(BarChartCircle02);
var BarChartCircle02_default = ForwardRef71;

// src/icons/charts/BarChartCircle03.tsx
var React73 = __toESM(require("react"));
var import_react72 = require("react");
var BarChartCircle03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React73.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React73.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React73.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 7v10m4-6v6m4-2v2m6-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef72 = (0, import_react72.forwardRef)(BarChartCircle03);
var BarChartCircle03_default = ForwardRef72;

// src/icons/charts/BarChartSquare01.tsx
var React74 = __toESM(require("react"));
var import_react73 = require("react");
var BarChartSquare01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React74.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React74.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React74.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 13v4m8-6v6M12 7v10m-4.2 4h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef73 = (0, import_react73.forwardRef)(BarChartSquare01);
var BarChartSquare01_default = ForwardRef73;

// src/icons/charts/BarChartSquare02.tsx
var React75 = __toESM(require("react"));
var import_react74 = require("react");
var BarChartSquare02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React75.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React75.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React75.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 15v2m4-6v6m4-10v10m-8.2 4h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef74 = (0, import_react74.forwardRef)(BarChartSquare02);
var BarChartSquare02_default = ForwardRef74;

// src/icons/charts/BarChartSquare03.tsx
var React76 = __toESM(require("react"));
var import_react75 = require("react");
var BarChartSquare03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React76.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React76.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React76.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 7v10m4-6v6m4-2v2m-8.2 4h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef75 = (0, import_react75.forwardRef)(BarChartSquare03);
var BarChartSquare03_default = ForwardRef75;

// src/icons/charts/BarChartSquareDown.tsx
var React77 = __toESM(require("react"));
var import_react76 = require("react");
var BarChartSquareDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React77.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React77.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React77.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3h4.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V12m5 1v4m8-6v6M12 7v10M2 5l3 3m0 0 3-3M5 8V2" }));
var ForwardRef76 = (0, import_react76.forwardRef)(BarChartSquareDown);
var BarChartSquareDown_default = ForwardRef76;

// src/icons/charts/BarChartSquareMinus.tsx
var React78 = __toESM(require("react"));
var import_react77 = require("react");
var BarChartSquareMinus = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React78.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React78.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React78.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3h4.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V12m5 1v4m8-6v6M12 7v10M2 5h6" }));
var ForwardRef77 = (0, import_react77.forwardRef)(BarChartSquareMinus);
var BarChartSquareMinus_default = ForwardRef77;

// src/icons/charts/BarChartSquarePlus.tsx
var React79 = __toESM(require("react"));
var import_react78 = require("react");
var BarChartSquarePlus = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React79.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React79.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React79.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3h4.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V12m5 1v4m8-6v6M12 7v10M5 8V2M2 5h6" }));
var ForwardRef78 = (0, import_react78.forwardRef)(BarChartSquarePlus);
var BarChartSquarePlus_default = ForwardRef78;

// src/icons/charts/BarChartSquareUp.tsx
var React80 = __toESM(require("react"));
var import_react79 = require("react");
var BarChartSquareUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React80.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React80.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React80.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 3h4.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V12m5 1v4m8-6v6M12 7v10M2 5l3-3m0 0 3 3M5 2v6" }));
var ForwardRef79 = (0, import_react79.forwardRef)(BarChartSquareUp);
var BarChartSquareUp_default = ForwardRef79;

// src/icons/charts/BarLineChart.tsx
var React81 = __toESM(require("react"));
var import_react80 = require("react");
var BarLineChart = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React81.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React81.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React81.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 20v-7m-8 7V10M4 20v-4m9.407-10.973 5.168 1.939M10.8 5.4 5.2 9.6m15.86-3.16a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Zm-16 3a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12Zm8-6a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z" }));
var ForwardRef80 = (0, import_react80.forwardRef)(BarLineChart);
var BarLineChart_default = ForwardRef80;

// src/icons/alerts_feedback/Bell01.tsx
var React82 = __toESM(require("react"));
var import_react81 = require("react");
var Bell01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React82.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React82.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React82.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.355 21c.705.622 1.631 1 2.646 1a3.99 3.99 0 0 0 2.646-1M18 8A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.185-.179.2-.361.014-.165-.353-.755-1.088-1.936C18.78 13.206 18 11.09 18 8Z" }));
var ForwardRef81 = (0, import_react81.forwardRef)(Bell01);
var Bell01_default = ForwardRef81;

// src/icons/alerts_feedback/Bell02.tsx
var React83 = __toESM(require("react"));
var import_react82 = require("react");
var Bell02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React83.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React83.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React83.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14 21h-4m8-13A6 6 0 0 0 6 8c0 3.09-.779 5.206-1.65 6.605-.734 1.18-1.101 1.771-1.088 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.185-.179.2-.361.014-.165-.353-.755-1.088-1.936-.87-1.399-1.65-3.515-1.65-6.605Z" }));
var ForwardRef82 = (0, import_react82.forwardRef)(Bell02);
var Bell02_default = ForwardRef82;

// src/icons/alerts_feedback/Bell03.tsx
var React84 = __toESM(require("react"));
var import_react83 = require("react");
var Bell03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React84.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React84.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React84.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.999 19a3 3 0 1 1-6 0m4.796-12.761a2.5 2.5 0 1 0-3.593 0M18 11.2c0-1.38-.632-2.702-1.758-3.677C15.116 6.548 13.59 6 12 6c-1.592 0-3.118.548-4.243 1.523C6.631 8.498 6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.051.244.202.355.132.096.794.096 2.119.096H18.14c1.324 0 1.987 0 2.118-.096.151-.11.185-.17.203-.355.016-.163-.387-.843-1.191-2.204-.706-1.194-1.272-2.863-1.272-5.145Z" }));
var ForwardRef83 = (0, import_react83.forwardRef)(Bell03);
var Bell03_default = ForwardRef83;

// src/icons/alerts_feedback/Bell04.tsx
var React85 = __toESM(require("react"));
var import_react84 = require("react");
var Bell04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React85.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React85.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React85.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.393 18.014a3 3 0 1 1-5.796 1.553M10.893 5.74a2.5 2.5 0 1 0-3.47.93m8.815 2.775c-.357-1.332-1.31-2.446-2.65-3.097-1.339-.65-2.955-.785-4.492-.373-1.537.412-2.87 1.336-3.704 2.57-.834 1.232-1.102 2.674-.745 4.006.59 2.204.476 3.962.103 5.298-.426 1.523-.638 2.285-.58 2.437.065.175.113.223.287.29.152.06.792-.112 2.071-.454l11.866-3.18c1.279-.343 1.919-.514 2.021-.641.117-.146.134-.211.104-.395-.027-.162-.592-.715-1.721-1.821-.991-.97-1.97-2.436-2.56-4.64Z" }));
var ForwardRef84 = (0, import_react84.forwardRef)(Bell04);
var Bell04_default = ForwardRef84;

// src/icons/alerts_feedback/BellMinus.tsx
var React86 = __toESM(require("react"));
var import_react85 = require("react");
var BellMinus = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React86.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React86.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React86.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.355 21c.705.622 1.631 1 2.646 1a3.99 3.99 0 0 0 2.646-1M15 5h6m-8-2.916A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.935-.773-1.243-1.475-3.052-1.622-5.606" }));
var ForwardRef85 = (0, import_react85.forwardRef)(BellMinus);
var BellMinus_default = ForwardRef85;

// src/icons/alerts_feedback/BellOff01.tsx
var React87 = __toESM(require("react"));
var import_react86 = require("react");
var BellOff01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React87.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React87.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React87.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8.633 3.034A6 6 0 0 1 18 8c0 2.1.27 3.751.648 5.032M6.258 6.257A5.998 5.998 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H17m-7.646 4c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1M21 21 3 3" }));
var ForwardRef86 = (0, import_react86.forwardRef)(BellOff01);
var BellOff01_default = ForwardRef86;

// src/icons/alerts_feedback/BellOff02.tsx
var React88 = __toESM(require("react"));
var import_react87 = require("react");
var BellOff02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React88.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React88.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React88.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14 21h-4M8.633 3.034A6 6 0 0 1 18 8c0 2.1.27 3.751.648 5.032M6.258 6.257A5.998 5.998 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H17m4 4L3 3" }));
var ForwardRef87 = (0, import_react87.forwardRef)(BellOff02);
var BellOff02_default = ForwardRef87;

// src/icons/alerts_feedback/BellOff03.tsx
var React89 = __toESM(require("react"));
var import_react88 = require("react");
var BellOff03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React89.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React89.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React89.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 19a3 3 0 1 1-6 0M7.377 7.885C6.491 8.813 6 9.985 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.052.244.202.355.132.096.795.096 2.12.096H19.88M12 6c-.293 0-.584.019-.87.055-.382.048-.572.073-.764.02a1.22 1.22 0 0 1-.446-.259c-.14-.14-.17-.215-.232-.363a2.5 2.5 0 1 1 4.108.786A6.852 6.852 0 0 0 12 6Zm0 0c1.591 0 3.117.548 4.243 1.523C17.368 8.498 18 9.821 18 11.2c0 .335.01.656.026.965M21 20 3 4" }));
var ForwardRef88 = (0, import_react88.forwardRef)(BellOff03);
var BellOff03_default = ForwardRef88;

// src/icons/alerts_feedback/BellPlus.tsx
var React90 = __toESM(require("react"));
var import_react89 = require("react");
var BellPlus = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React90.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React90.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React90.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.355 21c.705.622 1.631 1 2.646 1a3.99 3.99 0 0 0 2.646-1M18 8V2m-3 3h6m-8-2.916A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.185-.179.2-.361.014-.165-.354-.755-1.088-1.936-.492-.79-.955-1.81-1.265-3.105" }));
var ForwardRef89 = (0, import_react89.forwardRef)(BellPlus);
var BellPlus_default = ForwardRef89;

// src/icons/alerts_feedback/BellRinging01.tsx
var React91 = __toESM(require("react"));
var import_react90 = require("react");
var BellRinging01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React91.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React91.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React91.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9.353 21a3.99 3.99 0 0 0 2.646 1 3.986 3.986 0 0 0 2.646-1M2.293 5.82A4.007 4.007 0 0 1 4.325 2.3m17.376 3.52A4.007 4.007 0 0 0 19.67 2.3M18 8A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.088 1.936.015.182.053.252.2.36.133.099.73.099 1.927.099H18.61c1.197 0 1.795 0 1.928-.098.146-.11.185-.179.2-.361.013-.165-.354-.755-1.088-1.936C18.779 13.206 18 11.09 18 8Z" }));
var ForwardRef90 = (0, import_react90.forwardRef)(BellRinging01);
var BellRinging01_default = ForwardRef90;

// src/icons/alerts_feedback/BellRinging02.tsx
var React92 = __toESM(require("react"));
var import_react91 = require("react");
var BellRinging02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React92.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React92.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React92.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14 21h-4M2.292 5.82A4.007 4.007 0 0 1 4.325 2.3m17.377 3.52a4.007 4.007 0 0 0-2.033-3.52M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.088 1.936.015.182.053.252.2.36.133.099.73.099 1.927.099H18.61c1.197 0 1.795 0 1.928-.098.146-.11.185-.179.2-.361.014-.165-.354-.755-1.088-1.936C18.779 13.206 18 11.09 18 8Z" }));
var ForwardRef91 = (0, import_react91.forwardRef)(BellRinging02);
var BellRinging02_default = ForwardRef91;

// src/icons/alerts_feedback/BellRinging03.tsx
var React93 = __toESM(require("react"));
var import_react92 = require("react");
var BellRinging03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React93.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React93.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React93.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15 19a3 3 0 1 1-6 0m4.797-12.761a2.5 2.5 0 1 0-3.593 0M2.547 8.323a4.007 4.007 0 0 1 2.032-3.52m16.874 3.52a4.007 4.007 0 0 0-2.032-3.52m-1.42 6.397c0-1.38-.633-2.702-1.758-3.677C15.118 6.548 13.592 6 12 6c-1.591 0-3.117.548-4.242 1.523C6.632 8.498 6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.804 1.36-1.207 2.041-1.19 2.204.017.186.05.244.202.355.131.096.794.096 2.118.096h12.284c1.325 0 1.987 0 2.119-.096.15-.11.184-.17.202-.355.016-.163-.386-.843-1.19-2.204C18.565 15.15 18 13.482 18 11.2Z" }));
var ForwardRef92 = (0, import_react92.forwardRef)(BellRinging03);
var BellRinging03_default = ForwardRef92;

// src/icons/alerts_feedback/BellRinging04.tsx
var React94 = __toESM(require("react"));
var import_react93 = require("react");
var BellRinging04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React94.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React94.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React94.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.645 18.014a3 3 0 1 1-5.796 1.553m-7.793-7.954a4.007 4.007 0 0 1 1.052-3.926m9.037-1.947a2.5 2.5 0 1 0-3.47.93m11.643.05a4.007 4.007 0 0 0-2.874-2.874m.046 5.599c-.357-1.332-1.31-2.446-2.65-3.097-1.339-.65-2.955-.785-4.492-.373-1.537.412-2.87 1.336-3.704 2.57-.834 1.232-1.102 2.674-.745 4.006.59 2.204.475 3.962.102 5.298-.425 1.523-.637 2.285-.58 2.437.066.175.114.223.288.29.152.06.792-.112 2.071-.454l11.865-3.18c1.28-.343 1.92-.514 2.022-.641.117-.146.134-.211.104-.395-.027-.162-.592-.715-1.721-1.821-.991-.97-1.97-2.436-2.56-4.64Z" }));
var ForwardRef93 = (0, import_react93.forwardRef)(BellRinging04);
var BellRinging04_default = ForwardRef93;

// src/icons/charts/ChartBreakoutCircle.tsx
var React95 = __toESM(require("react"));
var import_react94 = require("react");
var ChartBreakoutCircle = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React95.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React95.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React95.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.5 3.5V2m3.94 2.56L20.5 3.5m.01 5h1.5m-.06 4.5c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95M12 8h4v4m-.38-4A12.984 12.984 0 0 1 5 13.5c-1.003 0-1.98-.114-2.917-.329" }));
var ForwardRef94 = (0, import_react94.forwardRef)(ChartBreakoutCircle);
var ChartBreakoutCircle_default = ForwardRef94;

// src/icons/charts/ChartBreakoutSquare.tsx
var React96 = __toESM(require("react"));
var import_react95 = require("react");
var ChartBreakoutSquare = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React96.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React96.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React96.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V13m-9-5h4v4m-.5-8.5V2m3.94 2.56L20.5 3.5m.01 5h1.5M3 13.347c.652.1 1.32.153 2 .153 4.386 0 8.265-2.172 10.62-5.5" }));
var ForwardRef95 = (0, import_react95.forwardRef)(ChartBreakoutSquare);
var ChartBreakoutSquare_default = ForwardRef95;

// src/icons/arrows/ChevronDown.tsx
var React97 = __toESM(require("react"));
var import_react96 = require("react");
var ChevronDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React97.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React97.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React97.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m6 9 6 6 6-6" }));
var ForwardRef96 = (0, import_react96.forwardRef)(ChevronDown);
var ChevronDown_default = ForwardRef96;

// src/icons/arrows/ChevronDownDouble.tsx
var React98 = __toESM(require("react"));
var import_react97 = require("react");
var ChevronDownDouble = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React98.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React98.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React98.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7 13 5 5 5-5M7 6l5 5 5-5" }));
var ForwardRef97 = (0, import_react97.forwardRef)(ChevronDownDouble);
var ChevronDownDouble_default = ForwardRef97;

// src/icons/arrows/ChevronLeft.tsx
var React99 = __toESM(require("react"));
var import_react98 = require("react");
var ChevronLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React99.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React99.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React99.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m15 18-6-6 6-6" }));
var ForwardRef98 = (0, import_react98.forwardRef)(ChevronLeft);
var ChevronLeft_default = ForwardRef98;

// src/icons/arrows/ChevronLeftDouble.tsx
var React100 = __toESM(require("react"));
var import_react99 = require("react");
var ChevronLeftDouble = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React100.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React100.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React100.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m18 17-5-5 5-5m-7 10-5-5 5-5" }));
var ForwardRef99 = (0, import_react99.forwardRef)(ChevronLeftDouble);
var ChevronLeftDouble_default = ForwardRef99;

// src/icons/arrows/ChevronRight.tsx
var React101 = __toESM(require("react"));
var import_react100 = require("react");
var ChevronRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React101.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React101.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React101.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m9 18 6-6-6-6" }));
var ForwardRef100 = (0, import_react100.forwardRef)(ChevronRight);
var ChevronRight_default = ForwardRef100;

// src/icons/arrows/ChevronRightDouble.tsx
var React102 = __toESM(require("react"));
var import_react101 = require("react");
var ChevronRightDouble = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React102.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React102.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React102.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m6 17 5-5-5-5m7 10 5-5-5-5" }));
var ForwardRef101 = (0, import_react101.forwardRef)(ChevronRightDouble);
var ChevronRightDouble_default = ForwardRef101;

// src/icons/arrows/ChevronSelectorHorizontal.tsx
var React103 = __toESM(require("react"));
var import_react102 = require("react");
var ChevronSelectorHorizontal = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React103.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React103.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React103.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m9 7-5 5 5 5m6-10 5 5-5 5" }));
var ForwardRef102 = (0, import_react102.forwardRef)(ChevronSelectorHorizontal);
var ChevronSelectorHorizontal_default = ForwardRef102;

// src/icons/arrows/ChevronSelectorVertical.tsx
var React104 = __toESM(require("react"));
var import_react103 = require("react");
var ChevronSelectorVertical = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React104.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React104.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React104.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7 15 5 5 5-5M7 9l5-5 5 5" }));
var ForwardRef103 = (0, import_react103.forwardRef)(ChevronSelectorVertical);
var ChevronSelectorVertical_default = ForwardRef103;

// src/icons/arrows/ChevronUp.tsx
var React105 = __toESM(require("react"));
var import_react104 = require("react");
var ChevronUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React105.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React105.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React105.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m18 15-6-6-6 6" }));
var ForwardRef104 = (0, import_react104.forwardRef)(ChevronUp);
var ChevronUp_default = ForwardRef104;

// src/icons/arrows/ChevronUpDouble.tsx
var React106 = __toESM(require("react"));
var import_react105 = require("react");
var ChevronUpDouble = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React106.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React106.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React106.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m17 18-5-5-5 5m10-7-5-5-5 5" }));
var ForwardRef105 = (0, import_react105.forwardRef)(ChevronUpDouble);
var ChevronUpDouble_default = ForwardRef105;

// src/icons/arrows/CornerDownLeft.tsx
var React107 = __toESM(require("react"));
var import_react106 = require("react");
var CornerDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React107.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React107.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React107.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 4v1.4c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C15.44 15 13.76 15 10.4 15H4m0 0 5-5m-5 5 5 5" }));
var ForwardRef106 = (0, import_react106.forwardRef)(CornerDownLeft);
var CornerDownLeft_default = ForwardRef106;

// src/icons/arrows/CornerDownRight.tsx
var React108 = __toESM(require("react"));
var import_react107 = require("react");
var CornerDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React108.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React108.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React108.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 4v1.4c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C8.56 15 10.24 15 13.6 15H20m0 0-5-5m5 5-5 5" }));
var ForwardRef107 = (0, import_react107.forwardRef)(CornerDownRight);
var CornerDownRight_default = ForwardRef107;

// src/icons/arrows/CornerLeftDown.tsx
var React109 = __toESM(require("react"));
var import_react108 = require("react");
var CornerLeftDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React109.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React109.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React109.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 4h-3.4c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C8 8.56 8 10.24 8 13.6V20m0 0 5-5m-5 5-5-5" }));
var ForwardRef108 = (0, import_react108.forwardRef)(CornerLeftDown);
var CornerLeftDown_default = ForwardRef108;

// src/icons/arrows/CornerLeftUp.tsx
var React110 = __toESM(require("react"));
var import_react109 = require("react");
var CornerLeftUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React110.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React110.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React110.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 20h-3.4c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C8 15.44 8 13.76 8 10.4V4m0 0 5 5M8 4 3 9" }));
var ForwardRef109 = (0, import_react109.forwardRef)(CornerLeftUp);
var CornerLeftUp_default = ForwardRef109;

// src/icons/arrows/CornerRightDown.tsx
var React111 = __toESM(require("react"));
var import_react110 = require("react");
var CornerRightDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React111.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React111.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React111.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 4h3.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C16 8.56 16 10.24 16 13.6V20m0 0-5-5m5 5 5-5" }));
var ForwardRef110 = (0, import_react110.forwardRef)(CornerRightDown);
var CornerRightDown_default = ForwardRef110;

// src/icons/arrows/CornerRightUp.tsx
var React112 = __toESM(require("react"));
var import_react111 = require("react");
var CornerRightUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React112.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React112.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React112.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 20h3.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C16 15.44 16 13.76 16 10.4V4m0 0-5 5m5-5 5 5" }));
var ForwardRef111 = (0, import_react111.forwardRef)(CornerRightUp);
var CornerRightUp_default = ForwardRef111;

// src/icons/arrows/CornerUpLeft.tsx
var React113 = __toESM(require("react"));
var import_react112 = require("react");
var CornerUpLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React113.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React113.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React113.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 14 4 9m0 0 5-5M4 9h6.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C20 13.56 20 15.24 20 18.6V20" }));
var ForwardRef112 = (0, import_react112.forwardRef)(CornerUpLeft);
var CornerUpLeft_default = ForwardRef112;

// src/icons/arrows/CornerUpRight.tsx
var React114 = __toESM(require("react"));
var import_react113 = require("react");
var CornerUpRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React114.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React114.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React114.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 20v-1.4c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C8.56 9 10.24 9 13.6 9H20m0 0-5 5m5-5-5-5" }));
var ForwardRef113 = (0, import_react113.forwardRef)(CornerUpRight);
var CornerUpRight_default = ForwardRef113;

// src/icons/arrows/Expand01.tsx
var React115 = __toESM(require("react"));
var import_react114 = require("react");
var Expand01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React115.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React115.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React115.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m14 10 7-7m0 0h-6m6 0v6m-11 5-7 7m0 0h6m-6 0v-6" }));
var ForwardRef114 = (0, import_react114.forwardRef)(Expand01);
var Expand01_default = ForwardRef114;

// src/icons/arrows/Expand02.tsx
var React116 = __toESM(require("react"));
var import_react115 = require("react");
var Expand02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React116.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React116.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React116.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6" }));
var ForwardRef115 = (0, import_react115.forwardRef)(Expand02);
var Expand02_default = ForwardRef115;

// src/icons/arrows/Expand03.tsx
var React117 = __toESM(require("react"));
var import_react116 = require("react");
var Expand03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React117.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React117.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React117.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 14v2.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H14M10 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V10m12-1 6-6m0 0h-6m6 0v6M9 15l-6 6m0 0h6m-6 0v-6" }));
var ForwardRef116 = (0, import_react116.forwardRef)(Expand03);
var Expand03_default = ForwardRef116;

// src/icons/arrows/Expand04.tsx
var React118 = __toESM(require("react"));
var import_react117 = require("react");
var Expand04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React118.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React118.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React118.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 14v2.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 20 17.92 20 16.8 20H14M10 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V10m11-1 6-6m0 0h-6m6 0v6M9 15l-6 6m0 0h6m-6 0v-6" }));
var ForwardRef117 = (0, import_react117.forwardRef)(Expand04);
var Expand04_default = ForwardRef117;

// src/icons/arrows/Expand05.tsx
var React119 = __toESM(require("react"));
var import_react118 = require("react");
var Expand05 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React119.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React119.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React119.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m15 9 6-6m0 0h-6m6 0v6M9 9 3 3m0 0v6m0-6h6m0 12-6 6m0 0h6m-6 0v-6m12 0 6 6m0 0v-6m0 6h-6" }));
var ForwardRef118 = (0, import_react118.forwardRef)(Expand05);
var Expand05_default = ForwardRef118;

// src/icons/arrows/Expand06.tsx
var React120 = __toESM(require("react"));
var import_react119 = require("react");
var Expand06 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React120.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React120.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React120.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m16 8 5-5m0 0h-5m5 0v5M8 8 3 3m0 0v5m0-5h5m0 13-5 5m0 0h5m-5 0v-5m13 0 5 5m0 0v-5m0 5h-5" }));
var ForwardRef119 = (0, import_react119.forwardRef)(Expand06);
var Expand06_default = ForwardRef119;

// src/icons/arrows/FlipBackward.tsx
var React121 = __toESM(require("react"));
var import_react120 = require("react");
var FlipBackward = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React121.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React121.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React121.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 9h13.5a4.5 4.5 0 1 1 0 9H12M3 9l4-4M3 9l4 4" }));
var ForwardRef120 = (0, import_react120.forwardRef)(FlipBackward);
var FlipBackward_default = ForwardRef120;

// src/icons/arrows/FlipForward.tsx
var React122 = __toESM(require("react"));
var import_react121 = require("react");
var FlipForward = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React122.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React122.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React122.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 9H7.5a4.5 4.5 0 1 0 0 9H12m9-9-4-4m4 4-4 4" }));
var ForwardRef121 = (0, import_react121.forwardRef)(FlipForward);
var FlipForward_default = ForwardRef121;

// src/icons/charts/HorizontalBarChart01.tsx
var React123 = __toESM(require("react"));
var import_react122 = require("react");
var HorizontalBarChart01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React123.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React123.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React123.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 9.5V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 4.5 15.96 4.5 15.4 4.5H3m10 10v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 2v20m0-7.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 13.74 21 13.46 21 12.9v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 9.5 19.96 9.5 19.4 9.5H3v5Z" }));
var ForwardRef122 = (0, import_react122.forwardRef)(HorizontalBarChart01);
var HorizontalBarChart01_default = ForwardRef122;

// src/icons/charts/HorizontalBarChart02.tsx
var React124 = __toESM(require("react"));
var import_react123 = require("react");
var HorizontalBarChart02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React124.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React124.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React124.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React124.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 12.5v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3m10 0v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 5v20m0-12.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 11.74 21 11.46 21 10.9V9.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 7.5 19.96 7.5 19.4 7.5H3v5Z" })), /* @__PURE__ */ React124.createElement("defs", null, /* @__PURE__ */ React124.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React124.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" }))));
var ForwardRef123 = (0, import_react123.forwardRef)(HorizontalBarChart02);
var HorizontalBarChart02_default = ForwardRef123;

// src/icons/charts/HorizontalBarChart03.tsx
var React125 = __toESM(require("react"));
var import_react124 = require("react");
var HorizontalBarChart03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React125.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React125.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React125.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13 9.5V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.24 4.5 11.96 4.5 11.4 4.5H3m14 10v-3.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 9.5 15.96 9.5 15.4 9.5H3M3 2v20m0-2.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 18.74 21 18.46 21 17.9v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109H3v5Z" }));
var ForwardRef124 = (0, import_react124.forwardRef)(HorizontalBarChart03);
var HorizontalBarChart03_default = ForwardRef124;

// src/icons/arrows/Infinity.tsx
var React126 = __toESM(require("react"));
var import_react125 = require("react");
var Infinity = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React126.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React126.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React126.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.74-8-4.584 0-4.584 8 0 8 5.607 0 7.645-8 12.74-8h0Z" }));
var ForwardRef125 = (0, import_react125.forwardRef)(Infinity);
var Infinity_default = ForwardRef125;

// src/icons/charts/LineChartDown01.tsx
var React127 = __toESM(require("react"));
var import_react126 = require("react");
var LineChartDown01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React127.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React127.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React127.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m17 12-3.919-4.183c-.148-.158-.223-.237-.312-.278a.5.5 0 0 0-.253-.044c-.098.01-.194.06-.387.16l-3.258 1.69c-.193.1-.289.15-.387.16a.5.5 0 0 1-.253-.044c-.09-.04-.164-.12-.312-.278L7 8" }));
var ForwardRef126 = (0, import_react126.forwardRef)(LineChartDown01);
var LineChartDown01_default = ForwardRef126;

// src/icons/charts/LineChartDown02.tsx
var React128 = __toESM(require("react"));
var import_react127 = require("react");
var LineChartDown02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React128.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React128.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React128.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m18 12-5.434-5.434c-.198-.198-.297-.297-.412-.334a.5.5 0 0 0-.309 0c-.114.037-.213.136-.41.334l-1.87 1.868c-.197.198-.296.297-.41.334a.499.499 0 0 1-.31 0c-.114-.037-.213-.136-.41-.334L7 7m14 8h-4m4 0v-4" }));
var ForwardRef127 = (0, import_react127.forwardRef)(LineChartDown02);
var LineChartDown02_default = ForwardRef127;

// src/icons/charts/LineChartDown03.tsx
var React129 = __toESM(require("react"));
var import_react128 = require("react");
var LineChartDown03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React129.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React129.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React129.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m17 15-5.434-5.434c-.198-.198-.297-.297-.412-.334a.5.5 0 0 0-.309 0c-.114.037-.213.136-.41.334l-1.87 1.868c-.197.198-.296.297-.41.334a.499.499 0 0 1-.31 0c-.114-.037-.213-.136-.41-.334L3 7m14 8h-4m4 0v-4M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef128 = (0, import_react128.forwardRef)(LineChartDown03);
var LineChartDown03_default = ForwardRef128;

// src/icons/charts/LineChartDown04.tsx
var React130 = __toESM(require("react"));
var import_react129 = require("react");
var LineChartDown04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React130.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React130.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React130.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m3 9 6.655 4.754a.5.5 0 0 0 .645-.053l3.4-3.402a.5.5 0 0 1 .645-.053L21 15M6 21h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z" }));
var ForwardRef129 = (0, import_react129.forwardRef)(LineChartDown04);
var LineChartDown04_default = ForwardRef129;

// src/icons/charts/LineChartDown05.tsx
var React131 = __toESM(require("react"));
var import_react130 = require("react");
var LineChartDown05 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React131.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React131.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React131.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m6 10 3.434 3.434c.198.198.297.297.411.334.1.033.21.033.31 0 .114-.037.213-.136.41-.334l2.87-2.868c.197-.198.296-.297.41-.334a.499.499 0 0 1 .31 0c.114.037.213.136.41.334L18 14m4-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef130 = (0, import_react130.forwardRef)(LineChartDown05);
var LineChartDown05_default = ForwardRef130;

// src/icons/charts/LineChartUp01.tsx
var React132 = __toESM(require("react"));
var import_react131 = require("react");
var LineChartUp01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React132.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React132.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React132.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m17 5-3.919 4.183c-.148.158-.223.237-.312.278a.5.5 0 0 1-.253.044c-.098-.01-.194-.06-.387-.16l-3.258-1.69c-.193-.1-.289-.15-.387-.16a.5.5 0 0 0-.253.044c-.09.04-.164.12-.312.278L7 15" }));
var ForwardRef131 = (0, import_react131.forwardRef)(LineChartUp01);
var LineChartUp01_default = ForwardRef131;

// src/icons/charts/LineChartUp02.tsx
var React133 = __toESM(require("react"));
var import_react132 = require("react");
var LineChartUp02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React133.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React133.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React133.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m18 4-5.434 5.434c-.198.198-.297.297-.412.334a.499.499 0 0 1-.309 0c-.114-.037-.213-.136-.41-.334l-1.87-1.868c-.197-.198-.296-.297-.41-.334a.499.499 0 0 0-.31 0c-.114.037-.213.136-.41.334L7 15m14-8h-4m4 0v4" }));
var ForwardRef132 = (0, import_react132.forwardRef)(LineChartUp02);
var LineChartUp02_default = ForwardRef132;

// src/icons/charts/LineChartUp03.tsx
var React134 = __toESM(require("react"));
var import_react133 = require("react");
var LineChartUp03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React134.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React134.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React134.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m17 9-5.434 5.434c-.198.198-.297.297-.412.334a.499.499 0 0 1-.309 0c-.114-.037-.213-.136-.41-.334l-1.87-1.868c-.197-.198-.296-.297-.41-.334a.499.499 0 0 0-.31 0c-.114.037-.213.136-.41.334L3 17m14-8h-4m4 0v4m-9.2 8h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef133 = (0, import_react133.forwardRef)(LineChartUp03);
var LineChartUp03_default = ForwardRef133;

// src/icons/charts/LineChartUp04.tsx
var React135 = __toESM(require("react"));
var import_react134 = require("react");
var LineChartUp04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React135.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React135.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React135.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m21 9-6.448 4.606c-.197.14-.294.21-.4.231a.5.5 0 0 1-.276-.023c-.1-.038-.185-.123-.355-.293l-3.042-3.042c-.17-.17-.255-.255-.355-.293a.5.5 0 0 0-.277-.023c-.105.021-.203.091-.398.23L3 15m4.8 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z" }));
var ForwardRef134 = (0, import_react134.forwardRef)(LineChartUp04);
var LineChartUp04_default = ForwardRef134;

// src/icons/charts/LineChartUp05.tsx
var React136 = __toESM(require("react"));
var import_react135 = require("react");
var LineChartUp05 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React136.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React136.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React136.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m18 10-3.434 3.434c-.198.198-.297.297-.412.334a.499.499 0 0 1-.309 0c-.114-.037-.213-.136-.41-.334l-2.87-2.868c-.197-.198-.296-.297-.41-.334a.499.499 0 0 0-.31 0c-.114.037-.213.136-.41.334L6 14m16-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef135 = (0, import_react135.forwardRef)(LineChartUp05);
var LineChartUp05_default = ForwardRef135;

// src/icons/alerts_feedback/MessageNotificationSquare.tsx
var React137 = __toESM(require("react"));
var import_react136 = require("react");
var MessageNotificationSquare = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React137.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React137.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React137.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8V14c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.122 2.12C5.605 18 6.07 18 7 18v2.335c0 .533 0 .8.11.937a.5.5 0 0 0 .39.188c.176 0 .384-.167.8-.5l2.385-1.908c.487-.39.731-.585 1.002-.724.241-.122.497-.212.762-.267.299-.061.61-.061 1.235-.061H15.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 15.72 20 14.88 20 13.2V13m.121-9.121A3 3 0 1 1 15.88 8.12a3 3 0 0 1 4.24-4.24Z" }));
var ForwardRef136 = (0, import_react136.forwardRef)(MessageNotificationSquare);
var MessageNotificationSquare_default = ForwardRef136;

// src/icons/alerts_feedback/NotificationBox.tsx
var React138 = __toESM(require("react"));
var import_react137 = require("react");
var NotificationBox = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React138.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React138.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React138.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2V13m.121-9.121A3 3 0 1 1 15.88 8.12a3 3 0 0 1 4.24-4.24Z" }));
var ForwardRef137 = (0, import_react137.forwardRef)(NotificationBox);
var NotificationBox_default = ForwardRef137;

// src/icons/alerts_feedback/NotificationText.tsx
var React139 = __toESM(require("react"));
var import_react138 = require("react");
var NotificationText = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React139.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React139.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React139.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2V13m-7 4H7m8-4H7m13.121-9.121A3 3 0 1 1 15.88 8.12a3 3 0 0 1 4.24-4.24Z" }));
var ForwardRef138 = (0, import_react138.forwardRef)(NotificationText);
var NotificationText_default = ForwardRef138;

// src/icons/charts/PieChart01.tsx
var React140 = __toESM(require("react"));
var import_react139 = require("react");
var PieChart01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React140.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React140.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React140.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21.21 15.89A10 10 0 1 1 8 2.83m13.24 5.344a10 10 0 0 1 .728 3.027c.021.257.031.386-.02.501a.525.525 0 0 1-.22.239c-.11.06-.25.06-.528.06h-8.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C12 11.62 12 11.48 12 11.2V2.8c0-.278 0-.417.06-.528a.525.525 0 0 1 .239-.22c.115-.051.244-.041.5-.02a10 10 0 0 1 8.44 6.14Z" }));
var ForwardRef139 = (0, import_react139.forwardRef)(PieChart01);
var PieChart01_default = ForwardRef139;

// src/icons/charts/PieChart02.tsx
var React141 = __toESM(require("react"));
var import_react140 = require("react");
var PieChart02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React141.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React141.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React141.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17.2 13.982c.277 0 .416 0 .528.062a.53.53 0 0 1 .22.243c.05.118.037.243.012.494a8 8 0 1 1-8.759-8.759c.251-.025.376-.038.494.012a.53.53 0 0 1 .243.22c.062.113.062.251.062.528v6.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.219c.107.054.247.054.527.054h6.4ZM14 2.782c0-.277 0-.415.062-.528a.53.53 0 0 1 .243-.22c.117-.05.243-.037.494-.012a8 8 0 0 1 7.161 7.161c.025.251.038.377-.012.494a.53.53 0 0 1-.22.244c-.113.061-.251.061-.528.061h-6.4c-.28 0-.42 0-.527-.054a.5.5 0 0 1-.218-.219C14 9.602 14 9.462 14 9.182v-6.4Z" }));
var ForwardRef140 = (0, import_react140.forwardRef)(PieChart02);
var PieChart02_default = ForwardRef140;

// src/icons/charts/PieChart03.tsx
var React142 = __toESM(require("react"));
var import_react141 = require("react");
var PieChart03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React142.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React142.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React142.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 2a10 10 0 0 1 10 10M12 2v10m0-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M12 2c5.523 0 10 4.477 10 10m0 0H12m10 0a10 10 0 0 1-4.122 8.09L12 12" }));
var ForwardRef141 = (0, import_react141.forwardRef)(PieChart03);
var PieChart03_default = ForwardRef141;

// src/icons/charts/PieChart04.tsx
var React143 = __toESM(require("react"));
var import_react142 = require("react");
var PieChart04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React143.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React143.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React143.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 12 2.332 9.446a10 10 0 0 0 5.922 11.826L12 12Zm0 0 .105-10A10 10 0 0 0 2.34 9.413L12 12Zm10 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
var ForwardRef142 = (0, import_react142.forwardRef)(PieChart04);
var PieChart04_default = ForwardRef142;

// src/icons/charts/PresentationChart01.tsx
var React144 = __toESM(require("react"));
var import_react143 = require("react");
var PresentationChart01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React144.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React144.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React144.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 16v5m0-5 6 5m-6-5-6 5M21 3v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 16 17.88 16 16.2 16H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 13.72 3 12.88 3 11.2V3m5 6v3m4-5v5m4-1v1m6-9H2" }));
var ForwardRef143 = (0, import_react143.forwardRef)(PresentationChart01);
var PresentationChart01_default = ForwardRef143;

// src/icons/charts/PresentationChart02.tsx
var React145 = __toESM(require("react"));
var import_react144 = require("react");
var PresentationChart02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React145.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React145.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React145.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 16v5m6 0-3.951-3.293c-.73-.607-1.094-.91-1.5-1.027a2 2 0 0 0-1.098 0c-.406.116-.77.42-1.5 1.027L6 21m2-10v1m4-3v3m4-5v5m6-9H2m1 0h18v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 16 17.88 16 16.2 16H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 13.72 3 12.88 3 11.2V3Z" }));
var ForwardRef144 = (0, import_react144.forwardRef)(PresentationChart02);
var PresentationChart02_default = ForwardRef144;

// src/icons/charts/PresentationChart03.tsx
var React146 = __toESM(require("react"));
var import_react145 = require("react");
var PresentationChart03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React146.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React146.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React146.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 16v5m0-5 6 5m-6-5-6 5M8 7v5m4-3v3m4-1v1m6-9H2m1 0h18v8.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 16 17.88 16 16.2 16H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 13.72 3 12.88 3 11.2V3Z" }));
var ForwardRef145 = (0, import_react145.forwardRef)(PresentationChart03);
var PresentationChart03_default = ForwardRef145;

// src/icons/arrows/RefreshCcw01.tsx
var React147 = __toESM(require("react"));
var import_react146 = require("react");
var RefreshCcw01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React147.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React147.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React147.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6" }));
var ForwardRef146 = (0, import_react146.forwardRef)(RefreshCcw01);
var RefreshCcw01_default = ForwardRef146;

// src/icons/arrows/RefreshCcw02.tsx
var React148 = __toESM(require("react"));
var import_react147 = require("react");
var RefreshCcw02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React148.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React148.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React148.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2 10s.121-.85 3.636-4.364A9 9 0 0 1 20.776 10M2 10V4m0 6h6m14 4s-.121.85-3.636 4.364A9 9 0 0 1 3.224 14M22 14v6m0-6h-6" }));
var ForwardRef147 = (0, import_react147.forwardRef)(RefreshCcw02);
var RefreshCcw02_default = ForwardRef147;

// src/icons/arrows/RefreshCcw03.tsx
var React149 = __toESM(require("react"));
var import_react148 = require("react");
var RefreshCcw03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React149.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React149.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React149.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14 2s.85.121 4.364 3.636A9 9 0 0 1 14 20.776M14 2h6m-6 0v6m-4 14s-.85-.122-4.364-3.636A9 9 0 0 1 10 3.224M10 22H4m6 0v-6" }));
var ForwardRef148 = (0, import_react148.forwardRef)(RefreshCcw03);
var RefreshCcw03_default = ForwardRef148;

// src/icons/arrows/RefreshCcw04.tsx
var React150 = __toESM(require("react"));
var import_react149 = require("react");
var RefreshCcw04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React150.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React150.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React150.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 18.874A8.5 8.5 0 0 0 12 3.5h-.5m.5 17A8.5 8.5 0 0 1 7 5.126M11 22.4l2-2-2-2m2-12.8-2-2 2-2" }));
var ForwardRef149 = (0, import_react149.forwardRef)(RefreshCcw04);
var RefreshCcw04_default = ForwardRef149;

// src/icons/arrows/RefreshCcw05.tsx
var React151 = __toESM(require("react"));
var import_react150 = require("react");
var RefreshCcw05 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React151.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React151.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React151.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8.545 19.769A8.5 8.5 0 0 0 19.36 7.752l-.25-.434M4.637 16.251A8.5 8.5 0 0 1 15.452 4.234M2.492 16.335l2.732.732.732-2.732m12.085-4.668.732-2.732 2.733.732" }));
var ForwardRef150 = (0, import_react150.forwardRef)(RefreshCcw05);
var RefreshCcw05_default = ForwardRef150;

// src/icons/arrows/RefreshCw01.tsx
var React152 = __toESM(require("react"));
var import_react151 = require("react");
var RefreshCw01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React152.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React152.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React152.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M21 10s-2.005-2.732-3.634-4.362a9 9 0 1 0 2.282 8.862M21 10V4m0 6h-6" }));
var ForwardRef151 = (0, import_react151.forwardRef)(RefreshCw01);
var RefreshCw01_default = ForwardRef151;

// src/icons/arrows/RefreshCw02.tsx
var React153 = __toESM(require("react"));
var import_react152 = require("react");
var RefreshCw02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React153.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React153.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React153.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2 14s.121.85 3.636 4.364A9 9 0 0 0 20.776 14M2 14v6m0-6h6m14-4s-.121-.85-3.636-4.364A9 9 0 0 0 3.224 10M22 10V4m0 6h-6" }));
var ForwardRef152 = (0, import_react152.forwardRef)(RefreshCw02);
var RefreshCw02_default = ForwardRef152;

// src/icons/arrows/RefreshCw03.tsx
var React154 = __toESM(require("react"));
var import_react153 = require("react");
var RefreshCw03 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React154.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React154.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React154.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14 22s.85-.121 4.364-3.636A9 9 0 0 0 14 3.224M14 22h6m-6 0v-6M10 2s-.85.122-4.364 3.636A9 9 0 0 0 10 20.776M10 2H4m6 0v6" }));
var ForwardRef153 = (0, import_react153.forwardRef)(RefreshCw03);
var RefreshCw03_default = ForwardRef153;

// src/icons/arrows/RefreshCw04.tsx
var React155 = __toESM(require("react"));
var import_react154 = require("react");
var RefreshCw04 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React155.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React155.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React155.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 5.125A8.5 8.5 0 0 1 12 20.5h-.5M7 18.874A8.5 8.5 0 0 1 12 3.5h.5m.5 18.9-2-2 2-2M11 5.6l2-2-2-2" }));
var ForwardRef154 = (0, import_react154.forwardRef)(RefreshCw04);
var RefreshCw04_default = ForwardRef154;

// src/icons/arrows/RefreshCw05.tsx
var React156 = __toESM(require("react"));
var import_react155 = require("react");
var RefreshCw05 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React156.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React156.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React156.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20.452 12.893A8.5 8.5 0 0 1 4.637 16.25l-.25-.433m-.842-4.71A8.5 8.5 0 0 1 19.36 7.75l.25.432M3.492 18.066l.732-2.732 2.732.732m10.085-8.132 2.732.732.733-2.732" }));
var ForwardRef155 = (0, import_react155.forwardRef)(RefreshCw05);
var RefreshCw05_default = ForwardRef155;

// src/icons/arrows/ReverseLeft.tsx
var React157 = __toESM(require("react"));
var import_react156 = require("react");
var ReverseLeft = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React157.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React157.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React157.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4" }));
var ForwardRef156 = (0, import_react156.forwardRef)(ReverseLeft);
var ReverseLeft_default = ForwardRef156;

// src/icons/arrows/ReverseRight.tsx
var React158 = __toESM(require("react"));
var import_react157 = require("react");
var ReverseRight = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React158.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React158.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React158.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 7H10a6 6 0 1 0 0 12h10m0-12-4-4m4 4-4 4" }));
var ForwardRef157 = (0, import_react157.forwardRef)(ReverseRight);
var ReverseRight_default = ForwardRef157;

// src/icons/arrows/SwitchHorizontal01.tsx
var React159 = __toESM(require("react"));
var import_react158 = require("react");
var SwitchHorizontal01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React159.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React159.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React159.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 17H4m0 0 4-4m-4 4 4 4M4 7h16m0 0-4-4m4 4-4 4" }));
var ForwardRef158 = (0, import_react158.forwardRef)(SwitchHorizontal01);
var SwitchHorizontal01_default = ForwardRef158;

// src/icons/arrows/SwitchHorizontal02.tsx
var React160 = __toESM(require("react"));
var import_react159 = require("react");
var SwitchHorizontal02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React160.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React160.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React160.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 17h16m0 0-4-4m4 4-4 4m4-14H4m0 0 4-4M4 7l4 4" }));
var ForwardRef159 = (0, import_react159.forwardRef)(SwitchHorizontal02);
var SwitchHorizontal02_default = ForwardRef159;

// src/icons/arrows/SwitchVertical01.tsx
var React161 = __toESM(require("react"));
var import_react160 = require("react");
var SwitchVertical01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React161.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React161.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React161.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 4v16m0 0-4-4m4 4 4-4M7 20V4m0 0L3 8m4-4 4 4" }));
var ForwardRef160 = (0, import_react160.forwardRef)(SwitchVertical01);
var SwitchVertical01_default = ForwardRef160;

// src/icons/arrows/SwitchVertical02.tsx
var React162 = __toESM(require("react"));
var import_react161 = require("react");
var SwitchVertical02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React162.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React162.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React162.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 4v16m0 0-4-4m4 4 4-4m6 4V4m0 0-4 4m4-4 4 4" }));
var ForwardRef161 = (0, import_react161.forwardRef)(SwitchVertical02);
var SwitchVertical02_default = ForwardRef161;

// src/icons/alerts_feedback/ThumbsDown.tsx
var React163 = __toESM(require("react"));
var import_react162 = require("react");
var ThumbsDown = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React163.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React163.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React163.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17.001 2v11m5-3.2V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.481 2 19.921 2 18.801 2H8.119c-1.461 0-2.192 0-2.782.267a3 3 0 0 0-1.275 1.094c-.354.542-.465 1.265-.687 2.71l-.523 3.4c-.293 1.904-.44 2.857-.157 3.598a3 3 0 0 0 1.32 1.539C4.705 15 5.668 15 7.596 15h.805c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.934A2.466 2.466 0 0 0 12.467 22a.821.821 0 0 0 .751-.488l3.36-7.562c.154-.344.23-.516.35-.642a1 1 0 0 1 .384-.249c.164-.059.352-.059.729-.059h.76c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108Z" }));
var ForwardRef162 = (0, import_react162.forwardRef)(ThumbsDown);
var ThumbsDown_default = ForwardRef162;

// src/icons/alerts_feedback/ThumbsUp.tsx
var React164 = __toESM(require("react"));
var import_react163 = require("react");
var ThumbsUp = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React164.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React164.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React164.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 22V11m-5 2v7a2 2 0 0 0 2 2h13.426a3 3 0 0 0 2.965-2.544l1.077-7A3 3 0 0 0 18.503 9H15a1 1 0 0 1-1-1V4.466A2.466 2.466 0 0 0 11.534 2a.822.822 0 0 0-.75.488l-3.52 7.918A1 1 0 0 1 6.35 11H4a2 2 0 0 0-2 2Z" }));
var ForwardRef163 = (0, import_react163.forwardRef)(ThumbsUp);
var ThumbsUp_default = ForwardRef163;

// src/icons/charts/TrendDown01.tsx
var React165 = __toESM(require("react"));
var import_react164 = require("react");
var TrendDown01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React165.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React165.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React165.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m22 17-7.869-7.869c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L9.13 11.87c-.396.396-.594.594-.822.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668L2 7m20 10h-7m7 0v-7" }));
var ForwardRef164 = (0, import_react164.forwardRef)(TrendDown01);
var TrendDown01_default = ForwardRef164;

// src/icons/charts/TrendDown02.tsx
var React166 = __toESM(require("react"));
var import_react165 = require("react");
var TrendDown02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React166.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React166.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React166.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m7 7 10 10m0 0V7m0 10H7" }));
var ForwardRef165 = (0, import_react165.forwardRef)(TrendDown02);
var TrendDown02_default = ForwardRef165;

// src/icons/charts/TrendUp01.tsx
var React167 = __toESM(require("react"));
var import_react166 = require("react");
var TrendUp01 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React167.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React167.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React167.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m22 7-7.869 7.869c-.396.396-.594.594-.822.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668L9.13 12.13c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L2 17M22 7h-7m7 0v7" }));
var ForwardRef166 = (0, import_react166.forwardRef)(TrendUp01);
var TrendUp01_default = ForwardRef166;

// src/icons/charts/TrendUp02.tsx
var React168 = __toESM(require("react"));
var import_react167 = require("react");
var TrendUp02 = ({
  title,
  titleId,
  ...props
}, ref) => /* @__PURE__ */ React168.createElement("svg", { fill: "none", viewBox: "0 0 24 24", role: "img", width: "1em", height: "1em", ref, "aria-labelledby": titleId, ...props }, title ? /* @__PURE__ */ React168.createElement("title", { id: titleId }, title) : null, /* @__PURE__ */ React168.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7 17 17 7m0 0H7m10 0v10" }));
var ForwardRef167 = (0, import_react167.forwardRef)(TrendUp02);
var TrendUp02_default = ForwardRef167;

// src/enhanceIcons.ts
var icons = {};
function enhanceIcons() {
  Object.entries(src_exports).forEach(([name, component]) => {
    icons[name] = withIconProps_default(
      component
    );
  });
  return icons;
}
var enhanceIcons_default = enhanceIcons();

// src/client.tsx
var ClientIcon = ({ icon: IconComponent, ...props }) => {
  return /* @__PURE__ */ import_react168.default.createElement(IconComponent, { ...props });
};
var client_default = enhanceIcons_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertCircle,
  AlertHexagon,
  AlertOctagon,
  AlertSquare,
  AlertTriangle,
  Announcement01,
  Announcement02,
  Announcement03,
  ArrowBlockDown,
  ArrowBlockLeft,
  ArrowBlockRight,
  ArrowBlockUp,
  ArrowCircleBrokenDown,
  ArrowCircleBrokenDownLeft,
  ArrowCircleBrokenDownRight,
  ArrowCircleBrokenLeft,
  ArrowCircleBrokenRight,
  ArrowCircleBrokenUp,
  ArrowCircleBrokenUpLeft,
  ArrowCircleBrokenUpRight,
  ArrowCircleDown,
  ArrowCircleDownLeft,
  ArrowCircleDownRight,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleUp,
  ArrowCircleUpLeft,
  ArrowCircleUpRight,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowNarrowDown,
  ArrowNarrowDownLeft,
  ArrowNarrowDownRight,
  ArrowNarrowLeft,
  ArrowNarrowRight,
  ArrowNarrowUp,
  ArrowNarrowUpLeft,
  ArrowNarrowUpRight,
  ArrowRight,
  ArrowSquareDown,
  ArrowSquareDownLeft,
  ArrowSquareDownRight,
  ArrowSquareLeft,
  ArrowSquareRight,
  ArrowSquareUp,
  ArrowSquareUpLeft,
  ArrowSquareUpRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowsDown,
  ArrowsLeft,
  ArrowsRight,
  ArrowsTriangle,
  ArrowsUp,
  BarChart01,
  BarChart02,
  BarChart03,
  BarChart04,
  BarChart05,
  BarChart06,
  BarChart07,
  BarChart08,
  BarChart09,
  BarChart10,
  BarChart11,
  BarChart12,
  BarChartCircle01,
  BarChartCircle02,
  BarChartCircle03,
  BarChartSquare01,
  BarChartSquare02,
  BarChartSquare03,
  BarChartSquareDown,
  BarChartSquareMinus,
  BarChartSquarePlus,
  BarChartSquareUp,
  BarLineChart,
  Bell01,
  Bell02,
  Bell03,
  Bell04,
  BellMinus,
  BellOff01,
  BellOff02,
  BellOff03,
  BellPlus,
  BellRinging01,
  BellRinging02,
  BellRinging03,
  BellRinging04,
  ChartBreakoutCircle,
  ChartBreakoutSquare,
  ChevronDown,
  ChevronDownDouble,
  ChevronLeft,
  ChevronLeftDouble,
  ChevronRight,
  ChevronRightDouble,
  ChevronSelectorHorizontal,
  ChevronSelectorVertical,
  ChevronUp,
  ChevronUpDouble,
  ClientIcon,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Expand01,
  Expand02,
  Expand03,
  Expand04,
  Expand05,
  Expand06,
  FlipBackward,
  FlipForward,
  HorizontalBarChart01,
  HorizontalBarChart02,
  HorizontalBarChart03,
  Infinity,
  LineChartDown01,
  LineChartDown02,
  LineChartDown03,
  LineChartDown04,
  LineChartDown05,
  LineChartUp01,
  LineChartUp02,
  LineChartUp03,
  LineChartUp04,
  LineChartUp05,
  MessageNotificationSquare,
  NotificationBox,
  NotificationText,
  PieChart01,
  PieChart02,
  PieChart03,
  PieChart04,
  PresentationChart01,
  PresentationChart02,
  PresentationChart03,
  RefreshCcw01,
  RefreshCcw02,
  RefreshCcw03,
  RefreshCcw04,
  RefreshCcw05,
  RefreshCw01,
  RefreshCw02,
  RefreshCw03,
  RefreshCw04,
  RefreshCw05,
  ReverseLeft,
  ReverseRight,
  SwitchHorizontal01,
  SwitchHorizontal02,
  SwitchVertical01,
  SwitchVertical02,
  ThumbsDown,
  ThumbsUp,
  TrendDown01,
  TrendDown02,
  TrendUp01,
  TrendUp02,
  icons,
  withIconProps
});
//# sourceMappingURL=client.development.js.map
