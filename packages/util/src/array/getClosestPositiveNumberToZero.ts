export const getClosestPositiveNumberToZero = (
  numbers: number[] | null
): number | null => {
  if (!numbers) return null;
  const positiveNumbers = numbers.filter((n) => n > 0);
  if (positiveNumbers.length === 0) return null;
  return Math.min(...positiveNumbers);
};

export const getClosestPositiveNumberToZeroFromObject = (
  numbers:
    | { assignment: "combined" | "chairman" | "reader"; weeksValue: number }[]
    | null
): {
  assignment: "combined" | "chairman" | "reader";
  weeksValue: number;
} | null => {
  if (!numbers) return null;
  const positiveNumbers = numbers.filter((n) => n.weeksValue > 0);
  if (positiveNumbers.length === 0) return null;

  // Create a copy and sort it by the key value (lowest first)
  const sorted = [...positiveNumbers].sort(
    (a, b) => a.weeksValue - b.weeksValue
  );

  // Return the first element (which has the lowest key value)
  // We know the array is not empty at this point
  if (sorted[0]) {
    return {
      assignment: sorted[0].assignment,
      weeksValue: sorted[0].weeksValue,
    };
  }
  return null;
};
