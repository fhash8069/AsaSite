import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle base path for images
export function getImagePath(path: string): string {
  // Always use the base path since it's configured in next.config.js
  return `/asa-site${path}`
} 