import { SeedData } from "./prepareSeedData.js";

export const getWeeksBetweenPreviousAndNextAssignments = ({
  assignments,
  currentWeek,
}: SeedData) => {
  const pastAssignments = assignments.filter(
    (assignment) => assignment.time < currentWeek.getTime()
  );

  const futureAssignments = assignments.filter(
    (assignment) => assignment.time > currentWeek.getTime()
  );

  const pastAssignment = pastAssignments[pastAssignments.length - 1];

  const futureAssignment = futureAssignments[0];

  const weeksBetweenAssignments =
    pastAssignment && futureAssignment
      ? Math.round(
          (futureAssignment.time - pastAssignment.time) /
            1000 /
            60 /
            60 /
            24 /
            7
        )
      : null;

  const result = weeksBetweenAssignments;
  return result;
};
