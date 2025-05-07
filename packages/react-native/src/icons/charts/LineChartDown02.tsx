import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LineChartDown02 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4V3m18 12-5.434-5.434c-.198-.198-.297-.297-.412-.334a.5.5 0 0 0-.309 0c-.114.037-.213.136-.41.334l-1.87 1.868c-.197.198-.296.297-.41.334a.499.499 0 0 1-.31 0c-.114-.037-.213-.136-.41-.334L7 7m14 8h-4m4 0v-4" /></Svg>;
export default LineChartDown02;