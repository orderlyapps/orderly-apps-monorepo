import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { assignmentData } from "./assignmentData.js";

export type SeedData = ReturnType<typeof prepareSeedData>;

export const prepareSeedData = ({
  assignments,
  currentWeek,
  currentAssignment,
}: {
  assignments: {
    assignment: MidweekAssignments;
    week_id: string;
  }[];
  currentWeek: Date;
  currentAssignment: MidweekAssignments;
}) => {
  const seedData = {
    assignments: assignments
      .map((assignment) => {
        return {
          ...assignment,
          time: new Date(assignment.week_id).getTime(),
        };
      })
      .sort((a, b) => a.time - b.time),
    currentWeek,
    currentAssignmentData: assignmentData[currentAssignment],
  };
  return seedData;
};
