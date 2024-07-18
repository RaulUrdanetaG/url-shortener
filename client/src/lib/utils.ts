import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateUrl(link: string) {
  try {
    new URL(link);
    return true;
  } catch (error) {
    return false;
  }
}
