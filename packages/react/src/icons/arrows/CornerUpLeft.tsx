import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CornerUpLeft = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14 4 9m0 0 5-5M4 9h6.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C20 13.56 20 15.24 20 18.6V20" /></svg>;
const ForwardRef = forwardRef(CornerUpLeft);
export default ForwardRef;