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
          (currentWeek.getTime() - assignment.time) / 1000 / 60 / 60 / 24 / 7
        ),
      };
    });

  return {
    lastSpecificAssignment: lastSpecificAssignments[0]
      ? {
          ...lastSpecificAssignments[0],
          // assignmentType: currentAssignmentData.type,
        }
      : null,
    weeksSinceLastSpecificAssignment:
      lastSpecificAssignments[0]?.weeksSinceAssignment || null,
  };
};
