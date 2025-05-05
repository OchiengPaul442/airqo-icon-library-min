import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Monitor = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeWidth={1.5} d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6Z" /><path stroke="#1C1D20" strokeWidth={1.5} d="m9.303 11.6 1.5-2c.6-.8 1.8-.8 2.4 0l1.5 2c.741.989.036 2.4-1.2 2.4h-3c-1.236 0-1.942-1.411-1.2-2.4Z" /></svg>;
const ForwardRef = forwardRef(Monitor);
export default ForwardRef;