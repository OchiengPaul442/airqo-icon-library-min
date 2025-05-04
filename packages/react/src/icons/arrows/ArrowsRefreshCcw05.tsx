import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsRefreshCcw05 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.545 19.769A8.5 8.5 0 0 0 19.36 7.752l-.25-.434M4.637 16.251A8.5 8.5 0 0 1 15.452 4.234M2.492 16.335l2.732.732.732-2.732m12.085-4.668.732-2.732 2.733.732" /></svg>;
const ForwardRef = forwardRef(ArrowsRefreshCcw05);
export default ForwardRef;