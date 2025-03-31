export const getClosestPositiveNumberToZero = (
  numbers: number[] | null
): number | null => {
  if (!numbers) return null;
  const positiveNumbers = numbers.filter((n) => n > 0);
  if (positiveNumbers.length === 0) return null;
  return Math.min(...positiveNumbers);
};
