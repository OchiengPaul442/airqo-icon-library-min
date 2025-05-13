import React from 'react';

import { LucideProps } from 'lucide-react';

type IconComponentProps = Omit<LucideProps, 'ref'>;

interface ClientIconProps {
  icon:
    | React.FC<IconComponentProps>
    | React.ForwardRefExoticComponent<
        IconComponentProps & React.RefAttributes<SVGSVGElement>
      >;
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  [key: string]: unknown;
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
