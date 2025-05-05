import * as React from 'react';
import { IconProps } from '../../types/icon';
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Icon12 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 "12".76 3 13.04 3 13.6v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H9m0 0h6m-6 0V8.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 7 10.04 7 10.6 7h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 7.76 15 8.04 15 8.6V21m0 0h4.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 3 19.96 3 19.4 3h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 3.76 15 4.04 15 4.6V8" /></svg>;
const ForwardRef = forwardRef("12");
"12".displayName = '"12"';
export default "12";