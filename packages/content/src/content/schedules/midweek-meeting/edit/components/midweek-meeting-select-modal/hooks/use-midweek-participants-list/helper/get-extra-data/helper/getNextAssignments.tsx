import { SeedData } from "./prepareSeedData.js";

export const getNextAssignments = ({ assignments, currentWeek }: SeedData) => {
  const filteredLaterAssignments = assignments.filter(
    (assignment) => assignment.time > currentWeek.getTime()
  );

  const nextThreeAssignments = filteredLaterAssignments.slice(0, 5);

  const filteredProperAssignments = nextThreeAssignments.map(
    (assignment) => {
      return {
        ...assignment,
        weeksUntillAssignment: Math.round(
          (assignment.time - currentWeek.getTime()) / 1000 / 60 / 60 / 24 / 7
        ),
      };
    }
  );

  const nextAssignments = filteredProperAssignments.sort(
    (a, b) => a.time - b.time
  );

  return {
    nextAssignments,
    weeksUntillNextAssignment: nextAssignments[0]?.weeksUntillAssignment || null,
  };
};
