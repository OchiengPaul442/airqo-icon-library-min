import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MessageNotificationCircle = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.706 3.036a8.5 8.5 0 0 0-7.264 11.18c.108.322.162.482.172.605a.899.899 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529a2.25 2.25 0 0 1 .304-.021.903.903 0 0 1 .186.024c.069.016.155.05.329.116a8.501 8.501 0 0 0 11.52-7.153M20.12 3.88a3 3 0 1 1-4.243 4.242A3 3 0 0 1 20.12 3.88Z" /></svg>;
const ForwardRef = forwardRef(MessageNotificationCircle);
export default ForwardRef;