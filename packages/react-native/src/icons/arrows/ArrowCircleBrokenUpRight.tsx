import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowCircleBrokenUpRight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.34 14.59a9.996 9.996 0 0 1 2.589-9.661c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142a9.996 9.996 0 0 1-9.66 2.59M15 15V9m0 0H9m6 0L5 19" /></Svg>;
export default ArrowCircleBrokenUpRight;