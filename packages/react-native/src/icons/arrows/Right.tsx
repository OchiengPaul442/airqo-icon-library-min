import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Right = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H10a6 6 0 1 0 0 12h10m0-12-4-4m4 4-4 4" /></Svg>;
const RightWithProps = withIconProps(Right);
RightWithProps.displayName = 'Right';
export default RightWithProps;