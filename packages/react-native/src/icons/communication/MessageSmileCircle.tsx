import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MessageSmileCircle = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.999 14s1.312 1.5 3.5 1.5c2.187 0 3.5-1.5 3.5-1.5m-.75-5h.01m-5.51 0h.01m2.74 11a8.5 8.5 0 1 0-8.057-5.783c.108.32.162.481.172.604a.899.899 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529a2.25 2.25 0 0 1 .304-.021.903.903 0 0 1 .186.024c.069.016.155.05.329.116a8.479 8.479 0 0 0 3.055.566Zm3.25-11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" /></Svg>;
export default MessageSmileCircle;