import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlertTriangle = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.998 9v4m0 4h.01M10.613 3.892 2.388 18.099c-.456.788-.684 1.182-.65 1.505a1 1 0 0 0 .406.705c.263.191.718.191 1.629.191h16.45c.91 0 1.366 0 1.628-.191a1 1 0 0 0 .407-.705c.034-.323-.194-.717-.65-1.505L13.381 3.892c-.454-.785-.681-1.178-.978-1.31a1 1 0 0 0-.813 0c-.296.132-.523.525-.978 1.31Z" /></Svg>;
export default AlertTriangle;