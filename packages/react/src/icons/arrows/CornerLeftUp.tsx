import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CornerLeftUp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 20h-3.4c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C8 15.44 8 13.76 8 10.4V4m0 0 5 5M8 4 3 9" /></svg>;
const ForwardRef = forwardRef(CornerLeftUp);
export default ForwardRef;