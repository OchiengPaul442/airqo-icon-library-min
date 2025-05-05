import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Monitor = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeWidth={1.5} d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6Z" /><Path stroke="#1C1D20" strokeWidth={1.5} d="m9.303 11.6 1.5-2c.6-.8 1.8-.8 2.4 0l1.5 2c.741.989.036 2.4-1.2 2.4h-3c-1.236 0-1.942-1.411-1.2-2.4Z" /></Svg>;
export default Monitor;