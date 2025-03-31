export const getClosestNegativeNumberToZero = (
  numbers: number[] | null
): number | null => {
  if (!numbers) return null;
  const negativeNumbers = numbers.filter((n) => n < 0);
  if (negativeNumbers.length === 0) return null;
  return Math.max(...negativeNumbers);
};
