/**
 * Format two dates as a short date range (e.g. "Mar 1 to Mar 7")
 *
 * @example
 *  formatStartEndDate("2022-03-01", "2022-03-07") // "Mar 1 to Mar 7"
 *  formatStartEndDate("2022-03-15", "2022-03-21") // "Mar 15 to Mar 21"
 *  formatStartEndDate("2022-12-26", "2023-01-01") // "Dec 26 to Jan 1"
 * @param {string} startDateString - The start date string (format: yyyy-mm-dd)
 * @param {string} endDateString - The end date string (format: yyyy-mm-dd)
 * @returns {string} The formatted date range string
 */
export function formatStartEndDate(
  startDateString: string | null | undefined,
  endDateString: string | null | undefined,
  options?: {
    uppercase?: boolean;
    month?: "long" | "short";
  }
): string {
  if (!startDateString || !endDateString) {
    return "";
  }

  const startDate = new Date(Date.parse(`${startDateString}T00:00:00.000Z`));
  const endDate = new Date(Date.parse(`${endDateString}T00:00:00.000Z`));
  endDate.setDate(endDate.getDate() + 6);

  const start = startDate.toLocaleString("en-US", {
    day: "numeric",
    month: options?.month || "short",
  });

  const end = endDate.toLocaleString("en-US", {
    day: "numeric",
    month: options?.month || "short",
  });
  
  if (options?.uppercase) {
    return `${start.toUpperCase()} to ${end.toUpperCase()}`;
  }

  return `${start} to ${end}`;
}
