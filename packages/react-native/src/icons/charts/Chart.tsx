import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Chart = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 20v-7m-8 7V10M4 20v-4m9.407-10.973 5.168 1.939M10.8 5.4 5.2 9.6m15.86-3.16a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Zm-16 3a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12Zm8-6a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z" /></Svg>;
const ChartWithProps = withIconProps(Chart);
ChartWithProps.displayName = 'Chart';
export default ChartWithProps;