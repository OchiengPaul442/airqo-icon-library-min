import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowCircleBrokenLeft = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.662 17A9.996 9.996 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.996 9.996 0 0 1 8.662 5M12 8l-4 4m0 0 4 4m-4-4h14" /></Svg>;
export default ArrowCircleBrokenLeft;