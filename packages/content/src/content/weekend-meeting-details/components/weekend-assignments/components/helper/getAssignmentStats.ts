import { getClosestNegativeNumberToZero } from "@amodeo/util/array/getClosestNegativeNumberToZero";
import { getClosestPositiveNumberToZero } from "@amodeo/util/array/getClosestPositiveNumberToZero";
import { getDifferenceBetweenNumbers } from "@amodeo/util/math/getDifferencBetweenNumbers";

export const getAssignmentStats = <T extends Record<string, number>>(
  calculatedAssignments: {
    assignment: keyof T;
    weeksFromCurrentDate: number;
  }[],
  assignment: keyof T | "combined"
) => {
  const filteredAssignments =
    assignment === "combined"
      ? calculatedAssignments.map((a) => {
          return a.weeksFromCurrentDate;
        })
      : (calculatedAssignments
          .map((a) => {
            return a.assignment === assignment ? a.weeksFromCurrentDate : null;
          })
          .filter((a) => a !== null) as number[] | null);

  const firstAssignment = filteredAssignments?.[0];

  const lastAssignment = filteredAssignments?.[filteredAssignments.length - 1];

  const differenceBetweenFirstAndLastAssignment =
    (lastAssignment && firstAssignment && lastAssignment - firstAssignment) ||
    null;

  const averageAssignments =
    filteredAssignments &&
    differenceBetweenFirstAndLastAssignment &&
    filteredAssignments?.length > 1 &&
    differenceBetweenFirstAndLastAssignment /
      (filteredAssignments.length - 1 || 0);

  const previousAssignment =
    getClosestNegativeNumberToZero(filteredAssignments);

  const nextAssignment = getClosestPositiveNumberToZero(filteredAssignments);

  const weeksBetweenPreviousAndNextAssignment = getDifferenceBetweenNumbers(
    nextAssignment,
    previousAssignment
  );

  const currentWeek = filteredAssignments?.includes(0);

  return {
    allAssignments: filteredAssignments,
    differenceBetweenFirstAndLastAssignment,
    averageAssignments,
    previousAssignment,
    nextAssignment,
    weeksBetweenPreviousAndNextAssignment,
    currentWeek,
  };
};
