import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsArrowUpRight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17 17 7m0 0H7m10 0v10" /></Svg>;
const ArrowsArrowUpRightWithProps = withIconProps(ArrowsArrowUpRight);
ArrowsArrowUpRightWithProps.displayName = 'ArrowsArrowUpRight';
export default ArrowsArrowUpRightWithProps;