import * as React from 'react';
import { forwardRef } from 'react';
import { IconProps } from '../types/icon';

/**
 * Base component for AirQo icons
 * This is used as a fallback for icons that fail to generate properly
 */
const IconBase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = 24,
    color = 'currentColor',
    title,
    titleId,
    children,
    ...rest
  } = props;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      {children || (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      )}
    </svg>
  );
});

IconBase.displayName = 'IconBase';

export default IconBase;
