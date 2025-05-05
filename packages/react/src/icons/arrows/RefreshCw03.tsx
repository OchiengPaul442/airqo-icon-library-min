import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const RefreshCw03 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 22s.85-.121 4.364-3.636A9 9 0 0 0 14 3.224M14 22h6m-6 0v-6M10 2s-.85.122-4.364 3.636A9 9 0 0 0 10 20.776M10 2H4m6 0v6" /></svg>;
const ForwardRef = forwardRef(RefreshCw03);
export default ForwardRef;