import {
  getClosestNegativeNumberToZero,
  getClosestNegativeNumberToZeroFromObject,
} from "@amodeo/util/array/getClosestNegativeNumberToZero";
import {
  getClosestPositiveNumberToZero,
  getClosestPositiveNumberToZeroFromObject,
} from "@amodeo/util/array/getClosestPositiveNumberToZero";
import { getDifferenceBetweenNumbers } from "@amodeo/util/math/getDifferencBetweenNumbers";

export const getAssignmentStats = <T extends Record<string, number>>(
  calculatedAssignments: {
    assignment: keyof T;
    weeksValue: number;
  }[],
  assignment: keyof T | "combined"
) => {
  const filteredAssignments =
    assignment === "combined"
      ? calculatedAssignments
      : calculatedAssignments.filter((a) => a.assignment === assignment);

  const firstAssignment = filteredAssignments?.[0];

  const lastAssignment = filteredAssignments?.[filteredAssignments.length - 1];

  const differenceBetweenFirstAndLastAssignment = {
    weeksValue:
      (lastAssignment &&
        firstAssignment &&
        lastAssignment.weeksValue - firstAssignment.weeksValue) ||
      null,
  };

  const averageAssignments = {
    weeksValue:
      filteredAssignments &&
      differenceBetweenFirstAndLastAssignment.weeksValue &&
      filteredAssignments?.length > 1 &&
      differenceBetweenFirstAndLastAssignment.weeksValue /
        (filteredAssignments.length - 1 || 0),
  };

  const previousAssignment = getClosestNegativeNumberToZeroFromObject(
    filteredAssignments as any
  );

  const nextAssignment = getClosestPositiveNumberToZeroFromObject(
    filteredAssignments as any
  );

  const weeksBetweenPreviousAndNextAssignment = {
    weeksValue: getDifferenceBetweenNumbers(
      nextAssignment?.weeksValue || null,
      (previousAssignment?.weeksValue && previousAssignment?.weeksValue * -1) ||
        null
    ),
  };

  const currentWeek = filteredAssignments?.some((a) => a.weeksValue === 0);

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
