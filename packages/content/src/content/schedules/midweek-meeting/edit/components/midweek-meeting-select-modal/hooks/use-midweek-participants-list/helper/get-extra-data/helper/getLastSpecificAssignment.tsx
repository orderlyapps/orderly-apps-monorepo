import { formatDate } from "date-fns";
import { SeedData } from "./prepareSeedData.js";
import { assignmentData } from "./assignmentData.js";

export const getLastSpecificAssignment = ({
  assignments,
  currentWeek,
  currentAssignmentData,
}: SeedData) => {
  const lastSpecificAssignments = assignments
    .filter((assignment) => assignment.time < currentWeek.getTime())
    .filter((assignment) => {
      if (!assignment.assignment) {
        return true;
      }
      return (
        assignmentData[assignment.assignment as keyof typeof assignmentData]
          .type ===
        assignmentData[currentAssignmentData.id as keyof typeof assignmentData]
          .type
      );
    })
    .map((assignment) => {
      return {
        ...assignment,
        weeksSinceAssignment: Math.round(
          (currentWeek.getTime() - assignment.time) / 1000 / 60 / 60 / 24 / 7
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
