export const getClosestNegativeNumberToZero = (
  numbers: number[] | null
): number | null => {
  if (!numbers) return null;
  const negativeNumbers = numbers.filter((n) => n < 0);
  if (negativeNumbers.length === 0) return null;
  return Math.max(...negativeNumbers);
};

export const getClosestNegativeNumberToZeroFromObject = (
  numbers:
    | { assignment: "combined" | "chairman" | "reader"; weeksValue: number }[]
    | null
): {
  assignment: "combined" | "chairman" | "reader";
  weeksValue: number;
} | null => {
  if (!numbers) return null;
  const negativeNumbers = numbers.filter((n) => n.weeksValue < 0);
  if (negativeNumbers.length === 0) return null;

  // Create a copy and sort it by the key value (lowest first)
  const sorted = [...negativeNumbers].sort(
    (a, b) => b.weeksValue - a.weeksValue
  );

  // Return the first element (which has the lowest key value)
  // We know the array is not empty at this point

  if (sorted[0]) {
    return {
      assignment: sorted[0].assignment,
      weeksValue: sorted[0].weeksValue * -1,
    };
  }
  return null;
};
