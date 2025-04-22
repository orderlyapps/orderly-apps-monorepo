import {
  MidweekAssignments,
  Tables,
} from "@amodeo/data/supabase/supabase-types";
import { GetAssignmentDataProps } from "./types.js";

const colors = (assignment: MidweekAssignments) => {
  if (assignment.includes("treasures")) return "jw_slate_light";
  if (assignment.includes("gems")) return "jw_slate_light";
  if (assignment.includes("bible")) return "jw_slate_light";
  if (assignment.includes("apply")) return "jw_brown_light";
  if (assignment.includes("living")) return "jw_red_light";
  if (assignment.includes("cbs")) return "jw_red_light";
};

export const getAssignmentColor = ({ assignment }: GetAssignmentDataProps) => {
  return colors(assignment);
};
