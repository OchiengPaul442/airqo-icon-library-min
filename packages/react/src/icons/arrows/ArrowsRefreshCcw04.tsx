import * as React from 'react';
import { IconProps } from '../../types/icon';
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowsRefreshCcw04 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 18.874A8.5 8.5 0 0 0 12 3.5h-.5m.5 17A8.5 8.5 0 0 1 7 5.126M11 22.4l2-2-2-2m2-12.8-2-2 2-2" /></svg>;
const ForwardRef = forwardRef(ArrowsRefreshCcw04);
ArrowsRefreshCcw04.displayName = 'ArrowsRefreshCcw04';
export default ArrowsRefreshCcw04;