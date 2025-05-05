import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsArrowRight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m0 0-7-7m7 7-7 7" /></Svg>;
const ArrowsArrowRightWithProps = withIconProps(ArrowsArrowRight);
ArrowsArrowRightWithProps.displayName = 'ArrowsArrowRight';
export default ArrowsArrowRightWithProps;