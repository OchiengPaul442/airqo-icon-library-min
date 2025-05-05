import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsRefreshCw04 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 5.125A8.5 8.5 0 0 1 12 20.5h-.5M7 18.874A8.5 8.5 0 0 1 12 3.5h.5m.5 18.9-2-2 2-2M11 5.6l2-2-2-2" /></Svg>;
const ArrowsRefreshCw04WithProps = withIconProps(ArrowsRefreshCw04);
ArrowsRefreshCw04WithProps.displayName = 'ArrowsRefreshCw04';
export default ArrowsRefreshCw04WithProps;