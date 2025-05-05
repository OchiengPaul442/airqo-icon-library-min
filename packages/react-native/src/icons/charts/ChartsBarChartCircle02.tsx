import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChartsBarChartCircle02 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<G clipPath="url(#a)"><Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18v2m4-6v6m4-10v10m6-5c0 5.523-4.477 10-10 10S2 20.523 2 15 6.477 5 12 5s10 4.477 10 10Z" /></G><Defs><ClipPath id="a"><Path fill="#fff" d="M0 0h24v24H0z" /></ClipPath></Defs></Svg>;
const ChartsBarChartCircle02WithProps = withIconProps(ChartsBarChartCircle02);
ChartsBarChartCircle02WithProps.displayName = 'ChartsBarChartCircle02';
export default ChartsBarChartCircle02WithProps;