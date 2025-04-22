import { AssignmentProps } from "../Assignment.js";

export const applyAssignmentDoesNotExist = ({
  assignment,
  data,
}: AssignmentProps) => {
  const assignmentString = assignment.match(/school_\d_apply_(\d)/)?.[1] || "0";
  const assignmentNumber = parseInt(assignmentString);
  const assignmentsCount = parseInt(data.meeting_data.mwb_ayf_count || "0");
  return assignmentNumber > assignmentsCount;
};
