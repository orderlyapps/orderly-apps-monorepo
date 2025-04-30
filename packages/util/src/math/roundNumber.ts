export const roundNumber = (
  number: number,
  { decimalPlaces }: { decimalPlaces?: 1 | 2 | 3 } = {}
) => {
  const places = 10 ** (decimalPlaces ?? 1);
  return Math.round(number * places) / places;
};
