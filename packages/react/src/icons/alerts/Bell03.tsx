import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Bell03 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.999 19a3 3 0 1 1-6 0m4.796-12.761a2.5 2.5 0 1 0-3.593 0M18 11.2c0-1.38-.632-2.702-1.758-3.677C15.116 6.548 13.59 6 12 6c-1.592 0-3.118.548-4.243 1.523C6.631 8.498 6 9.821 6 11.2c0 2.282-.566 3.95-1.272 5.145-.805 1.36-1.207 2.041-1.191 2.204.018.186.051.244.202.355.132.096.794.096 2.119.096H18.14c1.324 0 1.987 0 2.118-.096.151-.11.185-.17.203-.355.016-.163-.387-.843-1.191-2.204-.706-1.194-1.272-2.863-1.272-5.145Z" /></svg>;
const ForwardRef = forwardRef(Bell03);
export default ForwardRef;