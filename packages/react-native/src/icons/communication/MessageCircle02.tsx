import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MessageCircle02 = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => <Svg fill="none" viewBox="0 0 24 24" role="img" width="24" height="24" aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<Path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 0 1-12.385 8.342c-.2-.081-.3-.122-.38-.14a.909.909 0 0 0-.219-.024 2.31 2.31 0 0 0-.353.045l-3.558.593c-.373.062-.56.093-.694.035a.5.5 0 0 1-.262-.262c-.058-.135-.027-.321.035-.694l.593-3.558c.03-.18.045-.27.045-.353a.907.907 0 0 0-.024-.219c-.018-.08-.059-.18-.14-.38A9 9 0 1 1 21 12Z" /></Svg>;
export default MessageCircle02;