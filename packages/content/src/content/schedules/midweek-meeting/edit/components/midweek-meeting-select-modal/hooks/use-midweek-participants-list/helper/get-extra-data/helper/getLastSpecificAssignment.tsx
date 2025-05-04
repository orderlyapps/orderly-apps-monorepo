import { formatDate } from "date-fns";
import { SeedData } from "./prepareSeedData.js";

export const getLastSpecificAssignment = ({
  assignments,
  currentWeek,
  currentAssignmentData,
  rest,
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

  if (rest.first_name === "Lauchlan") {
    console.log(
      rest.first_name,
      assignments,
      lastSpecificAssignments[lastSpecificAssignments.length - 1]
    );
  }

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
