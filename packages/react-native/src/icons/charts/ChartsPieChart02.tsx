import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChartsPieChart02 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.2 13.982c.277 0 .416 0 .528.062a.53.53 0 0 1 .22.243c.05.118.037.243.012.494a8 8 0 1 1-8.759-8.759c.251-.025.376-.038.494.012a.53.53 0 0 1 .243.22c.062.113.062.251.062.528v6.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.219c.107.054.247.054.527.054h6.4ZM14 2.782c0-.277 0-.415.062-.528a.53.53 0 0 1 .243-.22c.117-.05.243-.037.494-.012a8 8 0 0 1 7.161 7.161c.025.251.038.377-.012.494a.53.53 0 0 1-.22.244c-.113.061-.251.061-.528.061h-6.4c-.28 0-.42 0-.527-.054a.5.5 0 0 1-.218-.219C14 9.602 14 9.462 14 9.182v-6.4Z" /></Svg>;
const ChartsPieChart02WithProps = withIconProps(ChartsPieChart02);
ChartsPieChart02WithProps.displayName = 'ChartsPieChart02';
export default ChartsPieChart02WithProps;