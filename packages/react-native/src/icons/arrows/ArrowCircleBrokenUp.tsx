import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowCircleBrokenUp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20.662A9.996 9.996 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.996 9.996 0 0 1-5 8.662M16 12l-4-4m0 0-4 4m4-4v14" /></Svg>;
export default ArrowCircleBrokenUp;