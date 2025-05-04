import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlertsFeedbackThumbsDown = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.001 2v11m5-3.2V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.481 2 19.921 2 18.801 2H8.119c-1.461 0-2.192 0-2.782.267a3 3 0 0 0-1.275 1.094c-.354.542-.465 1.265-.687 2.71l-.523 3.4c-.293 1.904-.44 2.857-.157 3.598a3 3 0 0 0 1.32 1.539C4.705 15 5.668 15 7.596 15h.805c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.934A2.466 2.466 0 0 0 12.467 22a.821.821 0 0 0 .751-.488l3.36-7.562c.154-.344.23-.516.35-.642a1 1 0 0 1 .384-.249c.164-.059.352-.059.729-.059h.76c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108Z" /></svg>;
const ForwardRef = forwardRef(AlertsFeedbackThumbsDown);
export default ForwardRef;