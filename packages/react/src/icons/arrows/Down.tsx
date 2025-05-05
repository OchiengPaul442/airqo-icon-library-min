import * as React from 'react';
import { IconProps } from '../../types/icon';
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Down = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h3.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C16 8.56 16 10.24 16 13.6V20m0 0-5-5m5 5 5-5" /></svg>;
const ForwardRef = forwardRef(Down);
Down.displayName = 'Down';
export default Down;