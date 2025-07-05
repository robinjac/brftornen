import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trim = (html: string): string => {
  return (
    html
      // Remove comments
      .replace(/<!--.*?-->/g, "")
      // Remove unnecessary whitespace between tags
      .replace(/>\s+</g, "><")
      // Remove leading and trailing whitespace
      .trim()
  );
};

export function kebabToCamelCase(str: string): string {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

export function toDateString(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
