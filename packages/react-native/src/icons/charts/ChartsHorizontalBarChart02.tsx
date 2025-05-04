import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChartsHorizontalBarChart02 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<G clipPath="url(#a)"><Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 12.5v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3m10 0v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 5v20m0-12.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 11.74 21 11.46 21 10.9V9.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 7.5 19.96 7.5 19.4 7.5H3v5Z" /></G><Defs><ClipPath id="a"><Path fill="#fff" d="M0 0h24v24H0z" /></ClipPath></Defs></Svg>;
export default ChartsHorizontalBarChart02;