import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowCircleBrokenDownRight = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.41 2.34a9.996 9.996 0 0 1 9.661 2.589c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0a9.996 9.996 0 0 1-2.59-9.66M15 9v6m0 0H9m6 0L5 5" /></svg>;
const ForwardRef = forwardRef(ArrowCircleBrokenDownRight);
export default ForwardRef;