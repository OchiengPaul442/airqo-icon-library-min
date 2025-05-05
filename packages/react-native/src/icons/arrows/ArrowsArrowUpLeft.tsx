import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsArrowUpLeft = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17 7 7m0 0v10M7 7h10" /></Svg>;
const ArrowsArrowUpLeftWithProps = withIconProps(ArrowsArrowUpLeft);
ArrowsArrowUpLeftWithProps.displayName = 'ArrowsArrowUpLeft';
export default ArrowsArrowUpLeftWithProps;