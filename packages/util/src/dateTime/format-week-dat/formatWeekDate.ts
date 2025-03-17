/**
 * Format a date string as a short date range (e.g. "Mar 1 - 7")
 *
 * @example
 *  formatWeekDate("2022-03-01T00:00:00.000Z") // "Mar 1 - 7"
 *  formatWeekDate("2022-03-15T00:00:00.000Z") // "Mar 15 - 21"
 *  formatWeekDate("2022-12-26T00:00:00.000Z") // "Dec 26 - Jan 1"
 * @param {string} dateString - The date string to format
 * @returns {string} The formatted date string
 */
export function formatWeekDate(dateString: string): string {
  const date = new Date(Date.parse(dateString));
  const endDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 6
  );
  const start = date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
  });
  const end = endDate.toLocaleString("en-US", {
    day: "numeric",
    month: endDate.getMonth() === date.getMonth() ? undefined : "short",
  });

  const result = `${start}-${end}`;

  return result;
}
