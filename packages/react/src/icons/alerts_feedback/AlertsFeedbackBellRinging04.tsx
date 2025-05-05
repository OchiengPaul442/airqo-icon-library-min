import * as React from 'react';
import { IconProps } from '../../types/icon';
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlertsFeedbackBellRinging04 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps, ref: Ref<SVGSVGElement>) => <svg fill="none" viewBox="0 0 24 24" role="img" width="1em" height="1em" ref={ref} aria-labelledby={titleId} {...props}
      ref={ref}
      width={size}
      height={size}
      stroke={color}
      role="img"
      {...props}>{title ? <title id={titleId}>{title}</title> : null}<path stroke="#1C1D20" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.645 18.014a3 3 0 1 1-5.796 1.553m-7.793-7.954a4.007 4.007 0 0 1 1.052-3.926m9.037-1.947a2.5 2.5 0 1 0-3.47.93m11.643.05a4.007 4.007 0 0 0-2.874-2.874m.046 5.599c-.357-1.332-1.31-2.446-2.65-3.097-1.339-.65-2.955-.785-4.492-.373-1.537.412-2.87 1.336-3.704 2.57-.834 1.232-1.102 2.674-.745 4.006.59 2.204.475 3.962.102 5.298-.425 1.523-.637 2.285-.58 2.437.066.175.114.223.288.29.152.06.792-.112 2.071-.454l11.865-3.18c1.28-.343 1.92-.514 2.022-.641.117-.146.134-.211.104-.395-.027-.162-.592-.715-1.721-1.821-.991-.97-1.97-2.436-2.56-4.64Z" /></svg>;
const ForwardRef = forwardRef(AlertsFeedbackBellRinging04);
AlertsFeedbackBellRinging04.displayName = 'AlertsFeedbackBellRinging04';
export default AlertsFeedbackBellRinging04;