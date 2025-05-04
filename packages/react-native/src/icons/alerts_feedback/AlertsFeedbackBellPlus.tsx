import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlertsFeedbackBellPlus = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.355 21c.705.622 1.631 1 2.646 1a3.99 3.99 0 0 0 2.646-1M18 8V2m-3 3h6m-8-2.916A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.185-.179.2-.361.014-.165-.354-.755-1.088-1.936-.492-.79-.955-1.81-1.265-3.105" /></Svg>;
export default AlertsFeedbackBellPlus;