import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Bell01 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.355 21c.705.622 1.631 1 2.646 1a3.99 3.99 0 0 0 2.646-1M18 8A6 6 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.185-.179.2-.361.014-.165-.353-.755-1.088-1.936C18.78 13.206 18 11.09 18 8Z" /></svg>;
const ForwardRef = forwardRef(Bell01);
export default ForwardRef;