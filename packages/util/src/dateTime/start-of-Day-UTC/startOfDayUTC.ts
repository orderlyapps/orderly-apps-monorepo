/**
 * Returns a new Date object with the time set to the start of the day in UTC.
 *
 * @param {Date|string} date The date to get the start of day for.
 * @returns {Date} A new Date object with the time set to the start of the day in UTC.
 */

export function startOfDayUTC(date: Date | string): Date {
  const d = new Date(date);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}
