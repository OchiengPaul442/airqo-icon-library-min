import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ChartBreakoutSquare = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V13m-9-5h4v4m-.5-8.5V2m3.94 2.56L20.5 3.5m.01 5h1.5M3 13.347c.652.1 1.32.153 2 .153 4.386 0 8.265-2.172 10.62-5.5" /></Svg>;
export default ChartBreakoutSquare;