import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Send03 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.501 11.999h-5.5m-.084.291-2.335 6.975c-.184.548-.275.822-.21.99a.5.5 0 0 0 .332.3c.174.05.438-.07.965-.306l16.711-7.52c.515-.232.772-.348.851-.509a.5.5 0 0 0 0-.443c-.08-.16-.337-.276-.85-.508L3.662 3.747c-.525-.237-.788-.355-.962-.307a.5.5 0 0 0-.332.3c-.066.168.025.441.206.988l2.342 7.056a.967.967 0 0 1 .053.19.5.5 0 0 1 0 .128 1.055 1.055 0 0 1-.053.188Z" /></svg>;
const ForwardRef = forwardRef(Send03);
export default ForwardRef;