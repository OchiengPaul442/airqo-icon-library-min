import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsArrowBlockDown = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.219C9.38 3 9.52 3 9.8 3h4.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C15 3.38 15 3.52 15 3.8V14h4l-7 7-7-7h4V3.8Z" /></Svg>;
const ArrowsArrowBlockDownWithProps = withIconProps(ArrowsArrowBlockDown);
ArrowsArrowBlockDownWithProps.displayName = 'ArrowsArrowBlockDown';
export default ArrowsArrowBlockDownWithProps;