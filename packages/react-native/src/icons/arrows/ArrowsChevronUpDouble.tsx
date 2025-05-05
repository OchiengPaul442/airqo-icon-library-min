import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsChevronUpDouble = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17 18-5-5-5 5m10-7-5-5-5 5" /></Svg>;
const ArrowsChevronUpDoubleWithProps = withIconProps(ArrowsChevronUpDouble);
ArrowsChevronUpDoubleWithProps.displayName = 'ArrowsChevronUpDouble';
export default ArrowsChevronUpDoubleWithProps;