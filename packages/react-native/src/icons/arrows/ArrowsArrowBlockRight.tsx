import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsArrowBlockRight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 12-7-7v4H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C3 9.38 3 9.52 3 9.8v4.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 15 3.52 15 3.8 15H14v4l7-7Z" /></Svg>;
export default ArrowsArrowBlockRight;