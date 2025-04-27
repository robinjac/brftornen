export function replacePlaceholders(str: string, ...values: string[]): string {
  return str.replace(
    /{(\d+)}/g,
    (match, index) => values[parseInt(index)] || match
  );
}
