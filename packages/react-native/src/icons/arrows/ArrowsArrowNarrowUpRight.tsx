import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsArrowNarrowUpRight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18 18 6m0 0h-8m8 0v8" /></Svg>;
const ArrowsArrowNarrowUpRightWithProps = withIconProps(ArrowsArrowNarrowUpRight);
ArrowsArrowNarrowUpRightWithProps.displayName = 'ArrowsArrowNarrowUpRight';
export default ArrowsArrowNarrowUpRightWithProps;