import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsExpand02 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6" /></Svg>;
const ArrowsExpand02WithProps = withIconProps(ArrowsExpand02);
ArrowsExpand02WithProps.displayName = 'ArrowsExpand02';
export default ArrowsExpand02WithProps;