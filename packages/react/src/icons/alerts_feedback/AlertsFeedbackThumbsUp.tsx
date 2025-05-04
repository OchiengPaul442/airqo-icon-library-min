import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlertsFeedbackThumbsUp = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 22V11m-5 2v7a2 2 0 0 0 2 2h13.426a3 3 0 0 0 2.965-2.544l1.077-7A3 3 0 0 0 18.503 9H15a1 1 0 0 1-1-1V4.466A2.466 2.466 0 0 0 11.534 2a.822.822 0 0 0-.75.488l-3.52 7.918A1 1 0 0 1 6.35 11H4a2 2 0 0 0-2 2Z" /></svg>;
const ForwardRef = forwardRef(AlertsFeedbackThumbsUp);
export default ForwardRef;