import { formatDate } from "date-fns";
import { SeedData } from "./prepareSeedData.js";

export const getLastSpecificAssignment = ({
  assignments,
  currentWeek,
  currentAssignmentData,
}: SeedData) => {
  const lastSpecificAssignments = assignments
    .filter((assignment) => assignment.time < currentWeek.getTime())
    .filter((assignment) => assignment.assignment === currentAssignmentData.id)
    .map((assignment) => {
      return {
        ...assignment,
        weeksSinceAssignment: Math.round(
          (assignment.time - currentWeek.getTime()) / 1000 / 60 / 60 / 24 / 7
        ),
      };
    });

  return {
    lastSpecificAssignment: lastSpecificAssignments[
      lastSpecificAssignments.length - 1
    ]
      ? {
          ...lastSpecificAssignments[lastSpecificAssignments.length - 1],
        }
      : null,
    weeksSinceLastSpecificAssignment:
      lastSpecificAssignments[lastSpecificAssignments.length - 1]
        ?.weeksSinceAssignment || null,
  };
};
