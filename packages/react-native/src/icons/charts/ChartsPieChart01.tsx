import * as React from 'react';
import { withIconProps } from '../../withIconProps';
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChartsPieChart01 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.21 15.89A10 10 0 1 1 8 2.83m13.24 5.344a10 10 0 0 1 .728 3.027c.021.257.031.386-.02.501a.525.525 0 0 1-.22.239c-.11.06-.25.06-.528.06h-8.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C12 11.62 12 11.48 12 11.2V2.8c0-.278 0-.417.06-.528a.525.525 0 0 1 .239-.22c.115-.051.244-.041.5-.02a10 10 0 0 1 8.44 6.14Z" /></Svg>;
const ChartsPieChart01WithProps = withIconProps(ChartsPieChart01);
ChartsPieChart01WithProps.displayName = 'ChartsPieChart01';
export default ChartsPieChart01WithProps;