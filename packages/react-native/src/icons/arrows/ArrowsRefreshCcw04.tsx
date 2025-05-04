import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsRefreshCcw04 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 18.874A8.5 8.5 0 0 0 12 3.5h-.5m.5 17A8.5 8.5 0 0 1 7 5.126M11 22.4l2-2-2-2m2-12.8-2-2 2-2" /></Svg>;
export default ArrowsRefreshCcw04;