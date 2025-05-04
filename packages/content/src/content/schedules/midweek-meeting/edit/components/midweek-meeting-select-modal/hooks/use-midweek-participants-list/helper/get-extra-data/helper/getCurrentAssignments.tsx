import { SeedData } from "./prepareSeedData.js";

export const getCurrentAssignments = ({
  assignments,
  currentWeek,
}: SeedData) => {
  const currentAssignments = assignments.filter(
    (assignment) => assignment.time === currentWeek.getTime()
  );

  return {
    currentAssignments,
  };
};
