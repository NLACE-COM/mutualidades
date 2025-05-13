
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add scrollbar utility for consistent cross-browser scrollbar hiding
export const hideScrollbar = "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent";
