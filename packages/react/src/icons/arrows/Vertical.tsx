import * as React from 'react';
import { IconProps } from '../../types/icon';
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Vertical = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7 15 5 5 5-5M7 9l5-5 5 5" /></svg>;
const ForwardRef = forwardRef(Vertical);
Vertical.displayName = 'Vertical';
export default Vertical;