import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsRefreshCw05 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.452 12.893A8.5 8.5 0 0 1 4.637 16.25l-.25-.433m-.842-4.71A8.5 8.5 0 0 1 19.36 7.75l.25.432M3.492 18.066l.732-2.732 2.732.732m10.085-8.132 2.732.732.733-2.732" /></Svg>;
export default ArrowsRefreshCw05;