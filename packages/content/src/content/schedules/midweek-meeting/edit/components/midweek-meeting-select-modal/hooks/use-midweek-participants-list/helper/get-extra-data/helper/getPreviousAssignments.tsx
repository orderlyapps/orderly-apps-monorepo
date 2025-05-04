import { SeedData } from "./prepareSeedData.js";

export const getPreviousAssignments = ({
  assignments,
  currentWeek,
}: SeedData) => {
  const filteredEarlierAssignments = assignments.filter(
    (assignment) => assignment.time < currentWeek.getTime()
  );

  const previousThreeAssignments = filteredEarlierAssignments.slice(-5);

  const previousAssignments = previousThreeAssignments.map((assignment) => {
    return {
      ...assignment,
      weeksSinceAssignment: Math.round(
        (currentWeek.getTime() - assignment.time) / 1000 / 60 / 60 / 24 / 7
      ),
    };
  });

  return {
    previousAssignments,
    weeksSinceLastAssignment:
      previousAssignments[previousAssignments.length - 1]?.weeksSinceAssignment || null,
  };
};
