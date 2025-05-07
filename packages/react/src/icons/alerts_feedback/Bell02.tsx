import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Bell02 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 21h-4m8-13A6 6 0 0 0 6 8c0 3.09-.779 5.206-1.65 6.605-.734 1.18-1.101 1.771-1.088 1.936.015.182.054.252.2.36.133.099.731.099 1.928.099h13.222c1.196 0 1.794 0 1.927-.098.147-.11.185-.179.2-.361.014-.165-.353-.755-1.088-1.936-.87-1.399-1.65-3.515-1.65-6.605Z" /></svg>;
const ForwardRef = forwardRef(Bell02);
export default ForwardRef;