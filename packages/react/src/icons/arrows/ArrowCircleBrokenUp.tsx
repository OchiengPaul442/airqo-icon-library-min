import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowCircleBrokenUp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20.662A9.996 9.996 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.996 9.996 0 0 1-5 8.662M16 12l-4-4m0 0-4 4m4-4v14" /></svg>;
const ForwardRef = forwardRef(ArrowCircleBrokenUp);
export default ForwardRef;