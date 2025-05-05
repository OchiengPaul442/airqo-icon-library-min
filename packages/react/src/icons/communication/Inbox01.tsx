import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Inbox01 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 12h3.382c.685 0 1.312.387 1.618 1 .306.613.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1 .306-.613.933-1 1.618-1H21.5M8.967 4h6.066c1.077 0 1.616 0 2.091.164a3 3 0 0 1 1.121.693c.36.352.6.833 1.082 1.796l2.166 4.333c.19.378.284.567.35.765.06.177.102.357.128.541.029.207.029.418.029.841V15.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2v-2.067c0-.422 0-.634.029-.84.026-.184.068-.365.128-.541.066-.199.16-.388.35-.766l2.166-4.333c.482-.963.723-1.444 1.082-1.796a3 3 0 0 1 1.12-.693C7.352 4 7.89 4 8.968 4Z" /></svg>;
const ForwardRef = forwardRef(Inbox01);
export default ForwardRef;