import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChevronLeftDouble = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m18 17-5-5 5-5m-7 10-5-5 5-5" /></Svg>;
export default ChevronLeftDouble;