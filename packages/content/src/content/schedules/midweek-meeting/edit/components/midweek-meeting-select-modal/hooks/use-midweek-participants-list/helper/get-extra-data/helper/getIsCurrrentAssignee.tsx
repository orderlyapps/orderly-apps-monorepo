import { format as formatDate } from "date-fns";
import { SeedData } from "./prepareSeedData.js";

export const getIsCurrrentAssignee = ({
  assignments,
  currentWeek,
  currentAssignmentData,
}: SeedData) => {
  const isCurrentAssignee = assignments?.some(
    (assignment) =>
      assignment.week_id === formatDate(currentWeek, "yyyy-MM-dd") &&
      assignment.assignment === currentAssignmentData.id
  );
  return isCurrentAssignee;
};
