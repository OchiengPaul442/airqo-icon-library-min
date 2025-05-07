import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LineChartDown01 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m17 12-3.919-4.183c-.148-.158-.223-.237-.312-.278a.5.5 0 0 0-.253-.044c-.098.01-.194.06-.387.16l-3.258 1.69c-.193.1-.289.15-.387.16a.5.5 0 0 1-.253-.044c-.09-.04-.164-.12-.312-.278L7 8" /></Svg>;
export default LineChartDown01;