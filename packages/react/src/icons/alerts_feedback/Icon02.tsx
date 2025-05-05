import * as React from 'react';
import { IconProps } from '../../types/icon';
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Icon02 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 21h-4M2.292 5.82A4.007 4.007 0 0 1 4.325 2.3m17.377 3.52a4.007 4.007 0 0 0-2.033-3.52M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.088 1.936.015.182.053.252.2.36.133.099.73.099 1.927.099H18.61c1.197 0 1.795 0 1.928-.098.146-.11.185-.179.2-.361.014-.165-.354-.755-1.088-1.936C18.779 13.206 18 11.09 18 8Z" /></svg>;
const ForwardRef = forwardRef("02");
"02".displayName = '"02"';
export default "02";