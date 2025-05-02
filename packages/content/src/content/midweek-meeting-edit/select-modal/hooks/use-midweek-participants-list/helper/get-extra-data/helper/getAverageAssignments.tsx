import { SeedData } from "./prepareSeedData.js";
import { properAssignments } from "./assignmentData.js";
import { roundNumber } from "@amodeo/util/math/roundNumber";

export const getAverageAssignments = ({ assignments }: SeedData) => {
  const filteredProperAssignments = assignments.filter((assignment) =>
    properAssignments.includes(assignment.assignment)
  );

  const lastAssignment =
    filteredProperAssignments[filteredProperAssignments.length - 1];

  const firstAssignment = filteredProperAssignments[0];

  const timeBetweenFirstAndLastAssignment =
    firstAssignment && lastAssignment
      ? lastAssignment.time - firstAssignment.time
      : null;

  const weeksBetweenAssignments = timeBetweenFirstAndLastAssignment
    ? timeBetweenFirstAndLastAssignment / 1000 / 60 / 60 / 24 / 7
    : null;

  const averageWeeksBetweenAssignments = weeksBetweenAssignments
    ? roundNumber(
        weeksBetweenAssignments / (filteredProperAssignments.length - 1)
      )
    : null;

  return averageWeeksBetweenAssignments;
};
