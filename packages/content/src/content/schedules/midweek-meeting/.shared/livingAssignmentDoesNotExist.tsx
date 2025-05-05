import { AssignmentProps } from "../details/components/assignment/Assignment.js";

export const livingAssignmentDoesNotExist = ({
  assignment_id,
  data,
}: AssignmentProps) => {
  const assignmentString = assignment_id.match(/living_(\d)/)?.[1] || "0";
  const assignmentNumber = parseInt(assignmentString);
  const assignmentsCount = parseInt(data.meeting_data.mwb_lc_count || "0");
  return assignmentNumber > assignmentsCount;
};
