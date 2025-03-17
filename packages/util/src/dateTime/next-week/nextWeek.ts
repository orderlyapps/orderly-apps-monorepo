/**
 * Return the date string for the week after the provided date.
 *
 * @param {string} dateString - The date string (format: yyyy-mm-dd) to get the next week for.
 * @returns {string} The date string (format: yyyy-mm-dd) for the week after the provided date.
 */
export const getNextWeek = (dateString: string): string => {
  const date = new Date(Date.parse(`${dateString}T00:00:00.000Z`));
  const nextWeekDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  return nextWeekDate.toISOString().slice(0, 10);
};
