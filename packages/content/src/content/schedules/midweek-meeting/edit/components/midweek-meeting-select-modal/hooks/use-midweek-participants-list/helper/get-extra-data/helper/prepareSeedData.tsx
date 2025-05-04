import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { assignmentData } from "./assignmentData.js";
import { startOfWeek } from "date-fns";

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
          time: startOfWeek(assignment.week_id, { weekStartsOn: 1 }).getTime(),

          // new Date(assignment.week_id).getTime(),
        };
      })
      .sort((a, b) => a.time - b.time),
    currentWeek,
    currentAssignmentData: assignmentData[currentAssignment],
    rest: null as any | undefined,
  };
  return seedData;
};
// const currentWeek = startOfWeek(week_id, { weekStartsOn: 1 });
