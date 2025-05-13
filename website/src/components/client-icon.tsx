import React from 'react';

interface ClientIconProps {
  icon: React.FC<any>;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  [key: string]: any;
}

/**
 * A replacement for the ClientIcon component from @airqo-icons-min/react/client
 * This ensures we can use any icon component in a client-side context
 */
export function ClientIcon({
  icon: Icon,
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 1.5,
  ...props
}: ClientIconProps) {
  if (!Icon) return null;

  return (
    <Icon
      className={className}
      width={size}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
