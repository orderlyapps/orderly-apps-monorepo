export const getDifferenceBetweenNumbers = (
  a: number | null,
  b: number | null
): number | null => {
  if (a === null || b === null) {
    return null;
  }

  return Math.max(a, b) - Math.min(a, b);
};
