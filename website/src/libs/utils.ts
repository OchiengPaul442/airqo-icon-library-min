// Define ClassValue type if not available in the clsx package
type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean } | ClassValue[];
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines Tailwind CSS classes
 * and handles class name conflicts properly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Make sure this is a proper module
export default { cn };
