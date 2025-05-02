import { SeedData } from "./prepareSeedData.js";

export const getPastAssignments = ({ assignments, currentWeek }: SeedData) => {
  const filteredEarlierAssignments = assignments.filter(
    (assignment) => assignment.time < currentWeek.getTime()
  );

  const previousThreeAssignments = filteredEarlierAssignments.slice(-3);

  const filteredProperAssignments = previousThreeAssignments.map(
    (assignment) => {
      return {
        ...assignment,
        weeksSinceAssignment: Math.round(
          (currentWeek.getTime() - assignment.time) / 1000 / 60 / 60 / 24 / 7
        ),
      };
    }
  );

  const pastAssignments = filteredProperAssignments.sort(
    (a, b) => b.time - a.time
  );

  return {
    pastAssignments,
    weeksSinceLastAssignment: pastAssignments[0]?.weeksSinceAssignment || null,
  };
};
