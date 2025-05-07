import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsTriangle = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 19h4.294c1.865 0 2.798 0 3.328-.39a2 2 0 0 0 .804-1.435c.058-.656-.429-1.452-1.401-3.043l-.997-1.631M6.13 10.606l-2.155 3.526c-.972 1.591-1.459 2.387-1.401 3.043a2 2 0 0 0 .804 1.435c.53.39 1.463.39 3.328.39H8.5m8.389-10L14.73 5.47c-.901-1.48-1.353-2.217-1.935-2.47a2 2 0 0 0-1.59 0c-.581.252-1.033.99-1.935 2.468L8.25 7.137M18 5.001l-1.098 4.098L12.804 8M2 11.599 6.098 10.5l1.098 4.098M15.5 22l-3-3 3-3" /></Svg>;
export default ArrowsTriangle;