import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Send01 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.498 13.5 20.998 3M10.625 13.828l2.628 6.758c.232.596.348.893.514.98a.5.5 0 0 0 .462 0c.167-.086.283-.384.515-.979L21.334 3.7c.21-.537.315-.805.258-.977a.5.5 0 0 0-.316-.316c-.172-.057-.44.048-.978.257L3.411 9.253c-.595.233-.893.349-.98.516a.5.5 0 0 0 0 .461c.087.167.385.283.98.514l6.758 2.629c.121.047.182.07.233.106a.5.5 0 0 1 .116.117c.037.051.06.111.107.232Z" /></svg>;
const ForwardRef = forwardRef(Send01);
export default ForwardRef;